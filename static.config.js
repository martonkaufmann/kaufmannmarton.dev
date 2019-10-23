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
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
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
                <Body>{children}</Body>
            </Html>
        ),

    getRoutes: async () => {
        // const { data: posts } = await axios.get(
        //   'https://jsonplaceholder.typicode.com/posts'
        // )

        return [
            //   {
            //     path: '/blog',
            //     getData: () => ({
            //       posts,
            //     }),
            //     children: posts.map(post => ({
            //       path: `/post/${post.id}`,
            //       template: 'src/containers/Post',
            //       getData: () => ({
            //         post,
            //       }),
            //     })),
            //   },
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
