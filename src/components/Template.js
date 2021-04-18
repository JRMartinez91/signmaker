import React, {Component} from 'react'
import { Redirect } from 'react-router';
import '../styles/template.css'

//this is the superclass from which every individual template will be extended
//we're doing it this way because in the long run it will be less clunky than having
//all the individual template's info passed as parameters and stored in a masterlist

//instead of relying on a singular masterlist, we'll put each template's data in
//its own nice little box.

//DEV NOTES:
//  make sure there's a CSS thing in place that controls whether the sign appears
//  above the textboxes or side by side

class Template extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"template superclass",
            text:{
                //each text entry form is recorded as an object, whose key
                //is a number manually assigned to its corresponding TextEntry
            },
            default:"blank"
        }
        //save default state
        //this.default = "blank"
        //console.log("default constructor")
        //the data in default is only used when resetting values
        //in the font widgets, and can never be changed by the user
        this.handleTextEntry = this.handleTextEntry.bind(this);
        this.handleFont = this.handleFont.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        
    }

    // componentDidMount(){
    //     console.log("mounting" + this.state.name)
    //     this.default = this.state.text
    //     console.log("updated default")
    //     console.log(this.default)
    // }

    getFunctions=()=>{
        const functions = {
            "handleTextEntry" :this.handleTextEntry,
            "handleFont" : this.handleFont,
            "increment" : this.increment,
            "decrement" : this.decrement,
            "reset": this.reset
        }
        return functions
    }

    
    //what does the Template Superclass provide?
    //functions that manage the data that the individual templates provide.

    //Lifting state from TextEntry components to Template component
    //"boxKey" is a unique ID that will be assigned to each TextEntry component
    //in the render() of individual templates
    // when each TextEntry comp is added, its boxkey will be hard-coded
    // via passing it as a parameter when it receives handleTextEntry as a prop

    //get text from TextEntry components
    handleTextEntry=(event)=>{
        //must retrieve both raw Text and Font Data from TextEntry Component
        //start with raw text
        let myText = this.state.text;
        //data from TextEntry
        myText[event.target.id]["text"]=event.target.value
        //console.log("handleTextEntry called")
        //console.log(myText)
        
        this.setState(
            {text: myText}
        )
    }

    //get font stats from TextEntry components
    //each button in the font widget has a unique ID
    //font info is recorded in state as an object that uses
    //those IDs as keys
    handleFont=(event)=>{
        //parse id
        //console.log("handleFont called",event.target.id)
        let temp = event.target.id.split("_")
        let statName = temp[1]
        let boxName = temp[0]

        let myText = this.state.text

        if(event.target.type==="checkbox"){
            myText[boxName][statName] = event.target.checked
        }else if(event.target.type==="radio"){
            //this only works as long as the "text align" stat is our
            //only radio button
            myText[boxName]["textAlign"] = event.target.value
        }else if(event.target.type==="select"){
            myText[boxName][statName] = event.target.value
        }else{
            myText[boxName][statName] = event.target.value
        }

        this.setState({
            text: myText,
            //default: this.state.default
        })
    }

    //the versions of increment/decrement that use lifted state
    //receive the ID from TextEntry but get the value by reading
    //the Template's state-- like a version of handleFont that
    //bypasses the use of 'event'
    increment=(id)=>{
        //retrieve data
        let temp = id.split("_")
        let statName = temp[1]
        let boxName = temp[0]

        let myText = this.state.text
        let n = parseFloat(myText[boxName][statName])
        myText[boxName][statName] = this.inc(n)
        this.setState({
            text: myText
        })
    }

    decrement=(id)=>{
        //retrieve data
        let temp = id.split("_")
        let statName = temp[1]
        let boxName = temp[0]

        let myText = this.state.text
        let n = parseFloat(myText[boxName][statName])
        myText[boxName][statName] = this.dec(n)
        this.setState({
            text: myText
        })
    }

    inc=(n)=>{
        //console.log("n:",n)
        const scale=[0,0.1,0.2,0.3,0.4,0.5,0.75,1,1.5,2,2.5,3,
        4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,60,70,80,90,100,
        125,175,200,225,250,275,300];

        //if n is greater than any number on the scale list,
        //OR equal to the highest number, change nothing
        if(n >= scale[scale.length-1]){
            //console.log("greater than max")
            return n
        }else{
            //if the current value of n isn't on the scale list,
            //find the next highest one and return that.
            if(!scale.includes(n)){
                for(let i = 0; i<scale.length; i++){
                    if(scale[i]>n){
                        //console.log("not in list, found next highest")
                        return scale[i]
                    }
                }
                //this point should never be reached, but just in case,
                //return the last number in scale list
                //console.log("returning max of list")
                return scale[scale.length-1]
            } else {
                //if the current value of n IS in the scale list, return
                //the next highest number
               //console.log("n on list,",scale.indexOf(n),"returning next:",scale[scale.indexOf(n)+1])
                return scale[scale.indexOf(n)+1]
            }
        }
    }

    dec=(n)=>{
        const scale=[0,0.1,0.2,0.3,0.4,0.5,0.75,1,1.5,2,2.5,3,
        4,5,6,7,8,9,10,15,20,25,30,35,40,45,50,60,70,80,90,100,
        125,175,200,225,250,275,300];

        //if n is less than any number on the scale list,
        //OR equal to the lowest number, change nothing
        if(n <= scale[0]){
            return n
        }else{
            //if the current value of n isn't on the scale list,
            //find the next lowest one and return that.
            if(!scale.includes(n)){
                for(let i = scale.length-1; i<=0; i--){
                    if(scale[i]<n){
                        return scale[i]
                    }
                }
                //this point should never be reached, but just in case,
                //return the last number in scale list
                return scale[0]
            } else {
                //if the current value of n IS in the scale list, return
                //the next highest number
                return scale[scale.indexOf(n)-1]
            }
        }
    }

    reset=(id)=>{
        //debug
        console.log("reset called by" + id)
        //retrieve data
        let temp = id.split("_")
        let statName = temp[1]
        let boxName = temp[0]

        let myText = this.state.text
        myText[boxName][statName] = this.state.default[boxName][statName]
        this.setState({
            text: myText
        })
        // if(document.getElementById(id).type==="select"){
        //     document.getElementById(id).value = this.state.default[boxName].fontFamily
        // }
    }

    //get font data from state and parse it into working CSS code
    //id parameter correcsponds to 'boxkey'
    //DEV NOTES: probably best to set manual limits on maximum sizes
    parseFontData=(id)=>{
        //every specific stat must be manually accounted for
        if(this.state.text[id]){
            let myData = this.state.text[id]
           // console.log(myData)
            let styleObj = {
                fontSize: parseInt(myData.size,10),
                color: myData.color,
                letterSpacing: myData.letterSpacing,
                transform: `scaleX(${myData.scalex}) scaleY(${myData.scaley})`,
                lineHeight:`${myData.scaley}em`,
                fontStyle: myData.i ? "italic" : "normal",
                fontWeight: myData.b ? "bold" : "normal",
                textDecoration: myData.u ? "underline" : "none",
                textAlign: myData.textAlign,
                fontFamily: myData.fontFamily
            }
           // console.log(styleObj)
            return styleObj;
        } else {
            console.log("error retrieving font data from state")
            return {
                textDecoration: "line-through",
                color: "red"
            }
        }

    }

    //DEV NOTES:
    // refer to  https://reactjs.org/docs/lifting-state-up.html for guidance
    // in their example, all the data the child component DISPLAYS is ALSO
    // received from parent component as props, not just its update function
    // could these be split???

    render(){
        return(
            <h2>No Identity assigned to this Template</h2>
        )
    }
}

export default Template;