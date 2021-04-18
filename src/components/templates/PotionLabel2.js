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

class PotionLabel2 extends Template{
    constructor(props){
        super(props)
        this.state={
            name:"Potion Label 2",
            text:{
                box1:{
                    text:"Lord Fantastic's Elixir",
                    size:"40",
                    color:"#57280F",
                    letterSpacing:"2.5",
                    scalex:"1",
                    scaley:"1",
                    b:true,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Cinzel', serif"
                },
                box2:{
                    text:"Cures all Sickness, Guaranteed!",
                    size:"50",
                    color:"#57280F",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Alegreya', serif"
                },
                box3:{
                    text:"(May contain every poison known to mankind)",
                    size:"20",
                    color:"#57280F",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:true,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'BioRhyme', serif"
                }
            },
            default:{
                box1:{
                    text:"Lord Fantastic's Elixir",
                    size:"40",
                    color:"#57280F",
                    letterSpacing:"2.5",
                    scalex:"1",
                    scaley:"1",
                    b:true,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Cinzel', serif"
                },
                box2:{
                    text:"Cures all Sickness, Guaranteed!",
                    size:"50",
                    color:"#57280F",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:false,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'Alegreya', serif"
                },
                box3:{
                    text:"(May contain every poison known to mankind)",
                    size:"20",
                    color:"#57280F",
                    letterSpacing:"0",
                    scalex:"1",
                    scaley:"1",
                    b:false,
                    i:true,
                    u:false,
                    textAlign: "center",
                    fontFamily: "'BioRhyme', serif"
                }
            }
        }
    }

    signStyle(){
        return({
            backgroundImage: "url(images/potion_label2.png)",
            backgroundSize:"contain",
            height: "520px",
            width: "762px",
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
            top:"32px",
            left:"0",
            height:"200px",
            width:"inherit",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    outerstyle2(){
        return({
            // position:"absolute",
            // top:"264px",
            // left:"0",
            height:"100px",
            width:"70%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    outerstyle3(){
        return({
            // position:"absolute",
            // top:"376px",
            // left:"0",
            height:"100px",
            width:"70%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        })
    }
    render(){
        return(
            <div className="big-box">
                <div className="sign-container">
                    <h1>Potion Label 1</h1>
                    <div className="sign" style={this.signStyle()}>
                        <div className={"signtext-limiter"} style={this.outerstyle1()}>
                            {/* <div className={"signtext"} style={this.parseFontData("box1")}>
                                {this.state.text.box1.text? this.state.text.box1.text : "no Text"}
                            </div> */}
                            <svg viewBox="0 0 716 196" >
                                <path id="curve" d="M 169 196 C 169 -20 545 -20 545 196" stroke="transparent" fill="transparent"/>
                                <text width="500" style={{fill:this.parseFontData("box1").color}}>
                                    <textPath className={"signtext"}style={this.parseFontData("box1")} alignment-baseline="middle" text-anchor="middle" startOffset="50%" href="#curve">
                                    {this.state.text.box1.text? this.state.text.box1.text: "no Text"}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center",position:"absolute",top:"264px", width:"inherit"}}>
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

export default PotionLabel2