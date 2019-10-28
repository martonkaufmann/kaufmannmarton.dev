import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
// import Dynamic from 'containers/Dynamic'

import './build.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
    return (
        <Root>
            <main className="w-full h-screen flex flex-col pt-16">
                <nav className="h-16 w-full bg-white shadow fixed top-0 flex items-center justify-between px-4">
                    <a className="text-lg" href="/">
                        <span className="text-blue-400">{'<'}</span>Kaufmann Marton <span className="text-blue-400">{'/>'}</span>
                    </a>
                    <ul className="flex flex-row">
                        <li className="mx-2">
                            <a className="nav-link" href="/tools">Tools</a>
                        </li>
                        </li>
                    </ul>
                </nav>
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
                </React.Suspense>
            </main>
        </Root>
    )
}

export default App
