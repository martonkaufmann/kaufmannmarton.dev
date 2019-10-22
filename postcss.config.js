module.exports = {
    plugins: [
        require('tailwindcss'),
        ...process.env.NODE_ENV === 'production' ? [
            require('@fullhuman/postcss-purgecss')({
                content: [
                    './src/**/*.html',
                    './src/**/*.js',
                    './src/**/*.jsx',
                ],

                // Include any special characters you're using in this regular expression
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }),
            require('autoprefixer'),
            require('cssnano')({
                preset: 'default',
            }),
        ] : [],
    ]
}
