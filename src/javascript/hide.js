import React from "react";


// export class Hidden extends React.Component{
export function Hidden (){
    // render(){
    return (
        <div className="show_hide">
        <div className="hide">隐藏已完成的项目</div>
        <div className="show">显示已完成的项目</div>
        </div>
    )
}