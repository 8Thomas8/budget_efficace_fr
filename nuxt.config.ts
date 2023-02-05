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
                                    base: '#3CB35A'
                                },
                                secondary: {
                                    base: '#03012C'
                                },
                                gray: {
                                    base: '#635E79',
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
        ],
        'nuxt-og-image',
        'nuxt-schema-org'
    ],
    css: ['@/assets/scss/main.scss'],
    // @ts-ignore-next-line
    schemaOrg: {
        host: 'https://budget-efficace.fr/'
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
