import React from "react";

export class AddBtn extends React.Component {
    render() {
        return (
            <div className="add_btn_div">
                <button id="add_btn" onClick={this.props.onBtnClick}>
                    +
                </button>
            </div>
        );
    }
}
