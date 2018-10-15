const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }, {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({template: "./public/index.html", filename: "./index.html"})],
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ],
        extensions: [
            '.js', '.jsx', '.json'
        ]
    },
    devServer: {
        // @see https://tylermcginnis.com/react-router-cannot-get-url-refresh/
        historyApiFallback: true
    }
};
