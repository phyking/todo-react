import React from 'react'

export class Search extends React.Component{
    
    
    render () { return (
        <div className='input_box'>
            <input id = 'input1'></input>
            <button id='search' onClick={()=> this.props.searched(this.props.index, document.getElementById('input1').value)}>搜索</button>
        </div>
    )
    }
}

