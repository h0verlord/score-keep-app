import React from 'react'
import PropTypes from 'prop-types'
import {Players} from './../api/players'

export default class Player extends React.Component{
      render(){
            return (
                  <p key={this.props.id}>
                        {this.props.name}: {this.props.score} points.
                        <button onClick={() => { Players.update(this.props.id, { $inc: {score: 1}})}}>+1</button>
                        <button onClick={() => { Players.update(this.props.id, { $inc: {score: -1}})}}>-1</button>
                        <button onClick={()=> Players.remove(this.props.id)}>X</button>
                  </p>
      )}
}

Player.propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
}