import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false)

    return <>
        <nav className={`${!isAsideOpen && 'shadow'} h-16 w-full bg-white fixed top-0 flex items-center justify-between px-4`}>
            <a className="text-lg" href="/">
                <span className="text-blue-400">{'<'}</span>Kaufmann Marton <span className="text-blue-400">{'/>'}</span>
            </a>
            <button className="block px-2 py-1 sm:hidden" onClick={() => setIsAsideOpen(!isAsideOpen)}>
                {isAsideOpen ? (
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                ) : (
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    )}
            </button>
            <ul className="flex-row hidden sm:flex">
                <li className="mx-2">
                    <a className="nav-link" href="/">Contact</a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/tools">Tools</a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/projects">Projects</a>
                </li>
            </ul>
        </nav>
        {isAsideOpen && (
            <ul className="bg-white shadow py-4 border-t">
                <li className="text-center mb-2">
                    <a className="text-lg" href="/">Contact</a>
                </li>
                <li className="text-center mb-2">
                    <a className="text-lg" href="/tools">Tools</a>
                </li>
                <li className="text-center">
                    <a className="text-lg" href="/projects">Projects</a>
                </li>
            </ul>
        )}
    </>
}