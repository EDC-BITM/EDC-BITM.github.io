import React from 'react'
import {FaTimes} from 'react-icons/fa';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <SideBarWrapper>
        <SideBarMenu>
        <SideBarLink smooth to="edc-home">
          Home
            </SideBarLink>
            <SideBarLink smooth to="/#events">
          Events
            </SideBarLink>
            <SideBarLink smooth to="/#speakers">
          Speakers
            </SideBarLink>
            <SideBarLink smooth to="team" >
          Team
            </SideBarLink>
            
            

        </SideBarMenu>
        <SideBtnWrap>
            <SideBarRoute smooth to="/#sponsors">
                Sponsors
            </SideBarRoute>
        </SideBtnWrap>
    </SideBarWrapper>


    </SideBarContainer>
  )
}

export default Sidebar

const SideBarContainer=styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3 ease-in-out;
opacity: ${({isOpen})=> (isOpen?'100%':'0')};
top:${({isOpen})=> (isOpen?'0':'-100%')};

`
const CloseIcon=styled(FaTimes)`
color:#fff;
`
const Icon=styled.div`
position: absolute;
top: 1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`
const SideBarWrapper=styled.div`
color:#fff;
`
const SideBarLink=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5 rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color:#fff;
cursor: pointer;

&:hover{
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
        -webkit-background-clip: text;
        background-clip:text;
       -webkit-text-fill-color: transparent;
        transition:color 0.4s;

}

`

const SideBtnWrap=styled.div`
justify-content: center;
display: flex;
`
const SideBarRoute=styled(Link)`
border-radius: 50px;
background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
white-space: nowrap;
padding: 16px 64px;
font-size: 16px;
color:#fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background :#fff ;
    color:#0c0d21;

}

`

const SideBarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat( 6, 80px);
text-align: center;
@media screen and (max-width: 480px) {
    grid-template-rows:repeat( 6, 60px);

}
`