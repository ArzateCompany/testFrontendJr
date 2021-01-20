import React, { Component } from 'react';
import PageView from '../../components/layout/PageView';
import List from '../../components/list/List';

const imageUrls = [
  'https://i.ibb.co/xhYs1zd/image-deep-earth.jpg',
  'https://i.ibb.co/ZWN2H8Q/image-pocket-borealis.jpg',
  'https://i.ibb.co/6RVFmz5/image-fisheye.jpg',
  'https://i.ibb.co/nbZBLzR/image-curiosity.jpg',
  'https://i.ibb.co/wy5kkHc/image-from-above.jpg'
];

let imageURL = 0


export default class Exercise05 extends Component {
  render() {
    function afterImage() {
      const imageContainer = document.getElementById('image-container')
      imageURL -= 1
      imageContainer.setAttribute('src', imageUrls[imageURL])
    }

    function nextImage() {
      const imageContainer = document.getElementById('image-container')
      imageURL += 1
      imageContainer.setAttribute('src', `${imageUrls[imageURL]}`)
    }
    const instructions = [
      <span>Usa cinco imágenes de internet de tu elección y reemplaza el arreglo imageUrls con sus respectivas urls.</span>,
      <span>Muestra una de las imágenes en el elemento img.</span>,
      <span>Escribe el código para que los botones permitan recorrer el arreglo de urls y que el elemento img vaya actualizando la imagen que se muestra como si fuera una galería (image slider/carousel).</span>
    ];

    return (
      <PageView title="Exercise 5" subtitle="">
        <List list={instructions} />
        <hr style={{ color: '#3498db', backgroundColor: '#3498db', height: 1 }} />

        <div>
          <div>
            <img src={imageUrls[imageURL]} alt="" id="image-container" />
          </div>
          <div>
            <button onClick={afterImage}>Anterior</button>
            <button onClick={nextImage}>Siguiente</button>
          </div>
        </div>
      </PageView>
    );
  }
}
