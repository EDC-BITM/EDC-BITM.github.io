import React from 'react'
import styled from 'styled-components'

const EventBox = (props) => {
    return (
        <>
            <EventsBox>
                <EventImageContainer>
                    <EventImage src={props.data.Image} />
                </EventImageContainer>
                <EventDescContainer>
                    <EventHeading>{props.data.Name}</EventHeading>
                    <EventDetails>{props.data.Desc}</EventDetails>
                </EventDescContainer>
                <EventKnowContainer>
                    {/* <KnowMore>Know More</KnowMore> */}
                    <Register>Coming Soon</Register>
                </EventKnowContainer>
            </EventsBox>
        </>
    )
}

export default EventBox



const EventsBox = styled.div`
    background-color:#151629;
    border-radius:20px;
    padding:20px;
    margin:10px;
    display:grid;
    grid-template-rows:1fr 0.5fr;
    width:350px;
    border:2px solid rgba(0,0,0,0);
    transition:border 0.4s;

    &:hover{
        border:2px solid #f76c6c;
        transition:border 0.4s;
    }
`

const EventImageContainer = styled.div`
    padding-bottom:10px;
`

const EventImage = styled.img`
    width:200px;
`

const EventDescContainer = styled.div`
    padding:20px 0px;
`

const EventHeading = styled.h4`
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:32px;
`

const EventDetails = styled.p`
    font-size:18px;
    color:#fff;
    width:200px;
    margin:10px auto;

    @media screen and (max-width:600px){
        width:100%;
    }

`

const EventKnowContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding-top:10px;
    @media screen and (max-width:600px){
        justify-content:left;
    }
`

const KnowMore = styled.a`
    color:#fff;
    border:1px solid #fff;
    padding:5px 10px;
    margin-right:10px;
    border-radius:5px;
`

const Register = styled.a`
    color:#fff;
    background-color:green;
    border:1px solid green;
    padding:5px 10px;
    margin-right:5px;
    border-radius:5px;
`
