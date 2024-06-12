import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Newdynamic = () => {
    const [dyn,changeDyn]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8082/view").then(
            (response)=>{
                console.log(response.data)
                changeDyn(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                dyn.map(
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
            </div>
    </div>
  )
}

export default Newdynamic