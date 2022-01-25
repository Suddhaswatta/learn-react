import React, { Component } from "react";

class ImageDetails extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0};
  }
  setBounds = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil((height)/10)
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setBounds);
  }

  render() {

    console.log(this.state);
    const { urls, id, alt_description } = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          key={id}
          alt={alt_description}
        ></img>
      </div>
        
    );
  }
}

export default ImageDetails;
