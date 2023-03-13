
import { galleryItems } from "./gallery-items.js";


const galleryMarkUp = document.querySelector(".gallery");



  const createItemsMarkup = galleryItems
      .map(({ preview, original, description }) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
          </a>
        </li>`
     
      })
      .join("");
  

galleryMarkUp.insertAdjacentHTML("beforeend", createItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

