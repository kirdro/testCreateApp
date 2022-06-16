import React from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import {items} from "./data";



function MainGallery(props) {

    const options = {
        galleryLayout: 1,
        isVertical: true,
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
        width: 1200,
        // height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData});

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
        <div>
            <ProGallery
                items={items}
                options={options}
                container={container}
                eventsListener={eventsListener}
                scrollingElement={scrollingElement}
            />
        </div>
    );
}

// https://github.com/wix/pro-gallery - ProGallery
// https://pro-gallery.surge.sh/?isVertical=true&galleryLayout=1 - ProGallery

export default MainGallery;