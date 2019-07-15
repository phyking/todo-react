import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Search} from './javascript/search'
import {List} from './javascript/list'
import {Item} from './javascript/list_item'
import {AddBtn} from './javascript/add_btn'
import {Hidden} from './javascript/hide'

class App extends Component {
  constructor(props){
    super(props)
    this.addHandler = this.addHandler.bind(this)
    this.updateHandler = this.updateHandler.bind(this)
    this.state={
      itemArray:[]
    }
   
  }
  
  addHandler(){
    this.setState({
      itemArray: this.state.itemArray.concat([{text:'',checkded:false}])
    })
  }

  updateHandler(e,key){
    if(e.target.className === 'delete'){
      console.log(key)
      console.log(this.state.itemArray.index)
      // let newArray = this.state.itemArray.splice(index,1)
      // this.setState(
      //   {itemArray:newArray}
      // )
    }
  }

  clickHandler(){
   
  }

  render() {
    // let self=this
    return (
      <div>
      <Search />
      <header>
        Todolist
      </header>
      <div className="container">
      <div className="list" onClick={this.updateHandler}>
        {this.state.itemArray.map((item,index) => {
          console.log(this.state.itemArray)
          return <Item data={item} key={index} />
        })}
      </div>
      <AddBtn onClick={this.addHandler}/>
      <Hidden />
      </div>
      </div>
    );
  }
}

export default App;
