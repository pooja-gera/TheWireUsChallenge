import React, {Component} from 'react'

class Table extends Component {
  //creates a Table of React Component type
  render() {
    return (
      //HTML code that is to be shown/rendered on the webpage
      <table>
        <thead>
          <tr>
            <th>Challenge Number</th>
            <th>Challenge Topic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>CSS Tricks</td>
          </tr>
          <tr>
            <td>2</td>
            <td>CSS Drawing</td>
          </tr>
          <tr>
            <td>3</td>
            <td>JavaScript DSA</td>
          </tr>
          <tr>
            <td>4</td>
            <td>SQL</td>
          </tr>
          <tr>
            <td>5</td>
            <td>React Applications</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>7</td>
            <td>EDA</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Machine Learning using Kaggle</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Competitive Programming</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Web Scraping</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
//the component is exported to App.js