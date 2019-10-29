import React, {useEffect} from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
// import Dynamic from 'containers/Dynamic'
import LazyLoad from "vanilla-lazyload";
import Nav from './components/Nav'

import './build.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
    useEffect(() => {
        document.lazyLoadInstance = new LazyLoad({
            elements_selector: 'img[data-src]'
        });
    });

    return (
        <Root>
            <main className="w-full h-screen flex flex-col pt-16">
                <Nav />
                <React.Suspense fallback={
                    <div className="loader">
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                    </div>
                }>
                    <Router className="flex flex-1">
                        {/* <Dynamic path="dynamic" /> */}
                        <Routes path="*" />
                    </Router>
                    <footer className="bg-blue-900 px-4 py-3 text-white text-center">
                        <a className="mx-4" target="_blank" aria-label="Github" rel="noreferrer noopener" href="https://github.com/martonkaufmann">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a className="mx-4" target="_blank" aria-label="Twitter" rel="noreferrer noopener" href="https://twitter.com/kaufmannmrton">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a className="mx-4" target="_blank" aria-label="LinkedIn" rel="noreferrer noopener" href="https://www.linkedin.com/in/m%C3%A1rton-kaufmann-10b69248">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a className="mx-4" target="_blank" aria-label="Codepen" rel="noreferrer noopener" href="https://codepen.io/kaufmannmarton">
                            <FontAwesomeIcon icon={faCodepen} size="lg" />
                        </a>
                    </footer>
                </React.Suspense>
            </main>
        </Root>
    )
}

export default App
