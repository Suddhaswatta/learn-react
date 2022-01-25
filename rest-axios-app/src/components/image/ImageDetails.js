import { Component } from "react";

class ImageDetails extends Component {
  render() {
    const { urls, id, alt_description } = this.props.image;
    return (
      <div className="card" key={id} style={{width: '20px'}}>
        <img
          src={urls.regular}
          key={id}
          alt={alt_description}
        ></img>
      </div>
    );
  }
}

export default ImageDetails;
