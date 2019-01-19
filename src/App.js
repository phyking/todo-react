import React, { Component } from 'react';
import './App.css';
import {Search} from './javascript/search'
import {Item} from './javascript/list_item'
import {AddBtn} from './javascript/add_btn'
import {Hidden} from './javascript/hide'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      itemArray:[],
      showChecked:true,
      isSearched:[]
    }
    this.addHandler = this.addHandler.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
   
  }
  
  updateHandler(index,mod){
    let arr = this.state.itemArray.concat([])
    Object.assign(arr[index],mod)

    
    this.setState({itemArray:arr})
  }

  addHandler(){
    this.setState({
      itemArray: this.state.itemArray.concat([{text:'',checked:false, id: new Date().getTime()}])
    })
  }

  searchHandler(index,value){
    let arr = this.state.isSearched.concat([])
    this.state.itemArray.map((data, index) => {
      if (!value){
        return arr=[]
      }
      if
      (data.text.indexOf(value) > -1){
       arr = this.state.isSearched.concat(index)
    }return arr
    })
    this.setState({isSearched:arr})
  }

  deleteHandler(index){ 
    let arr = this.state.itemArray.concat([])
    arr.splice(index,1)
    this.setState({itemArray:arr})
  }

    showHideHandler(showChecked){
      this.setState({showChecked})
    }
    

  render() {
    return (
      <div>
      <Search searched={this.searchHandler.bind(this)}/>
      <header>
        Todolist
      </header>
      <div className="container">
      <div className="list">
     {this.state.itemArray.map((data, index) => {
       let searched = this.state.isSearched.indexOf(index) > -1
       let item = <Item data={data} key={data.id} index={index} onDelete={this.deleteHandler} onUpdate={this.updateHandler.bind(this)} searched={searched}/>
       if (this.state.showChecked) {
         return item
       } else {
         return data.checked ? null : item
       }
     })}
      </div>
      <AddBtn onBtnClick={this.addHandler}/>
      <Hidden data={this.state.itemArray} onClick={this.showHideHandler.bind(this)}/>  
      </div>
      </div>
    );
  }
}

export default App;
