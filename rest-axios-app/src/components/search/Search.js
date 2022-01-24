import React from 'react';

class Search extends React.Component{
// Using React State System
    state = {term:''};

    componentDidUpdate(){//  Called Each time a State is Updated
        console.log(this.state.term);
    }

    handleFormSubmit=e=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)//Prop Callback
    }
    render(){
        return (
            <form className="d-flex" onSubmit={this.handleFormSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder=""
              value={this.state.term} // For User Feedback Binding
              aria-label="Search"
              onChange={e=>{this.setState({term:e.target.value})}}
              
            />
            <button className="btn btn-success" type="submit" >
              Search
            </button>
          </form>
        );
    }
}

export default Search;