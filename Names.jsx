import React, { Component } from 'react'
import Person from "./Person"

 class Names extends Component {
     
     constructor(props) {
          super(props);
          this.state = { values: [] };
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        ADDNames(){
           return this.state.values.map((el, i) => 
               <div key={i}>
                   <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
                 
               </div>          
           )
        }
      
        handleChange(i, event) {
           let values = [...this.state.values];
           values[i] = event.target.value;
           this.setState({ values });
        }
        
        addClick(){
          this.setState(prevState => ({ values: [...prevState.values, '']}))
        }
        
       
      
        handleSubmit(event) {
         // alert('A name was submitted: ' + this.state.values.join(', '));
          event.preventDefault();
        }
        SerachItem(event){
           this.Values.filter(val =>
           {
                if(this.Values == "")
                {
                     return val
                }
                else if(val.Values.toLowerCase().includer(this.SerachItem.toLowerCase()))
                {
                     return val
                }
           }
           )}
        //const Persons = values.map(person => <Person  person1={values} />)
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
                {this.ADDNames()}        
                <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
                <input type="submit" value="Submit" />
                <br></br>
               
                <div>
                <append> <li> {this.state.values}</li></append>
                {
                     /*
                {this.values.map(value =>{values.target.value})}

          // {personList}*/}
                </div>
                <br></br>
                <input type="text" placeholder="search" onChange={event=>{this.SerachItem(event.target.value)}}></input>
                {/* {this.values.map((val)=>
                {
                     return <div>{val.values}</div>
                })} */}
            </form>
          );
        }

}

export default Names
