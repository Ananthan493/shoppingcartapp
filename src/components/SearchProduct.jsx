import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchProduct = () => {
    const[data,changeData] = useState(
        {
            "id":""
        }
    )
    const[result,changeResult]=useState([])
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8082/search",data).then(
            (response)=>{
                changeResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        ).finally()
       
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">ID</label>
                    <input type="text" className="input form-control" name='id' value={data.id} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-secondary" onClick={readValue}>Search</button>
                </div>
            </div>
            <div className="row g-3">
                            {
                                result.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.img} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <p class="card-text">{value.id}</p>
                                                    <p class="card-text">{value.name}</p>
                                                    <p class="card-text">{value.price}</p>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.category}</p>
                                                </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                            
                        </div>
        </div>
    </div>
  )
}

export default SearchProduct