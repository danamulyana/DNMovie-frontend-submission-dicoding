const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common,{
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }
                    ,{
                        loader: 'css-loader'
                    },{
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname,'public'),
        port: 8080,
        hot: true,
    }
})