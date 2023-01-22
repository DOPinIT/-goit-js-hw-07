import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (img) => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", images);

const gallery = new SimpleLightbox(".gallery__item a", {});
