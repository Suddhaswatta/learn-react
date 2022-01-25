import { Component } from "react";

class ImageDetails extends Component{

    

    render(){
        const {urls,id,alt_description} = this.props.image;
        return (
            <img
              src={urls.regular}
              key={id}
              alt={alt_description}
            ></img>
          );
    }
}

export default ImageDetails