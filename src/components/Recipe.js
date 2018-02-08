import React from 'react';
import '../App.css';

const Recipe = ({ title, serves, category }) => {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <h4>{serves}</h4>
      <h4>(category)</h4>
    </div>
  )
}
