import React, {Component} from 'react'

export default class Data extends Component {
    constructor(props){
    super(props);
    console.log(this.props);
}
render() {
    return(
        <>
        <div className='card2'>
            {this.props.value.map((item,index)=>{
                return(
                    <div key={index} className='card3'>
                        <h5>
                            Name:{item.name} |
                            Department:{item.department} |
                            Rating:{item.rating}
                        </h5>
               </div>
               
                )
            })}
        </div>
        
        <button className='btn2' onClick={this.props.toggle}>Go Back</button>
        
        </>
    )
}

}
