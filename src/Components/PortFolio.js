import React, { useState } from 'react'
import portFolioApi from './Api'
function PortFolio() {
    const [api, setApi] = useState(portFolioApi)
    return (
        <div className="container-fluid portFolioSection" id="portFolio">
            <div className="portFolioSectionContent">
                <h1>My Portfolio</h1>
                <div className="row justify-content-center">
                    {
                        api.map((item)=>{
                            const {id,img,link,tech} = item
                            return(
                                <div data-aos="zoom-in" className="col-10 col-md-5 col-lg-4" key={id}>
                                    <a href={link} target="_blank">
                                        <img src={img} alt="" className="img-fluid"/>
                                        <div className="layer">
                                            <h2>Tech : <br /> 
                                            {tech}</h2>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PortFolio
