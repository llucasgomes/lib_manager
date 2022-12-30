import styled from "styled-components";

export const Container_Livros = styled.section`
  padding: 20px;
`;



export const Container_Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  .card {
    height: 200px;
    background-color: #000000;
    border-radius: 4px;
  }
`;
