import React from 'react';
import { connect } from 'react';
import { addRecipe } from '../actions/recipes';

class RecipeForm extends React.Component {
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

  handleOnSubmit(event) {
    event.preventDefault();
    const recipe = Object.assign({}, this.state)
    this.props.addRecipe(recipe);
    this.setState({
      title: '',
      category: '',
      serves: '',
      ingredients: '',
      directions: '',
      prep_time: '',
      cook_time: '',
      total_time: ''
    })
  };

  titleHandleOnChange(event) {
    this.setState({
      title: event.target.value
    })
  };

  categoryHandleOnChange(event) {
    this.setState({
      category: event.target.value
    })
  };

  servesHandleOnChange(event) {
    this.setState({
      serves: event.target.value
    })
  };

  preptimeHandleOnChange(event) {
    this.setState({
      prep_time: event.target.value
    })
  };

  cooktimeHandleOnChange(event) {
    this.setState({
      cook_time: event.target.value
    })
  };

  totaltimeHandleOnChange(event) {
    this.setState({
      total_time: event.target.value
    })
  };

  ingredientsHandleOnChange(event) {
    this.setState({
      ingredients: event.target.value
    })
  };

  directionsHandleOnChange(event) {
    this.setState({
      directions: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h2>Add a Recipe</h2>
        <form onSubmit={this.handleOnSubmit} >
          <textarea
            cols="40"
            placeholder="Title"
            name="title"
            onChange={this.titleHandleOnChange} />
          <textarea
            cols="20"
            placeholder="Category"
            name="category"
            onChange={this.categoryHandleOnChange} />
            <br />
          <input
            type="text"
            placeholder="Serves"
            name="serves"
            onChange={this.servesHandleOnChange} />
          <input
            type="text"
            placeholder="Prep Time"
            name="prep_time"
            onChange={this.preptimeHandleOnChange} />
          <input
            type="text"
            placeholder="Cook Time"
            name="cook_time"
            onChange={this.cooktimeHandleOnChange} />
          <input
            type="text"
            placeholder="Total Time"
            name="total_time"
            onChange={this.totaltimeHandleOnChange} />
          <br />
          <textarea
            cols="60"
            rows="20"
            placeholder="Ingredients"
            name="ingredients"
            onChange={this.ingredientsHandleOnChange} />
          <br />
          <textarea
            cols="60"
            rows="30"
            placeholder="Directions"
            name="directions"
            onChange={this.directionsHandleOnChange} />
            <br />
          <input
            type="submit"
            value="Add Recipe" />
        </form>
      </div>
    )
  }
};

export default RecipeForm
