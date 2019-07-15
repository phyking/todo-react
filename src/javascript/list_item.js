import React from 'react'

export class Item extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.deleteHandler = this.deleteHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.updateHandler = this.updateHandler.bind(this)
        this.keyDownHandler = this.keyDownHandler.bind(this)
    }

    deleteHandler(e,index){
        // e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }

    clickHandler(e){
        e.target.style.display = 'none'
        e.target.parentNode.getElementsByClassName('listInput')[0].style.display = 'block'
    }

    updateHandler(e){
        this.setState({value: e.target.value}) 
        
    }

    keyDownHandler(e){
        if(e.key === 'Enter'){
            e.target.style.display = 'none'
            e.target.parentNode.getElementsByClassName('item_text')[0].style.display = 'block'
        }
    }

    render(){
    return (
        <div className='item' >
        <button className='delete' onClick={this.deleteHandler}>删除</button>
            <input type="checkbox" className="selectBtn" />
            <textarea className="listInput" value={this.state.value} onChange={this.updateHandler} onKeyDown={this.keyDownHandler}></textarea>
            <p className="item_text" onClick={this.clickHandler}>{this.props.data.text}</p>
        </div>
    )}
}