import React, { Component } from 'react';

//todo: render a list items that have been added to your plate

export default class Plate extends Component {

  render () {
    return (
      <div>
        <h3>Plate</h3>
        <ul>
          { this.props.plate.map( (item, index) => (
            <li key={ index }>{ item.name }</li>
          ))}
        </ul>
      </div>
    );
  }
}