import React, { Component } from 'react'
import App from '../App'
import Search from '../Search/Search'
export default class Yey extends Component {
  render() {
    return (
      <div className='yey'>
        <h2>Filter</h2>
<App/>
<h2>Searchbar</h2>
<Search/>

 </div>
    )
  }
}