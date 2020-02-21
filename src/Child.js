import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  render() {
    // console.log(this.props) //handleColorChange fn passed in from Parent
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())} //pass in hCC prop into React event handler
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
