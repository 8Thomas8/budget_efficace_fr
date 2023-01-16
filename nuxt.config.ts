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
                        extend: {
                            fontFamily: {
                                poppins: ['"Poppins"', 'sans-serif'],
                                roboto: ['"Roboto"', 'sans-serif']
                            },
                            colors: {
                                primary: {
                                    base: '#7E81FF'
                                },
                                secondary: {
                                    base: '#1E293B'
                                },
                                gray: {
                                    base: '#B8BFC6',
                                    light: '#FFFFFF'
                                }
                            }
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
