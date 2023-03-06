import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');


const renderGellery = () => {
    const pictures = galleryItems.map(({preview, original, description}) => {
     return `<a class="gallery__item" href=${original}>
     <img class="gallery__image" src=${preview} alt=${description} />
   </a>`
    }).join('')
    return pictures;
};

const galleryItemsMarkup = renderGellery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});



console.log(galleryItems);