import React, { Component } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'clip',
  },
};

Modal.setAppElement('#root');
export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;
    return (
      <Item>
        <Img
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={image.largeImageURL} alt={image.tags} />
        </Modal>
      </Item>
    );
  }
}
export default ImageItem;
