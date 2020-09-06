import React, {Component} from 'react'
import Table from './Table'
import Car from './Car'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Car/>
        <Table />
      </div>
    )
  }
}

export default App