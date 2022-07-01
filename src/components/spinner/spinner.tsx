import React from 'react'
const spinner = require("./spinner.gif");

const image = {
    "marginBottom": "30px",
    "width": "60px"
}
function Spinner() {
    return (
        <div className='text-center'>
            <img src={String(spinner)} alt="" style={image} />
        </div>
    )
}

export default Spinner
