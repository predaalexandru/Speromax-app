import React, { useState, useEffect } from 'react'
import {useParams, useHistory } from 'react-router-dom'
import Input from "../layout/Input";
import { useFirestore } from "react-redux-firebase";

/**
* @author
* @function PatientForm
**/

const PatientForm = () => {
  const firestore = useFirestore();

  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("students").doc(id) : null;
  const [patient, setPatient] = useState({
    full_name: "",
    cnp: "",
    adress: "",
    phone: "",
    treatment: "",
    center_treatment: "",
  });

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  const loadStudent = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setPatient(result.data());
      } else {
        console.log("No such patient!");
      }
    } catch (error) {
      console.log("Error getting patient:", error);
    }
  };

  const onInputChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault();

    if(id) {
      alert("Update Patient!");
    } else {
      firestore
      .collection("patients")
      .add({ ...patient, createdAt: firestore.FieldValue.serverTimestamp() });
  }
  history.push("/");
};

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
                  name="full_name"
                  value={patient.full_name}
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
                  name="adress"
                  value={patient.adress}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Enter Patient Phone"
                  name="phone"
                  value={patient.telephone}
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