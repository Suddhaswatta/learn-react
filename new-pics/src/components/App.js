import React from "react";
import "./App.css";
import Header from "./header/Header";
import unsplash from "../api/unsplash";

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
      </div>
    );
  }
}

export default App;
