const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' }); 


// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const cssExtract = new ExtractTextPlugin('style.css');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, "public", "scripts"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                { test: /\.js(x)?$/, exclude: /node_modules/, loader: "babel-loader" },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                    // use: cssExtract.extract({
                    //     fallback: 'style-loader',
                    //     use: [
                    //         'css-loader',
                    //         'sass-loader'
                    //     ]
                    // })
                    // use: [
                    //     "style-loader",
                    //     "css-loader",
                    //     "sass-loader"
                    // ]
                }
            ]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: './public',
            publicPath: '/scripts/',
            historyApiFallback: true
        }
    }
}