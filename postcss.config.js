const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-move-props-to-bg-image-query'),
        require('postcss-unit-convert')({
            unitToConvert: 'rpx',
            viewportWidth: 750,
            unitPrecision: 4,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw', // vmin is more suitable.
        }),
        isProduction
            && require('cssnano')({
                preset: [
                    'default',
                    {
                        mergeLonghand: false,
                    },
                ],
            }),
    ].filter(v => v),
};
