import React from "react";

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            editing: false
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.updateInputHandler = this.updateInputHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    clickHandler(e) {
        this.setState({ value: this.props.data.text, editing: true });
        // e.target.style.display = 'none'
        // e.target.parentNode.getElementsByClassName('listInput')[0].style.display = 'block'
    }

    updateInputHandler(e) {
        this.setState({ value: e.target.value });
    }

    keyDownHandler(e) {
        if (e.key === "Enter") {
            this.setState({ value: e.target.value, editing: false });
            // this.props.data.text = this.state.value
            this.props.onUpdate(this.props.index, { text: this.state.value });
            // e.target.style.display = 'none'
            // e.target.parentNode.getElementsByClassName('item_text')[0].style.display = 'block'
        }
    }

    checkedHandler(e) {
        // if(this.props.data.checked){
        //     e.target.parent.style.display = 'none'
        // }
        this.props.onUpdate(this.props.index, {
            checked: !this.props.data.checked
        });
    }

    render() {
        // console.log(this.props.index,this.props.data,this.state.value,this.props.index)
        return (
            <div
                className="item"
                style={{
                    backgroundColor: this.props.searched ? "red" : "#1890ff"
                }}
            >
                <button
                    className="delete"
                    onClick={() => {
                        this.props.onDelete(this.props.index);
                    }}
                >
                    删除
                </button>
                <input
                    type="checkbox"
                    className="selectBtn"
                    checked={this.props.data.checked}
                    onChange={this.checkedHandler.bind(this)}
                />
                <textarea
                    className="listInput"
                    value={this.state.value}
                    onChange={this.updateInputHandler}
                    onKeyDown={this.keyDownHandler}
                    style={{ display: this.state.editing ? "block" : "none" }}
                />
                <p
                    className="item_text"
                    onClick={this.clickHandler}
                    style={{ display: this.state.editing ? "none" : "block" }}
                >
                    {this.props.data.text}
                </p>
            </div>
        );
    }
}
