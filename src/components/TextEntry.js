import React, {Component} from 'react'
import '../styles/textEntry.css'
//This class represents the Text entry Boxes that will appear alongside
//every sign template. The key thing they need to do is send data upwards
//to the Template component that they are used within.

//each one comes with a series of buttons that control the font of the text
//entered into them

//DEV NOTES:
// add a way for 'default font stats' to be passed to each textbox as an object

//received props:
//      name - display name of this box
//      boxKey - the name in the parent template's state that holds this box's stats
//      default - object containg the default values for the font widgets
//      current - object containing the current values for the font widgets
class TextEntry extends Component{
    constructor(props){
        super(props)
        this.state={
            textbox:""
        }
    }

    //increment and decrement represent a
    //system like in photoshop where small numbers are incremented slowly
    //but larger numbers get larger faster-- like pressing 'plus' will
    //raise a number like 6 7 8 9 10 20 30... 100 150 200 ... 300 400 500

    //this is a temporary version that always goes by tens
    // DEV NOTES:
    // it looks like these are going to have to be handled through lifting state.
    // see Template.js for the real versions.

    //left right or center text alignment
    alignWidget=(boxKey,handleFont,alignment)=>{
        const rightID = boxKey+"_right"
        const centerID = boxKey+"_center"
        const leftID = boxKey+"_left"
        const groupName = boxKey+"_alignment"
        return(
            <div className="font-widget">
                <input type="radio" id={leftID} name={groupName} value="left" onChange={handleFont}/>
                <label htmlFor={leftID}>Left</label>
                <input type="radio" id={centerID} name={groupName} value="center" onChange={handleFont}/>
                <label htmlFor={centerID}>Center</label>
                <input type="radio" id={rightID} name={groupName} value="right" onChange={handleFont}/>
                <label htmlFor={rightID}>Right</label>
            </div>
        )
    }

    //font selection
    fontSelectWidget=(boxKey,handleFont,font)=>{
        <div className="font-widget">
            {/* drop down menu with a list of specific fonts */}
        </div>
    }

    //bold italic underline
    biuWidget=(boxKey,handleFont)=>{
        return(
        <div className="font-widget">
            <label htmlFor={boxKey+"_b"}>Bold</label>
            <input type="checkbox" id={boxKey+"_b"} onChange={handleFont}/>
            <label htmlFor={boxKey+"_i"}>Italic</label>
            <input type="checkbox" id={boxKey+"_i"} onChange={handleFont}/>
            <label htmlFor={boxKey+"_u"}>Underline</label>
            <input type="checkbox" id={boxKey+"_u"} onChange={handleFont}/>
        </div>
        )
    }

    fontSizeWidget=(boxKey,handleFont,size)=>{
        let ID = boxKey+"_size"
        return(
            <div className="font-widget">
                <label htmlFor="size">Size</label>
                <input type="text" id={ID} name="size" onChange={handleFont} value={size}/>
                <button onClick={()=>this.props.functions.increment(ID)}>+</button>
                <button onClick={()=>this.props.functions.decrement(ID)}>-</button>
                <button onClick={()=>this.props.functions.reset(ID)}>Reset</button>
            </div>
        )
    }

    scaleWidget=(boxKey,handleFont,scalex,scaley)=>{
        let IDx = boxKey+"_scalex"
        let IDy = boxKey+"_scaley"
        return(
            <>
            <div className="font-widget">
                <label htmlFor="scalex">X Scale</label>
                <input type="text" id={IDx} name="scalex" onChange={handleFont} value={scalex}/>
                <button onClick={()=>this.props.functions.increment(IDx)}>+</button>
                <button onClick={()=>this.props.functions.decrement(IDx)}>-</button>
                <button onClick={()=>this.props.functions.reset(IDx)}>Reset</button>

            </div>
            <div className="font-widget">
                <label htmlFor="scaley">Y Scale</label>
                <input type="text" id={IDy} name="scaley" onChange={handleFont} value={scaley}/>
                <button onClick={()=>this.props.functions.increment(IDy)}>+</button>
                <button onClick={()=>this.props.functions.decrement(IDy)}>-</button>
                <button onClick={()=>this.props.functions.reset(IDy)}>Reset</button>
            </div>
            </>
        )
    }

