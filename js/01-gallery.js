import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector(".gallery");
console.log(div);

const ulEl = document.createElement('ul');
div.appendChild(ulEl)


const liImages = galleryItems.flatMap(img => `<li><a class="gallery__link" href="${img.original}">
<img
  class="gallery__image"
  src="${img.preview}"
  data-source="${img.original}"
  alt="${img.description}"
/>
</a>width = "400"></img></li>`).join("");
console.log(liImages);

ulEl.insertAdjacentHTML("beforeend", liImages)



console.log(galleryItems);
