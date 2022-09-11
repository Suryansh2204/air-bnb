import styled from "styled-components";
export default function Card(props) {
  let statusDisp
  if(props.openSpots===0){
    statusDisp="Sold Out"
  }
  else if(props.location==="Online"){
    statusDisp="Online"
  }
  return (
    <Wrapper>
      <Image src={`imgs/${props.img}`} />
      {statusDisp && <Status>{statusDisp}</Status>}
      <Text>
        <img src="imgs/Star 1.png" alt="" />
        <div className="l1">
          <span>{props.rating} </span>
          <span className="s1">({props.reviewCount}) • </span>
          <span className="s1">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <b>From $ {props.price}</b>
        <span> /person</span>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px 10px;
  width: 190px;
  height: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Image = styled.img`
  width: 180px;
  height: 200px;
  border-radius: 9px;
  `;

const Status = styled.div`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  margin-top:10px;
  margin-right: 100px;
  padding: 0px 10px;
  `;

const Text = styled.div`
  img {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    display: inline-block;
    width: 15px;
  }
  .l1 {
    margin-left: 1px;
    display: inline-block;
  }
  .s1{
    color: #918E9B;
  }
  p {
    margin: 0.2em;
    margin-left: 8px;
  }
  b{
    margin-left: 8px;
  }
`;
