import { VXETableCore } from 'vxe-table'


/**
 * 基于 vxe-table 的表格插件，提供一些常用的校验
 */
export const VXETablePluginValidator = {
  install (vxetablecore: VXETableCore) {}
}

if (typeof window !== 'undefined' && window.VXETable && window.VXETable.use) {
  window.VXETable.use(VXETablePluginValidator)
}

export default VXETablePluginValidator
