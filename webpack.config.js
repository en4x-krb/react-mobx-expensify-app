const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, "public", "assets"),
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
                }
            ]
        },
        plugins: [CSSExtract],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'public', 'assets')],
            historyApiFallback: true
        }
    }
}