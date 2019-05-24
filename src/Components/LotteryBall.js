import React, { Component } from 'react'


export default class LotteryBall extends Component {
    render() {
      return (
        <div className='Ball'>
          { this.props.num }
        </div>
      )
    }
}