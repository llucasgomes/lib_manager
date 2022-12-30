import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cad_Funcionarios, Cad_Livros, Login } from "../pages";
import { Header } from "../shared/components/Header";
import { Books } from "../shared/components/all_books";

export const RotasMenu = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Books />} />
                <Route path="/cad-func" element={<Cad_Funcionarios />} />
                <Route path="/cad-livros" element={<Cad_Livros />} />
            </Routes>
        </BrowserRouter>

    )
}

