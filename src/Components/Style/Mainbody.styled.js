import styled from "styled-components";

export const Main = styled.div`
  margin-top: 100px;
  padding: 30px;
  /* border: 2px green solid; */
  @import url("https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Montserrat&family=Nanum+Gothic&family=Playfair+Display:wght@500&family=Poppins&family=Roboto:ital,wght@1,300&family=Rubik:wght@300;400&family=Saira&family=Spectral:wght@600&display=swap");
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    /* height: 50vh; */
    border: 2px yellow solid;
  }
  button {
    padding: 10px 20px;
    border-radius: 7px;
    border: none;
    font-size: 20px;
    position: absolute;
    top: 100px;
  }

  button:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  p {
    position: absolute;
    top: 200px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
  }
  li {
    font-family: "Spectral";
  }
  li h1 {
    font-size: 70px;
  }
  li:first-child {
    color: #4285f4;
  }
  li:nth-child(2) {
    color: #ea4335;
  }
  li:nth-child(3) {
    color: #fbbc05;
  }
  li:nth-child(4) {
    color: #4285f4;
  }
  li:nth-child(5) {
    color: #34a853;
  }
  li:nth-child(6) {
    color: #ea4335;
  }
  li:nth-child(7) {
    color: #fbbc05;
  }
  li:nth-child(8) {
    color: #4285f4;
  }
  li:nth-child(9) {
    color: #ea4335;
  }
  li:nth-child(10) {
    color: #fbbc05;
  }
  li:nth-child(11) {
    color: #34a853;
  }
  li:nth-child(12) {
    color: #ea4335;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    position: relative;
  }
  @media (max-width: 450px) {
    & {
      margin-top: 30px;
    }
    p {
      position: absolute;
      top: 150px;
    }
  }
`;

export const Logo = styled.img`
  width: 400px;
`;
