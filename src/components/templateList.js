// Despite the Template Masterlist being deprecated,
// we'll still have to find a way to get the list of available
// templates to the front page.
// hard-coding probably our best bet, then generating links from 
// hard coded list.


const getData =()=>{
    //return a list of objects, each of which represents a different image template
    //we will use standin data at first
    
    //each info object includes
    //  image - link to image file (file path-- or web url if I'm desperate)
    //  display name - (the text that will be displayed under the image in the browser)
    //  link name - (the text that will appear in the URL when that template is in use)

    //

    const sampleObject = {
        image: 'blank',
        displayName: 'Sample Object',
        linkName: 'sample_object'
    }

    const samples = [
        {
            image:"images/street_sign1.png",
            displayName: "Street Sign 1",
            linkName: "streetsign_1",
        },
        {
            image: "images/warning_sign1.png",
            displayName: "Warning Sign 1",
            linkName: "warningsign_1",
        },
        {
            image: "images/warning_sign3.png",
            displayName: "Warning Sign 3",
            linkName: "warningsign_3",
        },
        {
            image: "images/warning_sign4.png",
            displayName: "Warning Sign 4",
            linkName: "warningsign_4",
        },
        {
            image: "images/potion_label1.png",
            displayName: "Potion Label 1",
            linkName: "potionlabel_1",
        },
        {
            image: "images/potion_label2.png",
            displayName: "Potion Label 2",
            linkName: "potionlabel_2",
        },
    ]
    return(
        samples
    )
}

module.exports = {
    getData: getData()
}