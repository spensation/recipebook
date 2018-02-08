import React from 'react';
import fetch from 'isomorphic-fetch';
import { RecipeList } from '../components/RecipeList';
import '../App.css';

class RecipeListContainer extends React.Component {
  constructor() {
      super()
      this.state = {
        recipes: []
      }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
      .then(response => response.json())
      .then(recipes => this.setState({ recipes }));
  }

  render() {
    return (
      <RecipeList recipes={this.state.recipes} />
    )
  }
};

export default RecipeListContainer;
