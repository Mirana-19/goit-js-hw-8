import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createElementMarkup({ original, preview, description }) {
  return `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
         </a>
         </li>`;
}

function createListMarkup(items) {
  return items.map(createElementMarkup).join('');
}

function renderGallery(items) {
  galleryEl.innerHTML = createListMarkup(items);
}
