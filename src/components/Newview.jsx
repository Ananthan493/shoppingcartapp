import React, { useState } from 'react'
import Navbar from './Navbar'

const Newview = () => {
    const [prod, changeprod] = useState([])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                prod.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.images} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <p class="card-text">{value.id}</p>
                                                    <p class="card-text">{value.category}</p>
                                                    <p class="card-text">{value.description}</p>
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

export default Newview