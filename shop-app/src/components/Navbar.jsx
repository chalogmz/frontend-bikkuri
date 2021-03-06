import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"


const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize:"14px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <i class="fas fa-search" style={{color:"gray", fontSize:16}}></i>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>BIKKURI.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><i class="fas fa-shopping-cart"></i></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
