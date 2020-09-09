'use strict';

const nodeVersion = require('./config/node-version');
const webpackVersion = require('./config/webpack-version');

const babel = {
    comments: false,
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

module.exports = babel;
