import React from "react";

export class Hidden extends React.Component {
    hideHandler(e) {
        e.target.style.display = "none";
        e.target.parentNode.getElementsByClassName("show")[0].style.display =
            "block";
        this.props.onClick(false);
    }

    showHandler(e) {
        e.target.style.display = "none";
        e.target.parentNode.getElementsByClassName("hide")[0].style.display =
            "block";
        this.props.onClick(true);
    }

    render() {
        return (
            <div className="show_hide">
                <div className="hide" onClick={this.hideHandler.bind(this)}>
                    隐藏已完成的项目
                </div>
                <div className="show" onClick={this.showHandler.bind(this)}>
                    显示已完成的项目
                </div>
            </div>
        );
    }
}
