import React, {Component} from 'react'
import html2canvas from 'html2canvas'
import { matchPath } from 'react-router'

class RenderButton extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: false
        }
        this.hideModal=this.hideModal.bind(this)
        this.showModal=this.showModal.bind(this)
        this.screenCap=this.screenCap.bind(this)
    }

    showModal(){
        if(!this.state.visible){
            let mb = document.getElementById("render-button-mb")
            mb.style.display = "flex"
            this.setState({
                visible:true
            })
        }
    }

    hideModal(event){
        if(this.state.visible && event.target.id == "render-button-mb"){
            let target = document.querySelector("#rendered-sign")
            if(target){
                target.remove();
            }
            let mb = document.getElementById("render-button-mb")
            mb.style.display = "none"
            this.setState({
                visible:false
            })
        }
    }

    screenCap(){
        let mySign = document.querySelector('.sign')
        if (mySign){
            const show = this.showModal
            html2canvas(mySign,{
                backgroundColor:null,
            }).then(canvas => {
                document.querySelector(".modal-window").appendChild(canvas).setAttribute("id","rendered-sign")
            }).then(show());
        }else{
            alert("No template selected!")
        }
    }

    render(){
        return(
            <>
            <div className="render-button-wrapper">
                <button onClick={this.screenCap}>Render Image</button>
            </div>
            <div className="modal-background" id="render-button-mb" onClick={this.hideModal}>
                <div className="modal-window">
                    <p>Click anywhere to close</p>
                </div>
            </div>
            </>
        )
    }
}

export default RenderButton