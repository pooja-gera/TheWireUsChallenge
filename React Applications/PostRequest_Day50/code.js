import React from 'react';

class PostRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
    }

    render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Async/Await</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export default PostRequestAsyncAwait; 