import React, { Component } from 'react'





class Getall extends React.Component {

    handleGetAll = (e) => {
          this.props.getAll();
      };
   

      render(){

        return(
            <>
                <button className="react-btn" onClick={this.handleGetAll}>get all</button>
            </>
        )

        }
    
}
export default Getall;