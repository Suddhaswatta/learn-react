import React from "react";
import ImageDetails from "./ImageDetails";
import './ImageListStyle.css'
const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageDetails key={image.id} image={image} />
  ));
  return <div className="grid">{images}</div>;
};

export default ImageList;
