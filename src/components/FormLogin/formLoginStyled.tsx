import styled from "styled-components";

export const ButtonLogin = styled.button`
  color: white;
  background-color: #00aff0;
  width: 100%;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: #3399ff;
  }
`;

export const LinkDirect = styled.a`
  display: block;
  color: black;
  font-size: 16px;
  text-align: center;

  &:hover {
    color: #df0029;
    transition: all 300ms ease-in-out;
  }
`;

export const FormLogin = styled.form`
  max-width: 500px;
  min-width: 300px;
  background-color: white;
  border-radius: 8px;
  padding: 40px 30px;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  gap: 20px;
  position: absolute;
  top: 40%; 
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Div1 = styled.div`
  position: relative;
  display: flex;
  background-color: #ffe4e1;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Title1 = styled.h1`
  color: #8b3a3a;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: normal;
  text-align: center;
  text-transform: capitalize;
`;
