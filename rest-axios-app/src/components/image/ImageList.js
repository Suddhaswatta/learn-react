import React from "react";
import ImageDetails from "./ImageDetails";
import './ImageStyle.css'
const ImageList = props => {
  const images = props.images.map((image)=><ImageDetails id={image.id} image={image}/>);
  return <div className="list-grid">{images}</div>;
};

export default ImageList;
