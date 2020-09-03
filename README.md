# extract-apis-webpack-plugins

## Install

```javascript
yarn add @ordures/extract-apis-webpack-plugins --dev
```

或

```javascript
npm install @ordures/extract-apis-webpack-plugins --dev
```

## Usage

webpack:

```javascript
plugins: [
    new ExtractApisPlugin({
      filename: 'apis',
      requireContext: ['/src/modules/', '/src/components/'],
      outputPath: '/src/types/apis-keys.d.ts'
    })
  ]
```

## Options

```javascript
/**
 * 要匹配文件的地址
 * default: ['/src/modules', '/src/components']
 */
paths?: string[];

/**
 * 要匹配的文件名
 * default: apis
 */
filename?: string;

/**
 * 输出文件的地址
 * default: /src/types
 */
outputPath?: string;

/**
 * 输出文件名
 * default: apis-keys.d.ts
 */
outputFilename?: string;

/**
 * 是否打印编译错误日志
 */
verbose?: boolean;
```

## 诞生背景

1. 每次新定义一个 api 和修改 api 名称需要修改 apis-keys.d.ts 文件，降低了开发效率

2. 旧的 extract-apis-webpack-plugins 插件出现了几个问题影响使用

3. 每次触发 webpack 的 emit 事件必然会修改 apis-keys.d.ts，影响 git 操作

4. 项目构建时因为项目打包没有 apis.ts 文件引起报错

5. 没有对应 ts 文件，参数靠文档

...

## 技术栈

1. 编译工具 babel

2. ts
