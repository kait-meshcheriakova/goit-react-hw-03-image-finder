import React, { Component } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;
    return (
      <Item>
        <Img
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}
export default ImageItem;
