import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #4c489d;
`;
export const FilterInput = styled.input`
  border: none;
  border: 2px solid #d1d1d4;
  background: #fff;
  padding: 8px;
  font-weight: 700;
  width: 200px;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: #6a679e;
  }
`;
