import React from "react";
import "./App.css";
import Header from "./header/Header";

class App extends React.Component {
  handleOnSearch(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <Header onSearch={this.handleOnSearch} />
      </div>
    );
  }
}

export default App;
