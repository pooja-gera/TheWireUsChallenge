import React, {Component} from 'react'

const TableHeader = () => {
    //creates a component named TableHeader
    return (
        //HTML code of Header of the Table only
        <thead>
          <tr>
            <th>Challenge Number</th>
            <th>Challenge Topic</th>
          </tr>
        </thead>
    )
}

const TableBody = () => {
    //creates a component named TableBody
    return (
        //HTML code of Body of the the Table only
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
    )
}

//Now creating a Table of React Component type
class Table extends Component {
    render() {
      return (
        //Within the <table> tags the TableHeader and TableBody components are added so that they can be rendered
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
}

export default Table
//exported to App.js