import React, { Component } from 'react'
import { api } from '../App'
import field from './Field.module.css'

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
                <button onClick={this.deletePerson} className={field.btn_Delete}>Delete</button>
            </div>
        )
    }
}

export default Delete;