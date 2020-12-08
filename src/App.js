import React from 'react'
import {Link} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/users">Users</Link>
        <br/>
        <Link to="/contact">Contact</Link>        
      </div>
    )
  }
}
export default App
