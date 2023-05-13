import React, { Component } from 'react'
import field from './Field.module.css'





class Getall extends React.Component {

    handleGetAll = (e) => {
          this.props.getAll();
      };
   

      render(){

        return(
            <>
                <button className={field.btn_primary} onClick={this.handleGetAll} >get all</button>
            </>
        )

        }
    
}
export default Getall;