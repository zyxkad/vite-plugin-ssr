export { executeUserHook }
export { isUserHookError }

import { logPrefix, getProjectError } from './assert'
import { getGlobalObject } from './getGlobalObject'
import { humanizeTime } from './humanizeTime'
import { isObject } from './isObject'

type Hook = { hookName: HookName; hookFilePath: string }

const globalObject = getGlobalObject('utils/executeUserHook.ts', {
  userHookErrors: new Map<object, Hook>()
})

type HookName =
  | 'onRenderHtml'
  | 'onRenderClient'
  | 'render'
  | 'onBeforeRender'
  | 'onPrerenderStart'
  | 'onBeforePrerender'
  | 'onBeforeRoute'
  | 'onHydrationEnd'

function isUserHookError(err: unknown): false | Hook {
  if (!isObject(err)) return false
  return globalObject.userHookErrors.get(err) ?? false
}

function executeUserHook<T = unknown>(hookFn: () => T, hookName: HookName, hookFilePath: string): Promise<T> {
  const { timeoutErr, timeoutWarn } = getTimeouts(hookName)

  let resolve!: (ret: T) => void
  let reject!: (err: unknown) => void
  const promise = new Promise<T>((resolve_, reject_) => {
    resolve = (ret) => {
      clearTimeouts()
      resolve_(ret)
    }
    reject = (err) => {
      clearTimeouts()
      reject_(err)
    }
  })

  const clearTimeouts = () => {
    clearTimeout(t1)
    clearTimeout(t2)
  }
  const t1 = setTimeout(() => {
    const msg = `${logPrefix}[Warning] The ${hookName}() hook defined by ${hookFilePath} is taking more than ${humanizeTime(
      timeoutWarn
    )}`
    console.warn(msg)
  }, timeoutWarn)
  const t2 = setTimeout(() => {
    const err = getProjectError(
      `Hook timeout: the ${hookName}() hook defined by ${hookFilePath} didn't finish after ${humanizeTime(timeoutErr)}`
    )
    reject(err)
  }, timeoutErr)

  ;(async () => {
    try {
      const ret = await hookFn()
      resolve(ret)
    } catch (err) {
      if (isObject(err)) {
        globalObject.userHookErrors.set(err, { hookName, hookFilePath })
      }
      reject(err)
    }
  })()

  return promise
}

function getTimeouts(hookName: HookName): { timeoutErr: number; timeoutWarn: number } {
  if (hookName === 'onBeforeRoute') {
    return {
      timeoutErr: 5 * 1000,
      timeoutWarn: 1 * 1000
    }
  }
  if (hookName === 'onBeforePrerender') {
    return {
      timeoutErr: 10 * 60 * 1000,
      timeoutWarn: 30 * 1000
    }
  }
  return {
    timeoutErr: 40 * 1000,
    timeoutWarn: 4 * 1000
  }
}
