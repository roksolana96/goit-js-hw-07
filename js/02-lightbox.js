import { galleryItems } from './gallery-items.js';

const setGellery = document.querySelector('.gallery');
const cardsMakeup = createImageItem(galleryItems);
setGellery.insertAdjacentHTML('beforeend', cardsMakeup);
setGellery.addEventListener('click', onImageClick)



function createImageItem(galleryItems) {

    return galleryItems.map(({preview, original,description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    title="${description}"
                />
            </a>
        </div>
        `;
    }).join('');
};

function onImageClick(event){
    event.preventDefault(); 
    if(!event.target.classList.contains('gallery__image')){
        return;
    }


};
    let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});
