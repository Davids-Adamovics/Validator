/* eslint-disable no-unused-vars */
import "../Header/Header.scss";
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigateTo = useNavigate();

    return (
      
        <header className="allnav">
        <nav>
            <a onClick={ () => {navigateTo('/Main')}}>Main</a>
            <a onClick={ () => {navigateTo('/Calendar')}}>Calendar</a>
            <a onClick={ () => {navigateTo('/Tutorial')}}>Tutorial</a>
            <a onClick={ () => {navigateTo('/Profile')}}>Profile</a>
            </nav>
    </header>

  );
}

export default Header;