import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://api.github.com/orgs/nodejs')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export default GetRequest ; 