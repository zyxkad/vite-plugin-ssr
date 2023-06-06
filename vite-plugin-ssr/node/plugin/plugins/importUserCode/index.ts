export { importUserCode }

import type { Plugin, ResolvedConfig } from 'vite'
import type { ConfigVpsResolved } from '../../../../shared/ConfigVps'
import { getConfigVps } from '../../../shared/getConfigVps'
import { getVirtualFileImportCodeFiles } from './v1-design/getVirtualFileImportCodeFiles'
import { getVirtualFileImportUserCode } from './getVirtualFileImportUserCode'
import {
  assert,
  assertPosixPath,
  getVirtualFileId,
  isDev1,
  isDev1_onConfigureServer,
  isVirtualFileId,
  resolveVirtualFileId
} from '../../utils'
import { isVirtualFileIdImportPageCode } from '../../../shared/virtual-files/virtualFileImportPageCode'
import { isVirtualFileIdImportUserCode } from '../../../shared/virtual-files/virtualFileImportUserCode'
import { getConfigData_dependenciesInvisibleToVite, getConfigData_invalidate } from './v1-design/getConfigData'

function importUserCode(): Plugin {
  let config: ResolvedConfig
  let configVps: ConfigVpsResolved
  return {
    name: 'vite-plugin-ssr:importUserCode',
    config() {
      return {
        experimental: {
          // TODO/v1-release: remove
          importGlobRestoreExtension: true
        }
      }
    },
    async configResolved(config_) {
      configVps = await getConfigVps(config_)
      config = config_
    },
    resolveId(id) {
      if (isVirtualFileId(id)) {
        return resolveVirtualFileId(id)
      }
    },
    handleHotUpdate(ctx) {
      const { file, server } = ctx
      console.log(file)
      assertPosixPath(file)
      getConfigData_dependenciesInvisibleToVite.forEach((f) => assertPosixPath(f))
      if (!getConfigData_dependenciesInvisibleToVite.has(file)) {
        return
      }
      getConfigData_invalidate()
      const mods = Array.from(server.moduleGraph.urlToModuleMap.keys())
        .filter((url) => isVirtualFileIdImportPageCode(url) || isVirtualFileIdImportUserCode(url))
        .map((url) => {
          const mod = server.moduleGraph.urlToModuleMap.get(url)
          assert(mod)
          return mod
        })
      return mods
    },
    async load(id, options) {
      const isDev = isDev1()

      if (!isVirtualFileId(id)) return undefined
      id = getVirtualFileId(id)

      if (isVirtualFileIdImportPageCode(id)) {
        const code = await getVirtualFileImportCodeFiles(id, config.root, isDev, configVps)
        return code
      }

      if (isVirtualFileIdImportUserCode(id)) {
        const code = await getVirtualFileImportUserCode(id, options, configVps, config, isDev)
        return code
      }
    },
    configureServer() {
      isDev1_onConfigureServer()
    }
  }
}
