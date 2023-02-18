import styled from '@emotion/styled';

export const ListItem = styled.li`
  button {
    :active {
      background-color: #3894fd;
    }
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid #898989;
    font-size: 15px;
    border-radius: 4px;
  }
`;
export const List = styled.ul`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
