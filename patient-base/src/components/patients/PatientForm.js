import React from 'react'

/**
* @author
* @function PatientForm
**/

const PatientForm = () => {
  return(
    <div className="container">
    <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <form>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Patient Name"
                  name="name"
                  value=""
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Enter Patient CNP"
                  name="cnp"
                  value=""
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Patient Address"
                  name="address"
                  value=""
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Telephone"
                  name="telephone"
                  value=""
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Patient Treatment"
                  name="treatment"
                  value=""
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Patient Center Treatment"
                  name="center_treatment"
                  value=""
                  className="form-control"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Add Patient
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