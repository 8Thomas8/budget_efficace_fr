import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async event => {
    const ignoredPaths = [
        '/blog',
        '/blog/credit-et-dettes',
        '/blog/depenses-et-budgeting',
        '/blog/epargne-et-investissement',
        '/blog/etudiants',
        '/blog/factures',
        '/blog/finances-personnelles',
        '/blog/retraite',
        '/legislation/cgu',
        '/legislation/mentions-legales',
        '/legislation/politique-de-confidentialite'
    ]
    // Create sitemap
    // Fetch all documents but not '/blog/factures'
    const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname: 'https://budget-efficace.fr/'
    })
    docs.forEach((doc: any) => {
        if (!ignoredPaths.includes(doc._path)) {
            sitemap.write({
                url: doc._path,
                changefreq: 'daily'
            })
        }
    })
    sitemap.end()
    return streamToPromise(sitemap)
})
