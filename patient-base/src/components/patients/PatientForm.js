import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Input from "../layout/Input";

/**
* @author
* @function PatientForm
**/

const PatientForm = () => {
  const {id} = useParams();
  const [patient, setPatient] = useState({
    name: "",
    cnp: "",
    address: "",
    phone: "",
    treatment: "",
    center_treatment: "",
  });

  const onInputChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault();

    if(id) {
      alert("Update Patient!");
    } else {
      alert("Add Patient!");
    }
  }
  return(
    <div className="container">
    <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <form onSubmit={submitForm}>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient Name"
                  name="name"
                  value={patient.name}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient CNP"
                  name="cnp"
                  value={patient.cnp}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient Address"
                  name="address"
                  value={patient.address}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Enter Student Phone"
                  name="phone"
                  value={patient.phone}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-row form-group">
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient Treatment"
                  name="treatment"
                  value={patient.treatment}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient Center Treatment"
                  name="center_treatment"
                  value={patient.center_treatment}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              { id ? "Update Patient" : "Add Patient"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
   )

 }

export default PatientForm