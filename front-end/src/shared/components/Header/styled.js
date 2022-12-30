import styled from "styled-components";

export const Container_Header = styled.header`
  width: 100vw;
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;

  .logo {
    /* margin-left: 20px; */
    width: 90px;
    height: 90px;
  }

  .menu {
    /* background: red; */
    display: flex;
    align-items: center;
    gap: 25px;

    ul {
      font-size: 20px;
      list-style: none;
      display: flex;
      gap: 25px;

      .link {
        text-decoration: none;
        position: relative;
        display: inline-block;
        color: #221038;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #221038;
          border-radius: 4px;
          scale: 0 1;
          transform-origin: left;
          transition: scale 0.25s;
        }

        &:hover::before {
          scale: 1;
        }
      }
    }
  }
`;
