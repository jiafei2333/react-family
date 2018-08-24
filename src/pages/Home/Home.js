import React, {Component} from "react";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    _handClick = () =>{
        this.setState({
            count: ++this.state.count
        })
    }
    render() {
        return (
            <div>
                <p>This is Home~~~hahhaha13314444</p>
                <p>数字：{this.state.count}</p>
                <button onClick={() => {this._handClick()}}>自增</button>
            </div>
        )
    }
}