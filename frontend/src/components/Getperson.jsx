import React, { Component } from 'react'

class Getperson extends Component {
    state = {
        id: ''
    }

    handelsubmit = async (event) => {
        event.preventDefault(); // prevent page reload
        const { id } = this.state;
        
        this.props.getPersonById(id);
    }

    render() {
        const {id} = this.state;

        return (
            <div>
                <form onSubmit={this.handelsubmit}>
                    <input type='text' value={id} onChange={(event) => this.setState({ id: event.target.value })} placeholder='Id'></input>
                    <input type='submit' value='Get person'></input>
                </form>
            </div>
        )
    }
}

export default Getperson;