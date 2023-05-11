import React, { Component } from 'react'
import { api } from '../App'

class Create extends Component {
    state = {
        name: '',
        age: '',
        gender: '',
        email: '',
    }

    createPerson = async (event) => {
        event.preventDefault(); // prevent page reload
        const { name, age, gender, email } = this.state;
        
        let res = await api
            .post('/', { "id":5, "name": name, "age": age, "gender": gender, "email": email })
            .catch(err=>console.log(err))

        console.log(res);
    }

    render() {
        const { name, age, gender, email } = this.state;

        return (
            <div>
                <form onSubmit={this.createPerson} >
                    <input type='text' value={name} onChange={(event) => this.setState({ name: event.target.value })} placeholder='Name'></input>
                    <input type='number' value={age} onChange={(event) => this.setState({ age: event.target.value })} placeholder='Age'></input>
                    <input type='text' value={gender} onChange={(event) => this.setState({ gender: event.target.value })} placeholder='Gender'></input>
                    <input type='text' value={email} onChange={(event) => this.setState({ email: event.target.value })} placeholder='Email'></input>
                    <input type='submit' value='create'></input>
                </form>
            </div>
        )
    }
}

export default Create;