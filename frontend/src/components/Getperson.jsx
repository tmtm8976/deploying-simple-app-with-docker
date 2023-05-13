import React, { Component } from 'react'
import field from './Field.module.css'

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
                <form onSubmit={this.handelsubmit} className={field.form}>
                    <input type='text' value={id} onChange={(event) => this.setState({ id: event.target.value })} placeholder='Id'  className={field.id}></input>
                    <input type='submit' value='Get person' className={field.btn_primary}></input>
                </form>
            </div>
        )
    }
}

export default Getperson;