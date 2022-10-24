import styled from "styled-components";

export const Footers = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;
  footer {
    border-top: 1px #dadce0 solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    gap: 30px;
    width: 100%;
    margin: auto;
    padding: 30px;
    border: 2px red solid;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    font-size: 24px;
    padding: 20px;
    background-color: #f2f2f2;
    opacity: 0.8;
  }
  li {
    font-size: 20px;
    opacity: 0.75;
  }
  @media (max-width: 450px) {
    li:nth-child(4) {
      display: none;
    }
    div {
      display: none;
    }
    li {
      justify-content: center;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: center;
      text-align: center;
      margin: auto;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
