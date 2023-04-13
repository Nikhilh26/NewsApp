import React, { Component } from 'react'
import Gif from './ajax-loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <img src={Gif} />
    )
  }
}
