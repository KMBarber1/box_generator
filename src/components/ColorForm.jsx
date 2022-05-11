import React, { useState } from "react";

const ColorForm = () => {
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')

    const [newBox, setNewBox] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(color !== '' && size !== ''){
        setNewBox([...newBox, {color : color, size : size + 'px' }])
        console.log(newBox)
        setColor('')
        setSize('')
        }
    }


    return (
        <div>
            <form className="col-5" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Choose a color:</label>
                    <input value={color} className="form-control" type="text" name="color"  onChange={(e) => {setColor(e.target.value)}} />
                </div>
                 {/* comment out below div for Normal assignment:  */}
                <div className="my-5">
                    <label className="form-label">Enter a size:</label>
                    <input value={size} className="form-control" type="text" name="size" onChange={(e) => { setSize(e.target.value) }}/>
                </div>
                <input className="btn btn-outline-secondary" type="submit"/>
            </form>
            <br/>
            <div className="d-flex justify-content-around">
                {
                newBox.map((box, i) => {
                    // Normal:
                    // let style = {backgroundColor : box.color, width : "200px" , height : "100px"}
                    // Ninja Bonus:
                    let style = {backgroundColor : box.color, width : box.size, height : box.size} 
                    return(
                        <div key={i} style={style}></div>
                    )
                })}

            </div>
        </div>

    )

}
export default ColorForm