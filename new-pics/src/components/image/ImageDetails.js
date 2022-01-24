const ImageDetails = (props) => {

    console.log(props.image);
  return (
  <div>
      <img src={props.image.urls.small} ></img>

  </div>
  )};

export default ImageDetails;
