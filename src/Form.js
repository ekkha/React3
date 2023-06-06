import React,{Component} from "react"
import Data from "./Data";


export default class Form extends Component {
    constructor(){
        super();
        this.state= {
            name:"",
            department:"",
            rating:"",
            click:true,
            data:[]  
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    toggleFunction=()=>{
        this.setState({click:!this.state.click})
    }
    handleClick=()=>{
        const obj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating, 
        }

      this.state.data.push(obj);

      this.setState({
        name:"",
        department:"",
        rating:"",
        click:false,
        data:this.state.data,
      })

      console.log(this.state.data)
    }

    render(){
        return(
            <>
            {this.state.click?
            <>
            <h1 className='top'>EMPLOYEE FEEDBACK FORM</h1>

            <div className='card1'>
                <ul type='none'>

                    <li><label>Name:</label>
                    <input type="text" name="name" placeholder="Enter Your Name" value={this.state.name}onChange={this.handleChange}/> <br/>
                    </li>

                    <li><label>Department:</label>
                    <input type="text" name="department" placeholder="Enter Your department" value={this.state.department}onChange={this.handleChange}/> <br/>
                    </li>

                    <li><label>Rating:</label>
                    <input type="text" name="rating" placeholder="Enter Your rating" value={this.state.rating}onChange={this.handleChange}/> <br/>
                    </li>

                    
                    <br/>
                    <li>

            <button onClick={this.handleClick} >Submit</button>
            </li>

                </ul>
            </div>
            </>
            :
        <Data value={this.state.data}toggle={this.toggleFunction}/>

    }

    </>
        )
    }
}
