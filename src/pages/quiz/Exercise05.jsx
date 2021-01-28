import React, { Component } from 'react';
import PageView from '../../components/layout/PageView';
import List from '../../components/list/List';
export default class Exercise05 extends Component {
  constructor() {
    super()
    this.state = {
      imagesURL: [
        'https://i.ibb.co/xhYs1zd/image-deep-earth.jpg',
        'https://i.ibb.co/ZWN2H8Q/image-pocket-borealis.jpg',
        'https://i.ibb.co/6RVFmz5/image-fisheye.jpg',
        'https://i.ibb.co/nbZBLzR/image-curiosity.jpg',
        'https://i.ibb.co/wy5kkHc/image-from-above.jpg'
      ],
      imageURL: 0,
    }
  }

  nextImage = () => {
    this.setState(state => {
      return { imageURL: state.imageURL + 1 }
    })
  }

  previousImage = () => {
    this.setState(state => {
      return { imageURL: state.imageURL - 1 }
    })
  }

  componentDidMount() {
    const isFirsImage = this.state.imageURL === 0;

    if (isFirsImage) {
      document.getElementById('button-previous').setAttribute('disabled', '')
    }
  }

  componentDidUpdate() {
    const previousButton = document.getElementById('button-previous');
    const nextButton = document.getElementById('button-next');
    const isFirsImage = this.state.imageURL === 0;
    const isLastImage = this.state.imageURL === this.state.imagesURL.length - 1;

    if (isFirsImage) {
      previousButton.setAttribute('disabled', '')
    } else {
      previousButton.removeAttribute('disabled', '')
    }

    if (isLastImage) {
      nextButton.setAttribute('disabled', '')
    } else {
      nextButton.removeAttribute('disabled', '')
    }
  }

  render() {
    let { imageURL, imagesURL } = this.state;

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
            <img src={imagesURL[imageURL]} alt="" id="image-container" />
          </div>
          <div>
            <button id="button-previous" onClick={this.previousImage}>Anterior</button>
            <button id="button-next" onClick={this.nextImage}>Siguiente</button>
          </div>
        </div>
      </PageView>
    );
  }
}
