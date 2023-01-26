import Basket from "./components/basket/Basket"
import Header from "./components/header/Header"
import Meals from "./components/meals/Meals"
import Summary from "./components/summary/Summary"
import styled from "styled-components"
import SummaryInfoCard from "./components/summary/SummaryInfoCard"
// import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Summary />
        <SummaryInfoCard />
        <Meals />
        <Basket />
      </Content>
    </div>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`
