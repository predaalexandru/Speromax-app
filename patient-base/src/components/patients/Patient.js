import React from 'react'
import {Link} from 'react-router-dom'

/**
* @author
* @function Student
**/

const Student = () => {
  return(
    <div className="container">
        <div className="py-4">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="card card-body shadow">
                        <div className="row">
                            <div className="col-md-4">
                                Profile picture
                            </div>
                            <div className="col-md-8">
                                <ul className="list-group">
                                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                                        <h3 className="m-0">Patient NAME</h3>
                                        <Link className="btn btn-primary" to="/patientForm">
                                            Edit Profile
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <p>Full Name: Full Name</p>
                                        <p>CNP: CNP</p>
                                        <p>Address: Address</p>
                                        <p>Telephone: Telephone</p>
                                        <p>Treatment: Treatment</p>
                                        <p>Center Treatment: Center Treatment</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default Student