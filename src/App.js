import styled from "styled-components";
import Card from "./components/Card";
import GrpImg from "./components/GrpImg";
import Navbar from "./components/Navbar";
import TextAr from "./components/TextAr";

export default function App() {
  return (
    <Wrapper>
      <Navbar/>
      <GrpImg/>
      <TextAr/>
      <Card/>
    </Wrapper>
  );
}

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
