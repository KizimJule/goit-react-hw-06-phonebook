import styled from 'styled-components';

export const ContactListUl = styled.ul`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background: linear-gradient(270deg, #5d54a4, #7e7bb9);
`;
export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  list-style-position: inside;
  width: 360px;
  padding: 8px;
`;
export const ContactTitle = styled.p`
  margin: 0;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;
export const ContactCard = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;
export const ButtonDelete = styled.button`
  background: #fff;
  font-size: 10px;
  padding: 6px 8px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus {
    border-color: #6a679e;
    outline: none;
  }
`;
