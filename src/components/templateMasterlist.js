/*

DEPRECATED

each template will have its own class, which extends a generic
Template Superclass




Object representing the sign's stats
-Name
-Link
-Image
    -default colors
    -default images
    -alternate images (decay states)
-Text Fields
    -Number of fields
    -Default stats of each field
        -Color
        -Font
        -Size
        -Character Width/Height
        -Character Spacing
        -Word Spacing
        -Justification
-Default Resolution?
*/

///DEV NOTES:
// at the point the 'templateList', which contains just the names, links, and icons,
// and the 'templateMasterlist', which contains ALL data on the template, must be
// manually synced. this is not good. find a way to generate the icon list FROM
// the masterlist

const masterlist = [
    {
        name: "Road Sign Single",
        link: "roadsign_1",
        image: "",
        default_color1:"000000",
        default_color2:"000000",
        alt_images:{

        },
        text_field_count:4,
        text_fields:[
            {
                name:"Left Top",
                color:"",
                font:"",
                size:"",
                c_width:"100",
                c_height:"100",
                c_spacing:"",
                w_spacing:"",
                justify:"center"
            },
            {
                name:"Right Top",
                color:"",
                font:"",
                size:"",
                c_width:"100",
                c_height:"100",
                c_spacing:"",
                w_spacing:"",
                justify:"center"
            },
            {
                name:"Left Bottom",
                color:"",
                font:"",
                size:"",
                c_width:"100",
                c_height:"100",
                c_spacing:"",
                w_spacing:"",
                justify:"center"
            },{
                name:"Right Bottom",
                color:"",
                font:"",
                size:"",
                c_width:"100",
                c_height:"100",
                c_spacing:"",
                w_spacing:"",
                justify:"center"
            }
        ]
    }
]

const getData=()=>{
    return masterlist;
}

module.exports={
    getData: getData()
}