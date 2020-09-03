'use strict';

const nodeVersion = require('./config/node-version');
const isProd = process.env.NODE_ENV === 'production' ? true : false;

const babel = {
    plugins: [],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: nodeVersion
                }
            }
        ],
        '@babel/preset-typescript'
    ]
};

if (isProd) {
    // 不带注释和console
    babel.comments = false;
    babel.plugins.push([
        'transform-remove-console',
        {
            exclude: ['error', 'warn']
        }
    ]);
}

module.exports = babel;
