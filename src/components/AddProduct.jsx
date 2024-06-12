import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct = () => {
    const [data, setData] = useState(
        {
            "id": "",
            "name": "",
            "img": "",
            "price": "",
            "description": "",
            "category": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8082/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Registered")
                }
                else {
                    alert("Error")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">ID</label>
                            <input type="text" className="input form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Title</label>
                            <input type="text" className="input form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Image</label>
                            <input type="text" className="input form-control" name='img' value={data.img} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Price</label>
                            <input type="text" className="input form-control" name='price'  value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="label form-label">Description</label>
                            <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Category</label>
                            <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                                <option value="mens clothing">mens clothing</option>
                                <option value="ladies wear">ladies wear</option>
                                <option value="bags">bags</option>
                                <option value="watches">watches</option>
                                <option value="bracelets">bracelets</option>
                                <option value="girl fashion">girl fashion</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct