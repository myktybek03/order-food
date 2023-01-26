import React from "react"
import styled from "styled-components"
import BasketButton from "./BasketButton"

const Header = () => {
  return (
    <Container>
      <Logo>React Meals</Logo>
      <BasketButton />
    </Container>
  )
}

export default Header

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  background: #8a2b06;
  padding: 0 120px;
  align-items: center;
  z-index: 1;
`

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`
