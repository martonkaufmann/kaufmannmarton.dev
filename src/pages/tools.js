import React from 'react';
import { useRouteData } from 'react-static';
import ImageLazyLoad from './../components/ImageLazyLoad';

export default () => {
    const { tools } = useRouteData();

    return (
        <ImageLazyLoad>
            <ul className="my-4 mx-auto px-2 w-10/12 md:w-1/2 lg:md-1/3">
                {tools.map(tool => (
                    <li className="mb-8" key={`tool-${tool.id}`}>
                        <section className="flex items-end mb-1">
                            <img data-src={tool.image} alt={tool.name} className="h-8 mr-2" />
                            <a href={tool.url} target="_blank" rel="noreferrer noopener" className="text-xl underline">
                                {tool.name}
                            </a>
                        </section>
                        <section>{tool.description}</section>
                    </li>
                ))}
            </ul>
        </ImageLazyLoad>
    );
};
