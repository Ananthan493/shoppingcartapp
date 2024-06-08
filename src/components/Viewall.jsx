import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changedata] = useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card g-3">
                                                <img src={value.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="card-text">{value.id}</p>
                                                    <p class="card-text">{value.title}</p>
                                                    <p class="card-text">{value.price}</p>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.category}</p>
                                                    <p class="card-text">{value.rating.rate}</p>
                                                    <a href="#" class="btn btn-primary">Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Viewall