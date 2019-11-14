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
                    <script src="//instant.page/3.0.0" type="module" defer integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"></script>
                </Body>
            </Html>
        ),

    getRoutes: async () => {
        const { data: tools } = await axios.get(
            `https://jsonbox.io/${process.env.JSON_BOX_ID}?q=type:tool`
        )

        const { data: articles } = await axios.get(
            `https://jsonbox.io/${process.env.JSON_BOX_ID}?q=type:article`
        )

        return [
            {
                path: '/tools',
                getData: () => ({
                    tools,
                }),
            },
            {
                path: '/articles',
                getData: () => ({
                    articles,
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
    paths: {
        dist: 'docs',
    }
}
