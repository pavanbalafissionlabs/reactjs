import React, { Component } from "react"

class Timer extends Component{
    
     constructor()
     { 
          super();
          var crrtime= new Date().toLocaleTimeString();
         
          this.state={latesttime:crrtime};
          
     }

     componentDidMount(){
          setInterval(() => {
          var crrtime= new Date().toLocaleTimeString();
          
          this.setState({latesttime:crrtime})
          },3000)}
     render()
     {
          var date= new Date().toLocaleDateString();
         var  crrtime= new Date().toLocaleTimeString();
          return(
<div class="a">
<h1>{this.state.crrtime}{crrtime}</h1>
{this.state.date}{date}
</div>
          );
     }
}

export default Timer;