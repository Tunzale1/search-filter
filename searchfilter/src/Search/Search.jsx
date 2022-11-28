import React, { Component } from 'react'

export default class Search extends Component {

    state={
        data:[{"id":1,"name":"Frodo Baggins","department":"Management","role":"CEO"},
        {"id":2,"name":"Samwise Gamgee","department":"Management","role":"CTO"},
        {"id":3,"name":"Gandalf the Gray","department":"Recruitment","role":"Lead-recruiter"},
        {"id":4,"name":"Aragorn","department":"Security","role":"Security officer"},
        {"id":5,"name":"Legolas","department":"Management","role":"Office manager"}],
        name:""
    }
    search=(e)=>{
        this.setState({name:e.target.value})
    }
render(){

return(
<>

<input onChange={this.search} />
{this.state.data.filter(item=>item.name.split("",this.state.name.length).join("").toLocaleLowerCase()==this.state.name.toLocaleLowerCase()).map(item=>{
return <React.Fragment key={item.id}>

<div>
                <h3>{item.name}</h3>
                <p>Department:{item.department}</p>
                <p>Role:{item.role}</p>
                <hr />
                </div>    

</React.Fragment>


})}




</>


)


}




}
  

 

  