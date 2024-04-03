# vxe-table-plugin-validator

[![gitee star](https://gitee.com/x-extends/vxe-table-plugin-validator/badge/star.svg?theme=dark)](https://gitee.com/x-extends/vxe-table-plugin-validator/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-table-plugin-validator.svg?style=flat-square)](https://www.npmjs.com/package/vxe-table-plugin-validator)
[![npm downloads](https://img.shields.io/npm/dm/vxe-table-plugin-validator.svg?style=flat-square)](http://npm-stat.com/charts.html?package=vxe-table-plugin-validator)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

基于 [vxe-table](https://github.com/xuliangzhan/vxe-table) 的表格插件，提供一些常用的校验

## Compatibility

依赖 vxe-table v4 版本  

## Installing

```shell
npm install vxe-table@next vxe-table-plugin-validator@next
```

```javascript
// ...
import VXETable from 'vxe-table'
import VXETablePluginValidator from 'vxe-table-plugin-validator'
// ...

VXETable.use(VXETablePluginValidator)
```

## API

### Validator codes

| code 编码 | describe 描述 | params 参数 |
|------|------|------|
| MOBILE_NUMBER | 手机号13位 | — |
| EMAIL_ADDRESS  | 邮箱地址 | — |
| IDENTITY_CARD  | 身份证号码 | — |
| IP_ADDRESS  | IP地址 | — |
| URL  | URL地址 | — |
| PLATE_NUMBER  | 车牌号 | — |

## Demo

```html
<vxe-table
  :data="tableData"
  :edit-config="{trigger: 'click', mode: 'cell'}"
  :edit-rules="editRules">
  <vxe-column type="seq" width="60"></vxe-column>
  <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
  <vxe-column field="mobile" title="Mobile" :edit-render="{name: 'input'}"></vxe-column>
  <vxe-column field="email" title="Email" :edit-render="{name: 'input'}"></vxe-column>
</vxe-table>
```

```javascript
export default {
  data () {
    return {
      tableData: [
        { id: 100,  name: 'test1', mobile: '', email: '' },
        { id: 101,  name: 'test2', mobile: '', email: '' },
        { id: 102,  name: 'test3', mobile: '', email: '' }
      ],
      editRules: {
        mobile: [
          { required: true, validator: 'MOBILE_NUMBER' }
        ],
        email: [
          { required: true, validator: 'EMAIL_ADDRESS' }
        ]
      }
    }
  }
}
```

## License

MIT License, 2019-present, Xu Liangzhan