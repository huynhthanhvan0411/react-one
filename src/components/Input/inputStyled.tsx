import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  border: 2px solid #898989;
  border-radius: 8px;
  height: 40px;
  background-color: #f9f9f9;

  &:focus {
    border: 2px solid #ffa54f;
    outline: none;
  }
`;

export const TextError = styled.p`
  text-align: left;
  color: red;
  font-size: 12px;
`;
