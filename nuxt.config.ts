// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
            '@nuxt/content',
            {
                documentDriven: true
            }
        ],
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Disallow: '/'
            }
        ],
        '@nuxtjs/plausible',
        ['@nuxt/image-edge', { staticFilename: '[publicPath]/images/[name]-[hash][ext]' }],
        [
            '@nuxtjs/tailwindcss',
            {
                cssPath: '~/assets/scss/main.css',
                configPath: 'tailwind.config',
                exposeConfig: false,
                config: {
                    content: [],
                    theme: {
                        fontFamily: {
                            poppins: ['"Poppins"', 'sans-serif'],
                            roboto: ['"Roboto"', 'sans-serif']
                        }
                    },
                    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
                },
                injectPosition: 0,
                viewer: true
            }
        ]
    ],
    css: ['@/assets/scss/main.scss']
})
