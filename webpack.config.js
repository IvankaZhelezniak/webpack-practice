const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader",
                    {
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: false,
  },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"],
            },
             {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: "blocking"
    }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 4444,
        open: true,
        stats: 'errors-only',
    },
};