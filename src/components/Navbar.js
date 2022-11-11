import {Link} from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <img width={60} src="https://avatars.githubusercontent.com/u/4854004?s=200&v=4" alt="Logo iron cinza" />
        </nav>
    )
}

export default Navbar