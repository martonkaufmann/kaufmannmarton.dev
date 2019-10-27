import React from 'react'
import path from 'path'
import axios from 'axios'

export default {
    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { siteData, renderMeta },
    }) => (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="Description" content="Kaufmann Marton developer of websites, web applications and APIs"></meta>
                    <title>&lt;Kaufmann Marton /></title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="preload" as="font" />
                    <style>{`
                html {
                    font-family: Roboto, sans-serif;
                    line-height: 1.5;
                }

                body {
                    margin: 0;
                }

                html, body {
                    box-sizing: border-box;
                }
            `}</style>
                </Head>
                <Body>
                    {children}
                    <script src="//instant.page/2.0.1" type="module" defer integrity="sha384-4Duao6N1ACKAViTLji8I/8e8H5Po/i/04h4rS5f9fQD6bXBBZhqv5am3/Bf/xalr"></script>
                </Body>
            </Html>
        ),

    getRoutes: async () => {
        const { data: tools } = await axios.get(
            `https://jsonbox.io/${process.env.JSON_BOX_ID}?q=type:tool`
        )

        return [
            {
                path: '/tools',
                getData: () => ({
                    tools,
                }),
            },
        ]
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
