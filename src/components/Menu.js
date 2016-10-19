import React, { Component } from 'react';

//todo: render a list of menu items + buttons to add them to your plate

export default class Menu extends Component {

  render () {
    console.log("this.props.menu-----", this.props.menu);
    return (
      <div>
        <h3>Menu</h3>
        <ul>
        { this.props.menu.map( item => (
          <li key={ item.id }>
            <button onClick={ () => this.props.addToPlate(item) }> { item.name }</button>
          </li>
        )) }
        </ul>
      </div>
    );
  }
}
