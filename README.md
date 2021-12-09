# Mlibs

前端工具库

## 本地开发

```sh
npm run serve
```

## 打包成生产（压缩）文件

```sh
npm run build
```

## 单元测试

```sh
npm run jest
```

## API

- 校验
  1. isQQ 校验是否是QQ号
- 类型
  1. getType 获取数据类型
- 函数
  1. compressImage 压缩图片

## 安装

```sh
npm i mlibs -S
```

## 使用

### 方式一，通过script标签引入

```html
<script src="//cdn.jsdelivr.net/npm/mlibs@1.0.4/dist/mlibs.js"></script>
<script>
  console.log(window.Mlibs)
  const { isQQ, getType } = window.Mlibs;

  console.log(isQQ('2323333339')); // true
  console.log(isQQ('1000')); // false
  
  console.log(getType(true)); // boolean
  console.log(getType(0)); // number
</script>
```

### 方式二，通过模块化引入

```javascript
import { isQQ, getType } from 'mlibs';

console.log(isQQ('2323333339')); // true
console.log(isQQ('1000')); // false

console.log(getType(true)); // boolean
console.log(getType(0)); // number
```