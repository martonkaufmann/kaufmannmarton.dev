import React, {useEffect} from 'react'
import LazyLoad from "vanilla-lazyload";

export default ({children}) => {
    useEffect(() => {
        new LazyLoad({
            elements_selector: 'img[data-src]'
        });
    })

    return children
}