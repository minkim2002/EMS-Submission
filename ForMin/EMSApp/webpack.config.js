module.exports = {
    mode: 'development',
    entry: {
        emsSubmit: './src/emsSubmit.tsx',
        emsAdmin: './src/emsAdmin.tsx',
        emsCategory: './src/emsCategory.tsx'
    },
    output: {
        path: __dirname + '/wwwroot/dist',
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { enforce: 'pre', test: '/\.js$/', loader: 'source-map-loader' },
            { test: /\.(css|less)$/, use: ['style-loader', 'css-loader'] }
        ]
    }
};