// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems
  .map(item => {
    return `
    <a class="gallery_item" href="${item.original}" >
    <img
    class="gallery_image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>`;
  })
  .join('');
const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;
new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'buttom',
  swipeClose: true,
  animationSpeed: 300,
});
console.log(galleryItems);
