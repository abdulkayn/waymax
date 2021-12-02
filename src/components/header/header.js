import './header.css';
import icon from './textmessage.png'
import logo from './waymaxlogo.png'
const Header = () => (
    
<header class="header-fixed">

<div class="header-limiter">

    <h1><a href="#"><img src={logo} className="logo-text" alt="Logo" /></a></h1>

    <nav>
        <a href="http://localhost:3000/twillio/public/index.html"><img src={icon} className="icon-text" alt="text message" /></a>
    </nav>

</div>

</header>


);

export default Header;