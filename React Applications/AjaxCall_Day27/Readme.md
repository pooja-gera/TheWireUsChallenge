## Day 27

**Ajax call**

You can use AJAX libraries such as Axios, jQuery AJAX, and the browser
built-in fetch. You should fetch data in the componentDidMount()
lifecycle method. This is so you can use setState() to update your
component when the data is retrieved.

For example, the employees list fetched from API and set local state.


**Challenge Description**

*How to make AJAX call and in which component lifecycle 
methods should I make an AJAX call?*

1. Create a "MyComponent", React Class Component type defining a constructor with props.

2. Setting the states value as  'employees: []  ,  error: null'.

3. Now define a componentDidMount() function to fetch the result of the employees.

4. And at the end render the result .
