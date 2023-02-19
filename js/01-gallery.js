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
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

//   Закриття з клавіатури
  window.addEventListener('keydown', addEscapeClick)
  function addEscapeClick(ev){
    const ESC_CODE = 'Escape';
    if(ev.code === ESC_CODE){
        instance.close();
        window.removeEventListener('keydown', addEscapeClick);
    }
  }

};
