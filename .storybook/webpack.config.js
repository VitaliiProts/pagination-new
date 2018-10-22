module.exports = (storybookBaseConfig) => {
    storybookBaseConfig.module.rules.push(
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
            }]
        }
    );

    return storybookBaseConfig;
};
