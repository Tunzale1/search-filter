import React, { Component } from 'react'
class App extends Component {
    state={
      name:"",
       data :[
       {"id":1,"name":"Frodo Baggins","department":"Management","role":"CEO"},
       {"id":2,"name":"Samwise Gamgee","department":"Management","role":"CTO"},
       {"id":3,"name":"Gandalf the Gray","department":"Recruitment","role":"Lead-recruiter"},
       {"id":4,"name":"Aragorn","department":"Security","role":"Security officer"},
       {"id":5,"name":"Legolas","department":"Management","role":"Office manager"}
      ],
        filtered:[]
    }
management=()=>{
      const filtered=this.state.data.filter(item=>{
        return item.department==="Management"
      })
      this.setState({filtered})
    }
recruitment=()=>{
      const filtered=this.state.data.filter(item=>{
        return item.department==="Recruitment"
      })
      this.setState({filtered})
    }
security=()=>{
      const filtered=this.state.data.filter(item=>{
        return item.department==="Security"
      })
      this.setState({filtered})
    }
handleName=(e)=>{
      this.setState({name:e.target.value})
  }
  render() {
   
    return (
      <div>
        <div className='butt'>
        <button onClick={this.management}>Management</button>
        <button onClick={this.recruitment}>Recruitment</button>
        <button onClick={this.security}>Security</button>
        </div>
        <div>
        { this.state.filtered.length>0?this.state.filtered.map((item) => {
         return <React.Fragment key={item.id}>
    
         <h3>{item.name}</h3>
           <p>{item.department} </p>
           <p> {item.role}</p>
           <hr/>
           </React.Fragment>
         
        }):"" }
        </div>
        </div>
       )}}

       export default App