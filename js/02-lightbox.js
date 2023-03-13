// import { galleryItems } from './gallery-items.js';

// const galleryContainerEl = document.querySelector(".gallery");
// const imagesMarkup = createItemsMarkup(galleryItems);

// galleryContainerEl.addEventListener("click", onContainerClick);
// galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

// function createItemsMarkup(item) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//       <li>
//       <a class="gallery__item" href="${original}">
//       <img class="gallery__image" 
//       src="${preview}" 
//       alt="${description}" />
//         </a>
//       </li>`
   
//     })
//     .join("");
// }

// function onContainerClick(event) {
//   event.preventDefault();

//   if (event.target.classList.contains("gallery")) return;
//     const source = event.target.dataset.source;
    
    
   
// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }



import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

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

