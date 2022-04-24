import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {getTemperaments, createDog} from "../../Actions";
import "../Form/Form.css"

function formValidation(input){
    let formErrors = {};

    if (!input.name) {
        formErrors.name = "Name is required";
    }

    if (input.height_min <= 0) {
        formErrors.height_min = "Minimum height must be greater than 0";
    }
    if (input.height_max > 200) {
        formErrors.height_max = "Maximum height cannot exceed 200 cm";
    }

    if (input.weight_min <= 0) {
        formErrors.weight_min = "Minimum weight must be greater than 0";
    }
    if (input.weight_max > 150) {
        formErrors.weight_max = "Maximum weight cannot exceed 150 kgs";
    }
    if (input.life_span_min <= 0) {
        formErrors.life_span_min = "Life span must be greater than 0";
    }
    if (input.life_span_max > 50) {
        formErrors.life_span_max = "Life span cannot exceed 50 years";
    }
    if (!input.temperament || input.temperament.length === 0) {
        formErrors.temperament = "Please include at least one temperament";
    }

    return formErrors;
}


function Form(){

 

const dispatch = useDispatch()
const allTemperaments = useSelector(state => state.temperaments)

const [formErrors, setFormErrors] = useState({})
const [input, setInput] = useState({

    name: "",
    image: "",
    temperament: [],

    height_min: 0,
    height_max: 0,

    weight_min: 0,
    weight_max: 0,

    life_span_min: 0,
    life_span_max: 0,
})

useEffect(() => {
    dispatch(getTemperaments())
}, [])  

function handleSubmit(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setFormErrors(formValidation({
        ...input,
        [e.target.name]: e.target.value
    }))
}

function handleSelectTemperaments(e){
    e.preventDefault()
    if(!input.temperament.includes(e.target.value)){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
        setFormErrors(formValidation({
            ...input,
            temperament: e.target.value
        }))
    }
}

function handleDelete(e){
    setInput({
        ...input,
        temperament: input.temperament.filter(v => v !== e)
    })
}

function submit(e){
    e.preventDefault();
        if(Object.values(formErrors).length > 0 || input.name === "" || input.temperament.length === 0){
            alert("Please fill in all the required fields")
        } else{
            let newDoggo = {
                name: input.name,
                height: `${input.height_min} - ${input.height_max}`,
                weight: `${input.weight_min} - ${input.weight_max}`,
                life_span: `${input.life_span_min} - ${input.life_span_max}`,
                image: input.image,
                temperament: input.temperament,
              }
            dispatch(createDog(newDoggo))
            alert("Doggy created successfully!")
        }
}


    return(
        <div className="form">
            <div className="form-title-container">
                <h1 className="form-title">Fill in the fields</h1>
            </div>
            

            <div className="inputs_and_dropdowns">
                <form onSubmit={submit}>
                <div className="inputs">
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={handleSubmit}></input>
                    {formErrors.name && (<p>{formErrors.name}</p>)}
                    <br />


                    <div className="min_max_inputs">
                        <label>Height Minimum: </label>
                        <input type="number" value={input.height_min} name="height_min" onChange={handleSubmit}></input>
                        {formErrors.height_min && (<p>{formErrors.height_min}</p>)}
                        <br />

                        <label>Height Maximum: </label>
                        <input type="number" value={input.height_max} name="height_max" onChange={handleSubmit}></input>
                        {formErrors.height_max && (<p>{formErrors.height_max}</p>)}
                        <br />
                    </div>


                    <div className="min_max_inputs">
                        <label>Weight Minimum: </label>
                        <input type="number" value={input.weight_min} name="weight_min" onChange={handleSubmit}></input>
                        {formErrors.weight_min && (<p>{formErrors.weight_min}</p>)}
                        <br />

                        <label>Weight Maximum: </label>
                        <input type="number" value={input.weight_max} name="weight_max" onChange={handleSubmit}></input>
                        {formErrors.weight_max && (<p>{formErrors.weight_max}</p>)}
                        <br />
                    </div>


                    <div className="min_max_inputs">
                        <label>Life Span Minimum: </label>
                        <input type="number" value={input.life_span_min} name="life_span_min" onChange={handleSubmit}></input>
                        {formErrors.life_span_min && (<p>{formErrors.life_span_min}</p>)}
                        <br />

                        <label>Life Span Maximum: </label>
                        <input type="number" value={input.life_span_max} name="life_span_max" onChange={handleSubmit}></input>
                        {formErrors.life_span_max && (<p>{formErrors.life_span_max}</p>)}
                        <br />
                    </div>

                    <label>Image: </label>
                    <input type="file" value={input.image} name="image" onChange={handleSubmit}></input>
                    <br />
                </div>


                {/* //////////////////////////////DROPDOWN FOR TYPES/////////////////////// */}
                <div>
                    {formErrors.temperament && (<p>{formErrors.temperament}</p>)}
            
                    <span>Add Temperaments: </span>
                    <select  onChange={e => handleSelectTemperaments(e)}>
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