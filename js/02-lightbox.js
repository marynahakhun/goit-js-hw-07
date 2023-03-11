import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);

galleryContainerEl.addEventListener("click", onContainerClick);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
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
}

function onContainerClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
    
    
   
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

