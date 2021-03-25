import path from 'path'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import styleImport from 'vite-plugin-style-import'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'

const config = defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}`
        }
    },

    build: {
        minify: true
    },

    plugins: [
        getBabelOutputPlugin({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        corejs: '3'
                    }
                ]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
        }),
        createVuePlugin(),
        styleImport({
            libs: [
                {
                    libraryName: 'ant-design-vue',
                    esModule: true,
                    resolveStyle: name => {
                        return `ant-design-vue/es/${name}/style/index`
                    }
                },
                {
                    libraryName: 'antd',
                    esModule: true,
                    resolveStyle: name => {
                        return `antd/es/${name}/style/index`
                    }
                },
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: name => {
                        return `vant/es/${name}/style/index`
                    }
                },
                {
                    libraryName: 'element-plus',
                    resolveStyle: name => {
                        return `element-plus/lib/theme-chalk/${name}.css`
                    },
                    resolveComponent: name => {
                        return `element-plus/lib/${name}`
                    }
                }
            ]
        }),
        WindiCSS({
            safelist: 'prose prose-sm m-auto text-left'
        })
    ],

    server: {
        port: 7772,
        proxy: {
            '/api': {
                target: 'http://php.mmxiaowu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
})

export default config
