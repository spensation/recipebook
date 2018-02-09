import React, { Component } from 'react';
import { connect } from 'react';
import { addRecipe } from '../actions/recipes';

class RecipeForm extends React {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      serves: '',
      ingredients: '',
      directions: '',
      prep_time: '',
      cook_time: '',
      total_time: ''
    }
  }
  render() {
    return (
      <div>
        <h2>Add a Recipe</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.handleOnChange} />
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Recipe" />
        </form>
      </div>
    )
  }
}

export default RecipeForm
