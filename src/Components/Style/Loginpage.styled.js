import styled from "styled-components";

export const Logins = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px 30px;
  button {
    border: 2px #dadce0 solid;
    padding: 15px 25px;
    font-size: 18px;
    border-radius: 20px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    padding: 20px 5px;
    border-radius: 30px;
    gap: 30px;
    max-width: 400px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  h2 {
    text-align: center;
  }
  p {
    font-size: 18px;
    border-top: 1px #dadce0 solid;
    padding: 10px 5px;
    margin: auto;
    padding: 15px;
  }
  span {
    /* display: flex; */
    border: 2px red solid;
  }
`;
