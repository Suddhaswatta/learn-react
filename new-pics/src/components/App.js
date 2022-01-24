import React from "react";
import "./App.css";
import Header from "./header/Header";
import unsplash from "../api/unsplash";
import ImageList from "./image/ImageList";

class App extends React.Component {
  state = { images: [] };

  handleOnSearch = async (searchTerm) => {

    const response = await unsplash.get("/search/photos", {
      params: { query: searchTerm }
    });

    this.setState({ images: response.data.results });

    console.log(this.state.images);
  };

  render() {
    return (
      <div>
        <Header onSearch={this.handleOnSearch} />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
