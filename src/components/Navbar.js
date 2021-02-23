import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import { HiMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {
    return (
        <NavContainer>
            <LogoContainer>
                <Logo src={logo} />
            </LogoContainer>
            <LinksContainer>
                <NavLinkWeb>
                    <LinkWeb to='/'>Home</LinkWeb>
                </NavLinkWeb>
                <NavLinkWeb>
                    <LinkWeb to='/'>Events</LinkWeb>
                </NavLinkWeb>
                <NavLinkWeb>
                    <LinkWeb to='/'>Speakers</LinkWeb>
                </NavLinkWeb>
                <NavLinkWeb>
                    <LinkWeb to='/'>FAQ</LinkWeb>
                </NavLinkWeb>
                <NavLinkWeb>
                    <LinkWeb to='/'>About Us</LinkWeb>
                </NavLinkWeb>
                <NavLinkWeb>
                    <LinkWebSpecial to='/'>Schedule</LinkWebSpecial>
                </NavLinkWeb>
            </LinksContainer>
            <BurgerContainer>
                <Burger />
            </BurgerContainer>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:20px 20px 20px 20px;
    @media screen and (max-width:850px){
        justify-content:space-between;
    }
`

const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Logo = styled.img`
    width:200px;
    @media screen and (max-width:850px){
        width:120px;
    }
`

const LinksContainer = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:850px){
        display:none;
    }
`

const NavLinkWeb = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const LinkWeb = styled(Link)`
    color:#fff;
    padding:20px 20px;
    margin-top:40px;
    font-size:20px;
    font-weight:lighter;
    transition:color 0.4s;
    text-decoration:none;

    &:hover{
        background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
        -webkit-background-clip: text;
        background-clip:text;
       -webkit-text-fill-color: transparent;
        transition:color 0.4s;
    }
`

const LinkWebSpecial = styled(Link)`
    font-size:20px;
    background-color:#0c0d21;
    color:#fff;
    margin-top:40px;
    padding: 10px 20px;
    font-weight:lighter;
    border-radius:5px;
    border:1px solid #fff;
    transition:background-color 0.4s;
    text-decoration:none;

    &:hover{
        color:#0c0d21;
        background-color:#fff;
        transition:background-color 0.4s;
    }
`

const BurgerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    display:none;

    @media screen and (max-width:850px){
        display:flex;
        margin-top:0px;
    }
`

const Burger = styled(HiMenuAlt2)`
    color:#fff;
    font-size:36px;
    margin-top:10px;
`
