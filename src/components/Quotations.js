import React from "react";
import styled from "styled-components";

const Quotation = (props) => {
  return (
    <>
      <MainContainer>
        <Card>
          <ImageContainer>
            <Image src= {props.data.Image} />
          </ImageContainer>
          <TextContainer>
            <Comment>{props.data.comment}</Comment>
            <Name>{props.data.Name}</Name>
            <Designation>{props.data.Desc}</Designation>
          </TextContainer>
        </Card>
      </MainContainer>
    </>
  );
};

export default Quotation;

const MainContainer = styled.div`
  background-color: #151629;
  border-radius: 20px;
  padding: 10px;
  margin: 30px;
  border: 2px solid rgba(247, 108, 108, 0);
  @media screen and (max-width:550px){
        padding: 10px;
    }
    @media screen and (max-width:650px){
        padding: 10px;
        margin: 0%;
    }
`;

const Card = styled.div`
  background-color: #0d0d21;
  border-radius: 20px;
  padding: 30px;
  margin: 10px;
  @media screen and (max-width:550px){
        padding: 10px;
    }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
`;

const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  padding-top: 20px;
  @media screen and (max-width: 600px){
        width: 100px;
    }
`;

const TextContainer = styled.div`
  padding-top: 20px;
`;

const Comment = styled.p`
  padding-top: 20px;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  @media screen and (max-width:800px){
        padding: 5px;
    }
  @media screen and (max-width: 600px){
        padding: 2px;
        font-size: 14px;
        line-height: 18px;
    }
`;
const Name = styled.h3`
  padding-top: 20px;
  padding-right: 50px;
  background-image: linear-gradient(
    to right,
    #f76c6c,
    #e8637c,
    #d45f8a,
    #bc5e93,
    #a25e97
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
  font-size: 28px;
  text-decoration: none;
  @media screen and (max-width:950px){
        text-align: center;
        padding: 20px 10px 0;
    }
  @media screen and (max-width: 600px){
    font-size: 20px;
    }
`;
const Designation = styled.p`
  padding-right: 50px;
  padding-top: 10px;
  text-align: right;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  @media screen and (max-width:950px){
        text-align: center;
        padding: 0;
    }
`;
