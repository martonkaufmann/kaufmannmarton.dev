import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel, faPhp, faSymfony, faWordpress, faJs, faReact, faNode, faDocker, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default () => (
    <section className="flex flex-1 flex-col md:flex-row">
        <article className="flex-1 px-4 py-8 flex flex-col justify-center items-center text-center">
            <header className="mb-8">
                <h1 className="text-3xl mb-2">
                    <span className="text-blue-400">&lt;</span>Marton Kaufmann <span className="text-blue-400">/></span>
                </h1>
                <h3 className="text-lg">Developer of websites, web applications and APIs</h3>
            </header>
            <section className="stack-grid">
                <FontAwesomeIcon icon={faPhp} className="fa-php--colored text-4xl" />
                <FontAwesomeIcon icon={faLaravel} className="fa-laravel--colored text-4xl" />
                <FontAwesomeIcon icon={faSymfony} className="fa-symfony--colored text-4xl" />
                <FontAwesomeIcon icon={faWordpress} className="fa-wordpress--colored text-4xl" />
                <FontAwesomeIcon icon={faJs} className="fa-js--colored text-4xl" />
                <FontAwesomeIcon icon={faReact} className="fa-react--colored text-4xl" />
                <FontAwesomeIcon icon={faNode} className="fa-node--colored text-4xl" />
                <FontAwesomeIcon icon={faDocker} className="fa-docker--colored text-4xl" />
            </section>
        </article>
        <article className="flex-1 flex flex-col bg-blue-400">
            <section className="px-4 py-4 md:px-8 lg:px-16 mb-4 flex flex-col flex-1 justify-center">
                <header className="text-3xl text-white mb-4">Contact me</header>
                <form>
                    <section className="flex flex-col mb-2">
                        <label className="text-white mb-1" htmlFor="name">Name</label>
                        <input className="py-2 px-3" type="text" id="name" name="name" />
                    </section>
                    <section className="flex flex-col mb-2">
                        <label className="text-white mb-1" htmlFor="email">Email</label>
                        <input className="py-2 px-3" type="email" name="email" id="email" />
                    </section>
                    <section className="flex flex-col mb-4">
                        <label className="text-white mb-1" htmlFor="message">Message</label>
                        <textarea className="py-2 px-3" name="message" id="message"></textarea>
                    </section>
                    <button className="bg-white py-2 px-3 w-full text-blue-400" type="submit">Contact</button>
                </form>
            </section>
            <footer className="bg-blue-900 text-xl px-4 py-3 text-white text-center">
                <a target="_blank" href="https://github.com/martonkaufmann">
                    <FontAwesomeIcon icon={faGithub} className="mx-2" />
                </a>
                <a target="_blank" href="https://twitter.com/kaufmannmrton">
                    <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/m%C3%A1rton-kaufmann-10b69248/">
                    <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
                </a>
            </footer>
        </article>
    </section>
)
