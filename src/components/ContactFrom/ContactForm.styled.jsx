import styled from '@emotion/styled';

export const FieldInput = styled.input`
  font-size: 15px;
  padding: 5px 10px;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid black;
  padding: 15px;
  max-width: 450px;
  margin-bottom: 20px;
`;
export const ButtonSubmit = styled.button`
  max-width: 115px;
  border: none;
  background-color: #3894fd;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 3px 3px 14px -1px #1fa9ff;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  max-width: 250px;
  gap: 10px;
`;
