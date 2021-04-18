import React, {Component} from 'react'
import Template from '../Template'
import TextEntry from '../TextEntry'
import RenderButton from '../RenderButton'

//Neccesary Font Data:
// text:
// size:
// color:
// letterSpacing: "0",
// scalex: "1",
// scaley: "1",
// b:false,
// i:false,
// u:false,
// textAlign: "center",
// fontFamily:

class StreetSign1 extends Template{
    constructor(props){
        super(props)
        this.state={
            name:"WarningSign4",
            text:{
                box1:{
                    text:"SCHOOL",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                },
                box2:{
                    text:"CROSSING",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                },
                box3:{
                    text:"ZONE",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                }
            },
            default:{
                box1:{
                    text:"SCHOOL",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                },
                box2:{
                    text:"CROSSING",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                },
                box3:{
                    text:"ZONE",
                    size:"60",
                    color:"#000000",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Roboto',sans-serif"
                }
            }
        }
    }

    signStyle(){
        return({
            backgroundImage: "url(images/street_sign1.png)",
            backgroundSize:"contain",
            height: "512px",
            width: "527px",
            display: "block",
            margin: "0 auto",
            top:"5px",
            left:"5px",
            position:"relative"
        })
    }
    outerstyle1(){
        return({
            position:"absolute",
            top:"100px",
            left:"0",
            height:"93px",
            width:"inherit",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    outerstyle2(){
        return({
            position:"absolute",
            top:"197px",
            left:"0",
            height:"100px",
            width:"inherit",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    outerstyle3(){
        return({
            position:"absolute",
            top:"303px",
            left:"0",
            height:"100px",
            width:"inherit",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    render(){
        return(
            <div className="big-box">
                <div className="sign-container">
                    <h1>Street Sign 1</h1>
                    <div className="sign" style={this.signStyle()}>
                        <div className={"signtext-limiter"} style={this.outerstyle1()}>
                            <div className={"signtext"} style={this.parseFontData("box1")}>
                                {this.state.text.box1.text? this.state.text.box1.text : "no Text"}
                            </div>
                        </div>
                            <div className={"signtext-limiter"} style={this.outerstyle2()}>
                                <div className={"signtext"}style={this.parseFontData("box2")}>
                                    {this.state.text.box2.text? this.state.text.box2.text: "no Text"}
                                </div>
                            </div>
                        <div className={"signtext-limiter"} style={this.outerstyle3()}>
                            <div className={"signtext"}style={this.parseFontData("box3")}>
                                {this.state.text.box3.text? this.state.text.box3.text: "no Text"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-entry-container">
                    <RenderButton/>
                    <TextEntry functions={this.getFunctions()}
                    boxKey={"box1"} name="Top Text" current={this.state.text.box1}/>
                    <TextEntry functions={this.getFunctions()}
                    boxKey={"box2"} name="Center Text" current={this.state.text.box2}/>
                    <TextEntry functions={this.getFunctions()}
                    boxKey={"box3"} name="Bottom Text" current={this.state.text.box3}/>
                </div>
            </div>
        )
    }
}

export default StreetSign1