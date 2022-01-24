import React from 'react';

class Search extends React.Component{

    onInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return (
            <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder=""
              aria-label="Search"
              onChange={this.onInputChange}
            />
            <button className="btn btn-success" type="button">
              Search
            </button>
          </form>
        );
    }
}

export default Search;