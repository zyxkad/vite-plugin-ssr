// Internal functions of vps needed by other plugins are exported via this file

import { loadPageRoutes, PageRoutes, route } from '../shared/route'
import { getPageFilesAll, type PageFile } from '../shared/getPageFiles'
import { getGlobalContext, initGlobalContext } from '../node/runtime/globalContext'
import { setNodeEnvToProduction } from '../utils/nodeEnv'

export { route, getPagesAndRoutes }
export type { PageRoutes, PageFile }

/**
 * Used by {@link https://github.com/magne4000/vite-plugin-vercel|vite-plugin-vercel}
 * to compute some rewrite rules and extract { isr } configs.
 * Needs `import 'vite-plugin-ssr/__internal/setup'`
 * @param config
 */
async function getPagesAndRoutes() {
  setNodeEnvToProduction()
  await initGlobalContext(true)
  getGlobalContext()

  const { pageFilesAll, pageConfigs, allPageIds, pageConfigGlobal } = await getPageFilesAll(false, true)

  const { pageRoutes } = await loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds)

  return {
    pageRoutes,
    pageFilesAll,
    pageConfigs,
    allPageIds
  }
}
