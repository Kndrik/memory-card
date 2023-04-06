import logo from '../images/DofusLogo.png';

export function Logo(props) {
    return (
        <div className="logo-container">
            <img src={logo} alt="Dofus Logo" className="logo"/>
            <h1 className="title">Memory Game</h1>
        </div>
    );
}