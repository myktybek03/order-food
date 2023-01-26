import React from "react"
import styled from "styled-components"
import MealItem from "./meal-item/MealItem"

const DUMMY_MEALS = [
  {
    id: "1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
]

const Meals = () => {
  return (
    <Card>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} />
        })}
      </ul>
    </Card>
  )
}
export default Meals

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 64.9375rem;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`
