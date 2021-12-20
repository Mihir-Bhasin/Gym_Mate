import React from 'react'
import { Link } from 'react-router-dom';
import logo from './assets/Gymmatew.png';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    return (
        <nav className="header">
            
            {/* logo */}
            <Link  to="/">
            <img 
            className="header__logo" 
            src={logo} alt=""
            />
            </Link>
            
            {/* search box */}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
         <SearchIcon className="header__searchIcon" />
            </div>
          

        {/* 3 links */}
        <div className="header__nav">
         {/* link 1 */}
         <Link to={!user && '/login'} className="header__link">
         <div onClick={handleAuthenticaton} className="header__option"> 
         <span className="header__optionLineOne">  Hello {!user ? 'Guest' : user.email} </span>
         <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'} </span>
         </div>
         </Link>
         {/* link 2 */}
         <Link to="/" className="header__link">
         <div className="header__option"> 
         <span className="header__optionLineOne">  Return </span>
         <span className="header__optionLineTwo"> & Order </span>
         </div>
         </Link>
         {/* link 3 */}
         <Link to="/" className="header__link">
         <div className="header__option"> 
         <span className="header__optionLineOne">  Your </span>
         <span className="header__optionLineTwo">  Gains </span>
         </div>
         </Link>
          

         <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon className="class__color" />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        </div>
        {/* basket */}

        </nav>
    )
}

export default Header
