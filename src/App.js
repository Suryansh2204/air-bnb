import styled from "styled-components";
import Card from "./components/Card";
import GrpImg from "./components/GrpImg";
import Navbar from "./components/Navbar";
import TextAr from "./components/TextAr";
import data from "./data";
export default function App() {
  const cards = data.map((card) => (
    <Card
      key={card.id}
      location={card.location}
      openSpots={card.openSpots}
      img={card.img}
      reviewCount={card.reviewCount}
      country={card.country}
      price={card.price}
      rating={card.rating}
      title={card.title}
    />
  ));
  return (
    <Wrapper>
      <Navbar />
      <GrpImg />
      <TextAr />
      <Cards>
        {cards}
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards=styled.div`
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
`;
