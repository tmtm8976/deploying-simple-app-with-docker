import React, { Component } from 'react'
import { api } from '../App'

class Update extends Component {
    state = {
        id: '',
        name: '',
        age: '',
        gender: '',
        email: ''
    }

    updatePerson = async (event) => {
        event.preventDefault(); // prevent page reload
        const { id, name, age, gender, email } = this.state;
        
        let res = await api
            .put(id, { "name": name, "age": age, "gender": gender, "email": email })
            .catch(err=>console.log(err))

        console.log(res);
    }

    render() {
        const {id, name, age, gender, email } = this.state;

        return (
            <div>
                <form onSubmit={this.updatePerson} >
                    <input type='text' value={id} onChange={(event) => this.setState({ id: event.target.value })} placeholder='Id'></input>
                    <input type='text' value={name} onChange={(event) => this.setState({ name: event.target.value })} placeholder='Name'></input>
                    <input type='number' value={age} onChange={(event) => this.setState({ age: event.target.value })} placeholder='Age'></input>
                    <input type='text' value={gender} onChange={(event) => this.setState({ gender: event.target.value })} placeholder='Gender'></input>
                    <input type='text' value={email} onChange={(event) => this.setState({ email: event.target.value })} placeholder='Email'></input>
                    <input type='submit' value='update'></input>
                </form>
            </div>
        )
    }
}

export default Update;