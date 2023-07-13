import styled from 'styled-components';

import Button from 'components/Button/Button';

export const StyledBook = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: ${props =>
    props.$favourite ? '1px solid #b003fd' : '1px solid black'};
  border-radius: 15px;
  /* background-color: ${props => (props.favourite ? '#dbf6ac' : '#f6e4ac')}; */
  background-color: ${props => props.$bgColor};
  max-width: 350px;
  margin: 0 auto;
  /* max-height: 400px; */

  /* &.favourite {
    border: 1px solid #b003fd;
    background-color: #dbf6ac;
  } */

  & .par1 {
    margin-bottom: 8px;
  }

  & .par2 {
    padding-bottom: 8px;
  }

  & .bookImg {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* & .delete-btn {
    color: #01c8b1;
  } */
`;

export const StyledButton = styled(Button)`
  color: #01c8b1;
`;
