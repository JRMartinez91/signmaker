import React, {Component} from 'react'
import Template from '../Template'
import TextEntry from '../TextEntry'

class RoadSign1 extends Template{
    constructor(props){
        super(props)
        this.state={
            name:"RoadSign1",
            text:{
                box1:{
                    text:"Pleasantville",
                    size:"50",
                    color:"#ff0000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign:"center"
                },
                box2:{
                    text:"Exit 12",
                    size:"30",
                    color:"#0000ff",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign:"center"
                }
            },
            default:{
                box1:{
                    text:"Pleasantville",
                    size:"50",
                    color:"#ff0000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign:"center"
                },
                box2:{
                    text:"Exit 12",
                    size:"30",
                    color:"#0000ff",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign:"center"
                }
            }
        }
        //this.default
        //console.log(this.default)
    }

    render(){
        console.log("rendering "+this.state.name)
        //console.log("render default ",this.default)

        return(
            <div className="big-box">
                <div className="sign-container">
                    <div className="sign">
                        <h1>Sign Goes Here</h1>
                        <div className={"signtext-limiter"}>
                            <div className={"signtext"} style={this.parseFontData("box1")}>
                                {this.state.text.box1.text? this.state.text.box1.text : "no Text"}
                            </div>
                        </div>
                        <div className={"signtext-limiter"}>
                            <div className={"signtext"}style={this.parseFontData("box2")}>
                                {this.state.text.box2.text? this.state.text.box2.text: "no Text"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-entry-container">
                    <TextEntry functions={this.getFunctions()}
                    boxKey={"box1"} name="Left Text" current={this.state.text.box1}/>
                    <TextEntry functions={this.getFunctions()}
                    boxKey={"box2"} name="Right Text" current={this.state.text.box2}/>
                </div>
            </div>
        )
    }
}

export default RoadSign1;