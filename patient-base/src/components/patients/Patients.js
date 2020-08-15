import React from 'react'
import {Link} from 'react-router-dom'


/**
* @author
* @function Patients
**/

const Patients = () => {
  return(
    <div className="container">
        <div className="py-4">
            <div className="row">
                {
                    new Array(12).fill("").map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="card shadow text-center py-4">
                                <p>Profile Image</p>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Patient Name</h5>
                                    <p className="text-muted small">Patient Location</p>
                                    <Link to={`/patient/${index}`} className="btn btn-primary btn-profile">
                                        View Profile
                                    </Link>
                            <button className="btn btn-edit">
                              <span className="material-icons">delete_outline</span>
                            </button>
                          </div>
                        </div>
                      </div>    
                    ))
                }
            </div>
        </div>
    </div>
   )
 }

export default Patients