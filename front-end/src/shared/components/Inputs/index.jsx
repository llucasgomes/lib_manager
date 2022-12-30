import { useState } from "react";
import { Container_input, Container_input1 } from "./styled"
import { Binoculars, Eye, EyeSlash } from "phosphor-react";

export const Input = ({ tipo, place }) => {
    const [eyes, setEyes] = useState(true)


    return (
        <Container_input1>
            <Container_input type={tipo} placeholder={place} required />
            <Binoculars size={20}
                weight="duotone"
                className="olho"
                onClick={() => HandleView()} />

        </Container_input1>

    )
}