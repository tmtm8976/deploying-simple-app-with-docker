import React, { Component } from 'react'
import { api } from '../App'

class Delete extends Component {
    deletePerson = async (event) => {
        event.preventDefault(); // prevent page reload
        const { id } = this.props;
        
        let res = await api
            .delete(`/${id}`)
            .catch(err=>console.log(err))

        console.log(res);
        this.props.getAll(); // update the list of persons after deletion
    }

    render() {
        return (
            <div>
                <button onClick={this.deletePerson}>Delete</button>
            </div>
        )
    }
}

export default Delete;