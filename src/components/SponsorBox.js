import React from 'react'
import styled from 'styled-components'

const SponsorBox = ({ data }) => {
    return (
        <>
            <SponsorBoxContainer>
                <Container href={data.Link}>
                    <TypeContainer>
                        <Type>
                            {data.type}
                        </Type>
                    </TypeContainer>
                    <ImageContainer>
                        <Image src={data.image} />
                    </ImageContainer>
                    <NameContainer>
                        <Name>{data.Name}</Name>
                    </NameContainer>
                </Container>
            </SponsorBoxContainer>
        </>
    )
}

export default SponsorBox




const SponsorBoxContainer = styled.div`
    margin:20px 10px;
    padding:20px;
    border:2px solid rgba(0,0,0,0);
    transition:border 0.4s;
    border-radius:20px;
    border:2px solid rgba(255,255,255,0.1);
    background-color:rgba(255,255,255,0.05);

    &:hover{
        border:2px solid #f76c6c;
        transition:border 0.4s;
    }
`
const Container = styled.a`
    height:100%;
    text-decoration:none;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const TypeContainer = styled.div`
    padding:0px 0px 10px 0px;
    border-bottom:2px solid rgba(255,255,255,0.1);
`

const Type = styled.h4`
    color:#f76c6c;
    font-size:20px;
    text-decoration:none;
    font-weight:lighter;
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
`

const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    border-radius:10px;
    margin:20px 0px;
`

const Image = styled.img`
    width:250px;
`

const NameContainer = styled.div`
    padding:10px 0px 0px 0px;
    border-top:2px solid rgba(255,255,255,0.1);
`

const Name = styled.h3`
    color:#fff;
    font-size:18px;
    text-decoration:none;
    font-weight:lighter;
`
