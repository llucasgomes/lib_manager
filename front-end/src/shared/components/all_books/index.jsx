import { Input } from "../Inputs"
import { Card_Book } from "../card_book"
import { Container_Grid, Container_Livros } from "./styled"

export const Books = () => {
    return (
        <Container_Livros >
            <Input tipo={"email"} place={"Email"} />
            <Container_Grid>
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
                <Card_Book />
            </Container_Grid>
        </Container_Livros>

    )
}