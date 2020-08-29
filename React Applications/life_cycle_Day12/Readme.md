## Day 9

**React Lifecycle**

**Lifecycle of Components**

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

**Mounting**

Mounting means putting elements into the DOM.
React has four built-in methods that gets called, in this order, when mounting a component:
1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them.

**Updating**

The next phase in the lifecycle is when a component is updated.
A component is updated whenever there is a change in the component's state or props.
React has five built-in methods that gets called, in this order, when a component is updated:

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you define them.

**Unmounting**

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
React has only one built-in method that gets called when a component is unmounted:

1. componentWillUnmount()


