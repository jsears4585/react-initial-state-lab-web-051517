// Bomb Component Code Goes Here
import React, {Component} from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    if (this.state.secondsLeft > 0) {
      return (
        <p>{this.state.secondsLeft.toString()} seconds left before I go boom!</p>
      )
    } else {
      return (
        <p>Boom!</p>
      )
    }
  }
}

export default Bomb
