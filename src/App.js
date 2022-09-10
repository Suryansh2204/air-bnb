import styled from "styled-components";
import GrpImg from "./components/GrpImg";
import Navbar from "./components/Navbar";
import TextAr from "./components/TextAr";

export default function App() {
  return (
    <Wrapper>
      <Navbar/>
      <GrpImg/>
      <TextAr/>
    </Wrapper>
  );
}

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
