import * as React from 'react';
class Changeandunchanged extends React.Component{
     state={
          a:"Pavan"

     }

     uncontolled = ()=>
     {
     console.log(this.name.value)
     }

render()
{
     return (
          <div>

        <input  
         
        className='inputA'
        onChange={e =>{
             this.setState({
                  a:e.target.value
             })
          console.log(e.target.value)
            // this.state.a= e.target.value;
        }}

        value={this.state.a}
         />
        <br></br>
        {  this.state.a }
        <br></br>

          <input type= "text"  ref={
               (input) =>
               {
                    return this.name = input
               }
          
          }/>
          <button onClick ={this.uncontolled}>uncontrolled</button>
        
          </div>
     )
}

}

export default Changeandunchanged;