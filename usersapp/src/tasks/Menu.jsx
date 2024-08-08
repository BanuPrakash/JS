import React, { Component } from 'react'
import recipes from '../recipes'
import Recipe from './Recipe'
export default class Menu extends Component {
state = {
    recipes
}
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
       {
        this.state.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.name} />)
       }
        </ul>
      </div>
    )
  }
}
