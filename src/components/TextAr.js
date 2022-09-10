import styled from "styled-components";
export default function TextAr() {
  return (
    <Wrapper>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </Wrapper>
  );
}


const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p{
        margin: 0;
    }
    margin-right: 40%;
    @media only screen and (max-width: 600px){
      margin-top: 2%;
      margin-right: 2%;
      margin-left: 2%;
      p{
        margin-top: -3%;
        margin-left: 1%;
        line-height: 1.5em;
      }
    }
`;