import React from 'react';
import ImageLazyLoad from './../components/ImageLazyLoad';

import NuaxiaScreenshot from './../assets/images/nuaxia.jpg';
import NuaxiaScreenshotLow from './../assets/images/nuaxia-low.jpg';
import InpedioScreenshot from './../assets/images/inpedio.jpg';
import InpedioScreenshotLow from './../assets/images/inpedio-low.jpg';
import ElvolineScreenshot from './../assets/images/elvoline.jpg';
import ElvolineScreenshotLow from './../assets/images/elvoline-low.jpg';
import TrabeloScreenshot from './../assets/images/trabelo.jpg';
import TrabeloScreenshotLow from './../assets/images/trabelo-low.jpg';
import VideoIBMScreenshot from './../assets/images/video-ibm.jpg';
import VideoIBMScreenshotLow from './../assets/images/video-ibm-low.jpg';
import IndiebillScreenshot from './../assets/images/indiebill.jpg';
import IndiebillScreenshotLow from './../assets/images/indiebill-low.jpg';

export default () => {
    return (
        <ImageLazyLoad>
            <article className="projects-grid mx-2 sm:mx-12 my-4">
                <section>
                    <a className="block mb-2" href="https://video.ibm.com" target="_blank" rel="noreferrer noopener">
                        <img
                            className="project-image"
                            src={VideoIBMScreenshotLow}
                            data-src={VideoIBMScreenshot}
                            alt="video.ibm.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://video.ibm.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Video IBM
                    </a>
                    <div className="text-sm mx-4">
                        Worked on DBG which is the project in which we were tasked to move the billing and accounting of
                        the legacy Ustream now Video IBM(video.ibm.com) from the old system into the IBM Marketplace so
                        clients can purchase the different packages for the platform through IBMs internal marketplace.
                    </div>
                </section>
                <section>
                    <a className="block mb-2" href="https://www.nuaxia.com" target="_blank" rel="noreferrer noopener">
                        <img
                            className="project-image"
                            src={NuaxiaScreenshotLow}
                            data-src={NuaxiaScreenshot}
                            alt="nuaxia.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://www.nuaxia.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Nuaxia
                    </a>
                    <div className="text-sm mx-4">
                        Developed cutting edge solutions for delivering fresh value in the space of Healthcare Data
                        Services.
                    </div>
                </section>
                <section>
                    <a className="block mb-2" href="https://www.inpedio.com" target="_blank" rel="noreferrer noopener">
                        <img
                            className="project-image"
                            src={InpedioScreenshotLow}
                            data-src={InpedioScreenshot}
                            alt="inpedio.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://www.inpedio.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Inpedio
                    </a>
                    <div className="text-sm mx-4">
                        Developed the management system for the mobile security solution provided by Inpedio. The
                        capabilities of the system include the management of the devices their settings both globally
                        and for each device individually, license handling, tracking the status of the devices,
                        communication with the end user with a built in messaging system, PIN management, displaying
                        most data sent by the device real time.
                    </div>
                </section>
                <section>
                    <a
                        className="block mb-2"
                        href="https://www.indiebill.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            className="project-image"
                            src={IndiebillScreenshotLow}
                            data-src={IndiebillScreenshot}
                            alt="indiebill.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://www.indiebill.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Indiebill
                    </a>
                    <div className="text-sm mx-4">
                        Workded on Indiebill a platform that is used by independent content creators to sell their
                        videos, images, skype shows and subscriptions to their various social media accounts e.g.:
                        instagram, whatsapp. I worked on moving parts of the existing monolithic code base to a
                        microservice oriented one and implementing smaller features.
                    </div>
                </section>
                <section>
                    <a className="block mb-2" href="https://www.elvoline.com" target="_blank" rel="noreferrer noopener">
                        <img
                            className="project-image"
                            src={ElvolineScreenshotLow}
                            data-src={ElvolineScreenshot}
                            alt="elvoline.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://www.elvoline.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Elvoline
                    </a>
                </section>
                <section>
                    <a className="block mb-2" href="https://www.trabelo.com" target="_blank" rel="noreferrer noopener">
                        <img
                            className="project-image"
                            src={TrabeloScreenshotLow}
                            data-src={TrabeloScreenshot}
                            alt="trabelo.com screenshot"
                        />
                    </a>
                    <a
                        className="block text-center text-xl mb-1"
                        href="https://www.trabelo.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Trabelo
                    </a>
                </section>
            </article>
        </ImageLazyLoad>
    );
};
