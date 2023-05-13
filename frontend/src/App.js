import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
import Getall from './components/Getall';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import Getperson from './components/Getperson';


export const api = axios.create({
  baseURL: 'http://localhost:5000/person_obj/'
})

class App extends Component {

  state = {
    person: [],
    name: '',
    age: '',
    gender: '',
    email: ''
  }

  constructor(){
    super();
    
  }

  getPersons = async () => {
    try {
      let data = await api.get('/').then(({data})=>
      data);
      this.setState({ person: data })
    }catch(err){
      console.log(err);
    }
    
  }

  getPersonById = async (id) => {
    try {
      let data = await api.get(`/${id}`).then(({data}) => data);
      console.log(data);
      // update the state with the person data
      this.setState({ person: [data] })
    } catch(err) {
      console.log(err);
    }
  }


  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <Getperson getPersonById={this.getPersonById}/>
          <Getall getAll={this.getPersons}/>
        </header>
         
        <Create getAll={this.getPersons} />
          <Update getAll={this.getPersons} />

          
          

          
          {/* delete */}
          {this.state.person.map( p => 
                <h2 key={p.id}>
                <span className='key'>Id: </span>
                <span>{p.id}</span>
                  <span className='key'>Name:</span>
                  <span>{p.name}</span>
                  <span className='key'>Age:</span>
                <span>{p.age}</span>
                    <Delete id={p.id} getAll={this.getPersons} />
                </h2>
            )}

      </div>
    );
  }
  
}

export default App