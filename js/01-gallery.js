import { galleryItems } from "./gallery-items.js";
// Change code below this line
const div = document.querySelector(".gallery");
console.log(div);

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

div.insertAdjacentHTML("beforeend", images);

div.addEventListener("click", onClickImage);

function onClickImage({ target }) {
  blockStandartActivity(event);

  if (target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`);
  instance.show();

  div.addEventListener("keydown", ({ code }) => {
    if (code === "Escape") {
      instance.close();
      console.log(code);
    }
  });
}

function blockStandartActivity(evt) {
  evt.preventDefault();
}
