// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
            '@nuxt/content',
            {
                documentDriven: true
            }
        ],
        '@nuxtjs/plausible',
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
                    plugins: [
                        require('@tailwindcss/forms'),
                        require('@tailwindcss/line-clamp'),
                        require('@tailwindcss/typography')
                    ]
                },
                injectPosition: 0,
                viewer: true
            }
        ]
    ],
    css: ['@/assets/scss/main.scss']
})
