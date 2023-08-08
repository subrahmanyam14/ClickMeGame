import { Button } from 'bootstrap';
import React, { Component } from 'react'
import './clickgame.css'

export class ClickMeGame extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            count:0,
            message:''
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time===0){
            this.setState({
                message:"Enough! I can't be beaten by you"
            })
            
        }
        else{
          this.setState({
            time:this.state.time-1,
            
        })
        }
        
    }
    handleClick(){
        if(this.state.time!==0){
        this.setState({
               count:this.state.count+1
            })
        }
    }
    handleClick1(){
        this.setState({
            time:10,
            count:0,
            message:''
        })
    }
        
  render() {

    return (
      <div >
        <h3>Click the picture as many times as you can in {this.state.time} wackey seconds!</h3>
        <img onClick={this.handleClick.bind(this)} src="https://freepngimg.com/thumb/categories/2293.png" />
        <h2>Score:{this.state.count}</h2><br/>
        <h3>{this.state.message}</h3><br/>
        <button onClick={this.handleClick1.bind(this)}>Restart</button>
        

      </div>
    )
  }
}

export default ClickMeGame