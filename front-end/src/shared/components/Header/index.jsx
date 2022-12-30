import { Container_Header } from "./styled"
import Logo from "../../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <Container_Header>
            <img className="logo" src={Logo} alt="Logo LibManager" />
            <nav className="menu">
                <ul>
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/cad-livro">Cadastro Livros</Link>
                    <Link className="link" to="/cad-func">Funcionarios</Link>
                    {/* <Link className="link" to="/Login">Logout</Link> */}
                </ul>

            </nav>
            <Link className="link" to="/Login">Logout</Link>
        </Container_Header>
    )
}