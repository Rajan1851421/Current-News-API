import React, { Component } from 'react'
import loading from './loading.gif'
import '../App.css'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-5 loading'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner