import React from "react";
import ImageDetails from "./ImageDetails";
const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageDetails key={image.id} image={image} />
  ));
  return <div className="d-flex flex-wrap">{images}</div>;
};

export default ImageList;
