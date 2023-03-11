import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);


function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}
const onContainerClick = (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
  document.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(event){
    const isEscKey = event.code === "Escape"
    if (isEscKey){
        instance.close()
    }
}}

galleryContainerEl.addEventListener("click", onContainerClick);

galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);






console.log(galleryItems);




