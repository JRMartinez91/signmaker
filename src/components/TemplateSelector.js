import React, {Component} from 'react'
import '../styles/templateSelector.css'
const templateList = require('./templateList')

class TemplateSelector extends Component{
    constructor(props){
        super(props)
        this.state={
            //state goes here
        }
        //localize "this" in functions
    }

    //DEV NOTES
    /* the template selector sticks to the left side of the screen and
    has its own scrollbar. each template icon functions as a link that
    sends react-router to the corresponding page. 

    probably best to have these links generated procedurally from an
    overall list of templates-- so the same list of url destinations
    will be generated both as links within the template icons AND
    as router destinations in App.js
    */

    //DEV NOTES cont.
    // add a button that lets this window expand and collapse.

    //takes data from templatelist.js and parses it into a series of images and links
    parseTemplateList(){
        const myList = templateList.getData;
        let parsedList = []
        for(const item of myList){
            parsedList.push(
                <div key={item.linkName}className="template-icon-container">
                    <a href={"/"+item.linkName}>
                        <img src={item.image} alt={item.linkName}/>
                        <p>{item.displayName}</p>
                    </a>
                </div>
            )
        }
        return(parsedList);
    }
    render(){
        return(
            <div className="template-selector-wrapper">
                <h3>Templates</h3>
                <div className="template-scrolling-window">
                    {/* series of template images go here. */}
                    {this.parseTemplateList()}
                </div>
            </div>
        )
    }
}

export default TemplateSelector