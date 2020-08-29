class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        employees: [],
        error: null
      }
    }
  
    componentDidMount() {
      fetch('https://api.example.com/items')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              employees: result.employees
            })
          },
          (error) => {
            this.setState({ error })
          }
        )
    }
  
    render() {
      const { error, employees } = this.state
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
          <ul>
            {employees.map(employee => (
              <li key={employee.name}>
                {employee.name}-{employee.experience}
              </li>
            ))}
          </ul>
        )
      }
    }
  }
  