import React from 'react';
import { useRouteData } from 'react-static';

export default () => {
    const { articles } = useRouteData();
    const formatCreatedOnString = createdOn => {
        const date = new Date(createdOn);
        const year = date.getFullYear();
        const month = date.getMonth();
        let day = date.getDate();

        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };
    const getHostname = url => new URL(url).hostname;

    return (
        <ul className="my-4 mx-auto px-2 w-10/12 md:w-1/2 lg:md-1/3">
            {articles.map(article => (
                <li className="mb-8" key={`article-${article._id}`}>
                    <a href={article.url} target="_blank" rel="noreferrer noopener" className="text-xl underline">
                        {article.title}
                    </a>
                    <section className="text-sm">
                        {formatCreatedOnString(article._createdOn)},{' '}
                        <a
                            className="underline"
                            href={`//${getHostname(article.url)}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {getHostname(article.url)}
                        </a>
                    </section>
                </li>
            ))}
        </ul>
    );
};
