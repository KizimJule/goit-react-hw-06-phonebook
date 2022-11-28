import styled from 'styled-components';

export const Screen = styled.div`
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  width: 300px;
  box-shadow: 0px 0px 24px #5c5696;
`;
export const ScreenContent = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
`;

export const Form = styled.form`
  /* margin: 0 auto; */
  width: 260px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  font-size: 16px;
  font-weight: 600;
  color: #4c489d;
`;
export const Input = styled.input`
  border: none;
  border: 2px solid #d1d1d4;
  background: none;
  padding: 6px;
  font-weight: 600;
  width: 85%;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: #6a679e;
  }
`;
export const ButtonForm = styled.button`
  background: #fff;
  font-size: 12px;
  padding: 8px 10px;
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
  margin: 0 auto;
  &:hover,
  &:focus {
    border-color: #6a679e;
    outline: none;
  }
`;

export const ScreenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`;
export const ScreenBackgroundShape4 = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 20px;
  right: 50px;
  border-radius: 60px;
`;
export const ScreenBackgroundShape3 = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
`;
export const ScreenBackgroundShape2 = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
`;
export const ScreenBackgroundShape1 = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 420px;
  width: 320px;
  background: #fff;
  top: -20px;
  right: 180px;
  border-radius: 0 72px 0 0; ;
`;
