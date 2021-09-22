import styled from "styled-components";
import { ResetStyle, GlobalStyle } from "./constants/globalStyle";
// react router

const Welcome = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  width: 90%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  background-color: #7f9e23;
`;

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Welcome> 歡迎來到 Wander Map </Welcome>
    </>
  );
}

export default App;