    colorWidget=(boxKey,handleFont,color)=>{
        //includes not only color input, but reset button and list of
        //reccommended colors, displayed as radio buttons, passed from template
        let ID = boxKey+"_color"
        return(
            <div className="font-widget">
                <label htmlFor="color">Color</label>
                <input type="color" id={boxKey+"_color"} name="color" onChange={handleFont} value={color}/> 
                <button onClick={()=>this.props.functions.reset(ID)}>Reset</button>
            </div>
        )
    }

    fontFamilyWidget=(boxKey,handleFont,fontFamily)=>{
        let ID = boxKey+"_fontFamily"
        return(
            <div className="font-widget">
                <label htmlFor="fontFamily">Font:</label>
                <select name="fontFamily" id={ID} onChange={handleFont} value={fontFamily} style={{fontSize:"1.2em"}}>
                    <option value="'Alegreya', serif" style={{fontFamily:"'Alegreya', serif"}}>Alegreya</option>
                    <option value="'BioRhyme', serif" style={{fontFamily:"'BioRhyme', serif"}}>BioRhyme</option>
                    <option value="'Cardo', serif" style={{fontFamily:"'Cardo', serif"}}>Cardo</option>
                    <option value="'Roboto', sans-serif" style={{fontFamily:"'Roboto', sans-serif"}}>Roboto</option>
                    <option value="'Amatic SC', cursive" style={{fontFamily:"'Amatic SC', cursive"}}>Amatic SC</option>
                    <option value="'Bangers', cursive" style={{fontFamily:"'Bangers', cursive"}}>Bangers</option>
                    <option value="'Cinzel', serif" style={{fontFamily:"'Cinzel', serif"}}>Cinzel</option>
                    <option value="'Dancing Script', cursive" style={{fontFamily:"'Dancing Script', cursive"}}>Dancing Script</option>
                </select>
                <button onClick={()=>this.props.functions.reset(ID)}>Reset</button>
            </div>
        )
    }

    charSpacingWidget=(boxKey,handleFont,letterSpacing)=>{
        let ID = boxKey+"_letterSpacing"
        return(
            <div className="font-widget">
                <label htmlFor="letterSpacing">Character Spacing</label>
                <input type="text" id={ID} name="letterSpacing" onChange={handleFont} value={letterSpacing}/>
                <button onClick={()=>this.props.functions.increment(ID)}>+</button>
                <button onClick={()=>this.props.functions.decrement(ID)}>-</button>
                <button onClick={()=>this.props.functions.reset(ID)}>Reset</button>
            </div>
        )
    }

    render(){
        const boxKey = this.props.boxKey
        const name = this.props.name? this.props.name : boxKey
        //const handleTextEntry = this.props.handleTextEntry
        //const handleFont = this.props.handleFont
        //const increment = this.props.increment
        const {handleFont,handleTextEntry} = this.props.functions
        let {text, size, color, letterSpacing, scalex, scaley, fontFamily} = this.props.current

        return(
            <div className="text-entry-container">
                <form>
                    <label htmlFor="textbox">{name}</label>
                    <input className="manual-text-input" type="text" id={boxKey} name="textbox" onChange={handleTextEntry} value={text}/>
                </form>
                <div className="button-box"> 
                    {/* <label htmlFor="size">Size</label>
                    <input type="text" id={boxKey+"_size"} name="size" onChange={handleFont} value={size}/> */}
                    {this.fontSizeWidget(boxKey,handleFont,size)}
                    {this.charSpacingWidget(boxKey,handleFont,letterSpacing)}
                    {this.scaleWidget(boxKey,handleFont,scalex,scaley)}
                    {this.biuWidget(boxKey,handleFont)}
                    {/* <label htmlFor="color">Color</label>
                    <input type="color" id={boxKey+"_color"} name="color" onChange={handleFont} value={color}/> */}
                    {this.colorWidget(boxKey,handleFont,color)}
                    {this.alignWidget(boxKey,handleFont)}
                    {this.fontFamilyWidget(boxKey,handleFont,fontFamily)}
                </div>
            </div>
        )
    }
}

export default TextEntry