import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import uppercamelcase from 'uppercamelcase';
import pkg from './package.json';

// 插件列表
const plugins = [resolve(), commonjs(), typescript()];
// 生产环境加入代码压缩功能
if (process.env.NODE_ENV === 'production') plugins.push(terser());

export default [
  // UMD规范
  {
    input: pkg.main,
    output: {
      // 驼峰命名，并将插件挂载到 window 上: window.Mlibs
      name: uppercamelcase(pkg.name),
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      exports: 'auto'
    },
    plugins
  },
]