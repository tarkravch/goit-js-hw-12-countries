const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = env => ({
    devtool: 'cheap-eval-source-map',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', 'handlebars-loader', 'pnotify'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        /*  new PNotify({
             title: "Notification!",
             text: "Будь ласка уточніть запит"
         }), */

    ],
    devServer: {
        contentBase: paths.BUILD_DIR,
        publicPath: '',
        historyApiFallback: true,
        compress: true,
        port: 4040,
        noInfo: true,
        quiet: true,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        open: true,
    },
});