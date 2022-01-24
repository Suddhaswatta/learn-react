import Search from "../search/Search";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Search App</a>
           <Search/>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
