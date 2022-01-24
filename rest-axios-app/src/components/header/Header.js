import React from "react";
import Search from "../search/Search";
import "./Header.css";
class Header extends React.Component {

    handleOnSearchSubmit = (searchTerm)=>{
        console.log(searchTerm);
        this.props.onSearch(searchTerm)
    }

    render(){
        return (
            <div>
              <header>
                <nav className="navbar navbar-light bg-light">
                  <div className="container-fluid">
                    <div className="navbar-brand">Search App</div>
                   <Search onSearchSubmit={this.handleOnSearchSubmit}/>
                  </div>
                </nav>
              </header>
            </div>
          );
    }
  
}
export default Header;
