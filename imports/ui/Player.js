import React from 'react'
import PropTypes from 'prop-types'
import {Players} from './../api/players'

export default class Player extends React.Component{
      render(){
            return (
                  <div key={this.props.id} className='item'>
                        <div className='player'>
                              <div>
                                    <h3 className='player__name'>{this.props.name}</h3>
                                    <p className='player__stats'>{this.props.score} points.</p>
                              </div>
                              <div className='player__actions'>
                                    <button className='button button--round' onClick={() => { Players.update(this.props.id, { $inc: {score: 1}})}}>+1</button>
                                    <button className='button button--round' onClick={() => { Players.update(this.props.id, { $inc: {score: -1}})}}>-1</button>
                                    <button className='button button--round' onClick={()=> Players.remove(this.props.id)}>X</button>
                              </div>
                        </div>
                  </div>
      )}
}

Player.propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
}