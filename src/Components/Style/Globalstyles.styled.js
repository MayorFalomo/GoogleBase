import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Montserrat&family=Nanum+Gothic&family=Playfair+Display:wght@500&family=Poppins&family=Roboto:ital,wght@1,300&family=Rubik:wght@300;400&family=Saira&family=Spectral:wght@400;600&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: white;
    color: #000;
    font-size: 18px;
    margin: 0;
}
p{
    line-height: 25px;
}
img{
    width: 100%;
}
li{
    list-style: none;
}
`;

export default GlobalStyles;
