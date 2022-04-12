import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {getTemperaments} from "../../Actions";

function Form(){

 

const dispatch = useDispatch()
const allTemperaments = useSelector(state => state.temperament)

const [input, setInput] = useState({

    name: "",
    height: `${height_min} - ${height_max}`,
    weight: `${weight_min} - ${weight_max}`,
    life_span: `${life_span_min} - ${life_span_max}`,
    image: "",
    temperament: [],

    height_min: "",
    height_max: "",

    weight_min: "",
    weight_max: "",

    life_span_min: "",
    life_span_max: "",
})

useEffect(() => {
    dispatch(getTemperaments())
})  

    return(
        <div>
            <div>
                <h1>Fill in the fields</h1>
            </div>
            

            <div>
                <form>
                <div>
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={handleSubmit}></input>
                    {formErrors.name && (<p>{formErrors.name}</p>)}
                    <br />

                    <label>Height Minimum: </label>
                    <input type="number" value={input.height_min} name="height_min" onChange={handleSubmit}></input>
                    {formErrors.height_min && (<p>{formErrors.height_min}</p>)}
                    <br />

                    <label>Height Maximum: </label>
                    <input type="number" value={input.height_max} name="height_max" onChange={handleSubmit}></input>
                    {formErrors.height_max && (<p>{formErrors.height_max}</p>)}
                    <br />

                    <label>Weight Minimum: </label>
                    <input type="number" value={input.weight_min} name="weight_min" onChange={handleSubmit}></input>
                    {formErrors.weight_min && (<p>{formErrors.weight_min}</p>)}
                    <br />

                    <label>Weight Maximum: </label>
                    <input type="number" value={input.weight_max} name="weight_max" onChange={handleSubmit}></input>
                    {formErrors.weight_max && (<p>{formErrors.weight_max}</p>)}
                    <br />

                    <label>Life Span Minimum: </label>
                    <input type="number" value={input.life_span_min} name="life_span_min" onChange={handleSubmit}></input>
                    {formErrors.life_span_min && (<p>{formErrors.life_span_min}</p>)}
                    <br />

                    <label>Life Span Maximum: </label>
                    <input type="number" value={input.life_span_max} name="life_span_max" onChange={handleSubmit}></input>
                    {formErrors.life_span_max && (<p>{formErrors.life_span_max}</p>)}
                    <br />

                    <label>Image: </label>
                    <input type="text" value={input.image} name="image" onChange={handleSubmit}></input>
                    <br />
                </div>


                {/* //////////////////////////////DROPDOWN FOR TYPES/////////////////////// */}
                <div>
                    {formErrors.temperament && (<p>{formErrors.temperament}</p>)}

                    <span>Add Temperaments: </span>
                    <select  onChange={e => handleSelectTypes(e)}>
                    {allTemperaments?.map((e, index) => (<option key={index} name="temperament" value={e.name}>{e.name}</option>))}
                    </select>

                    <ul>{input.temperament.map(e => <li key={e}>{e} <div onClick={() => handleDelete(e)}>X</div></li>)}</ul>
                </div>

                <button>CREATE</button>
                </form>
            </div>

        </div>
    )
}

export default Form;