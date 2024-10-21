import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
        <header>
            <Link className="Logo" to="/">Geração Bet Store</Link>
            <Link className="" to="Favoritos">Favoritos</Link>
        </header>
     );
}
export default Header