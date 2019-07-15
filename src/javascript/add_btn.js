import React from 'react'


export class AddBtn extends React.Component{
    // constructor(props){
    //     super(props)
        // this.clickHandler =this.clickHandler.bind(this)
        // this.clickHander = this.clickHandler.bind(this)
    // }
    // clickHandler(){
    //     this.list.append(<Item />)
    // }


    render(){

        // let self=this
        return (
        <div className="add_btn_div">
        <button id="add_btn" onClick={this.props.onClick}>+</button>
        </div>
        )
    }
}