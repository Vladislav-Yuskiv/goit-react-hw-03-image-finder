import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import LoaderSpinner from "./Components/Loader";
import Modal from "./Components/Modal";
import Button from './Components/Button';
import { Component } from "react";

const KEY = '22869531-b15f4153a2c6549b5b245';
class App extends Component {

  state = {
    value: '',
    page: 1,
    photos: [],
    isLoading: false,
    selectedImage: null
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ isLoading: true, page: 1 })
     
      setTimeout(() => {
        fetch(`https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${KEY}db08&image_type=photo&orientation=horizontal&per_page=12`)
          .then(r => r.json())
          .then(photos =>  this.setState({ photos: photos.hits }))
          .finally(this.setState({ isLoading: false }))
      }, 1000)
    }
       if (this.state.photos.length === 0) {
        return new Error(`По запиту ${this.state.value} нічого не знайдено`)
      }

  }
  onSubmit = (value) => {
    this.setState({ value })
  }

  onClickButton = () => {
    this.setState(prevState => { return { page: prevState.page + 1, isLoading: true } })
    setTimeout(() => {
      fetch(`https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=${KEY}db08&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(newPhotos => this.setState(prevState => ({
          photos: [...prevState.photos, ...newPhotos.hits],
          isLoading: false
        })))
        .finally(this.scrollToTop)
    }, 1000)
  }

  scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  handleSelectImage = data => {
    this.setState({ selectedImage: data, });
  }

  closeModal = () => {
    this.setState({ selectedImage: null, })
  }
  render() {
    const { photos, selectedImage, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery photos={photos} onSelected={this.handleSelectImage} />
        {photos.length > 0 && !isLoading && <Button onClick={this.onClickButton} />}
        {selectedImage && <Modal largeImg={selectedImage.largeImageURL} alt={selectedImage.tags} closeModal={this.closeModal} />}
        {this.state.isLoading && <LoaderSpinner />}
      </>
    );
  }
}

export default App;
