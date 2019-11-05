import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <nav
                className={`${!isNavOpen &&
                    'shadow'} h-16 w-full bg-white fixed top-0 flex items-center justify-between px-4 z-10`}
            >
                <a className="text-lg" href="/">
                    <span className="text-blue-400">{'<'}</span>Kaufmann Marton{' '}
                    <span className="text-blue-400">{'/>'}</span>
                </a>
                <button className="block px-2 py-1 sm:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                    {isNavOpen ? (
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    )}
                </button>
                <ul className="flex-row hidden sm:flex">
                    <li className="mx-2">
                        <a className="nav-link" href="/">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className="nav-link" href="/portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className="nav-link" href="/tools">
                            Tools
                        </a>
                    </li>
                    <li className="mx-2">
                        <a className="nav-link" href="/articles">
                            Articles
                        </a>
                    </li>
                </ul>
            </nav>
            {isNavOpen && (
                <ul className="nav-dropdown bg-white shadow py-4 border-t fixed w-full">
                    <li className="text-center mb-2">
                        <a className="text-lg" href="/">
                            Contact
                        </a>
                    </li>
                    <li className="text-center mb-2">
                        <a className="text-lg" href="/portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="text-center mb-2">
                        <a className="text-lg" href="/tools">
                            Tools
                        </a>
                    </li>
                    <li className="text-center mb">
                        <a className="text-lg" href="/articles">
                            Articles
                        </a>
                    </li>
                </ul>
            )}
        </>
    );
};
