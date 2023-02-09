import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import compressPlugin from 'vite-plugin-compression'; //静态资源压缩
// import visualizer from 'rollup-plugin-visualizer';
// // 路径查找
// const pathResolve = (dir: string): string => {
//   return resolve(__dirname, ".", dir);
// };
//
// // 设置别名
// const alias: Record<string, string> = {
//   "@": pathResolve("src")
// };
export default defineConfig(({ command }) => {
    return {
        lintOnSave: false, //检查命名规范
        devServer: {
            overlay: {
                warning: false,
                errors: false,
            },
        },
        plugins: [
            vue(),
            compressPlugin({
                ext: '.gz',
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                deleteOriginFile: false, // 是否删除原始文件
                // deleteOriginFile: command !== 'serve', // 是否删除原始文件
            }),
            //  visualizer({
            //     emitFile: true,//是否被触摸
            //     filename: "test.html",//生成分析网页文件名
            //     open: true,//在默认用户代理中打开生成的文件
            //     gzipSize: true,//从源代码中收集 gzip 大小并将其显示在图表中
            //     brotliSize: true,//从源代码中收集 brotli 大小并将其显示在图表中
            // })
        ],
        // 打包配置
        build: {
            terserOptions: {
                compress: {
                    drop_console: command !== 'serve',
                    // 默认是true
                    drop_debugger: command !== 'serve',
                },
            },
            rollupOptions: {
                output: {
                    manualChunks: (filePath) => {
                        if (filePath.includes('node_modules')) {
                            // 如果这个文件路径，是来自 node_modules的，那么我们就进行发包
                            return 'vendor';
                        }
                    }
                }
            }
        },
        server: {
            host: '0.0.0.0',
            port: 7000,
            proxy: {
                '/api': {
                    // target: 'http://pqartstation.cn:3005',
                    target: 'http://localhost:3005',
                    changeOrigin: true,
                    // secure: false,
                    rewrite: path => path.replace(/^\/api/, '/'),
                },
            },
            https: false,
        },
        css: {
            // css预处理器
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    lessOptions: {
                        modifyVars: {
                            'primary-color': '#ec6800',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    };
});
