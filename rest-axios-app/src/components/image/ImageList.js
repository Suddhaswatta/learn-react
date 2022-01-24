import React from "react";
import ImageDetails from "./ImageDetails";

class ImageList extends React.Component {
  render() {
    return this.props.images.map((image) =><ImageDetails id={image.id} image={image}/>);
  }
}

export default ImageList;
