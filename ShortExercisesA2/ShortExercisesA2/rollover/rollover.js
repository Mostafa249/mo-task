"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;


        // preload rollover image
        function mouseHover() {
            image.src = newURL;
        }
        function mouseRelease(){
            image.src = oldURL;
        }
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            setTimeout(mouseHover,1000)
            /* setTimeout(()=>{
                image.src = newURL;
            },1000)*/
        });
        image.addEventListener("mouseout", () => {
            setTimeout(mouseRelease,2000)
            /* setTimeout(()=>{
                image.src = oldURL;
            },2000)*/
        });
    }
});