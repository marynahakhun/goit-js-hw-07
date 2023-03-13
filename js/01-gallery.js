import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
let instance = null; 

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

  instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`, {
    onShow: () => {
      document.addEventListener("keydown", onEscKeyPress);
    },
    onClose: () => {
      document.removeEventListener("keydown", onEscKeyPress);
    }
  });

  instance.show();
};

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}


galleryContainerEl.addEventListener("click", onContainerClick);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);
