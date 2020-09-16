import React from 'react'
import {Link} from 'react-router-dom'
import { useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";


/**
* @author
* @function Patients
**/

const Patients = () => {
  const firestore = useFirestore();
  const patients = useSelector((state) => state.firestore.ordered.patients);


  useFirestoreConnect([
    { collection: "patients", orderBy: ["createdAt", "desc"] },
  ]);

  if (!patients) {
    return <h1>Loading.....</h1>;
  }

  const deletePatient = async (id) => {
    try {
      await firestore.collection("patients").doc(id).delete();
    } catch (error) {
      console.error("Error removing patient: ", error);
    }
  };

  return(
    <div className="container">
        <div className="py-4">
            <div className="row">
                {
                    patients.map((patient, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={patient.id}>
                            <div className="card shadow text-center py-4">
                                <p>Profile Image</p>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{patient.full_name}</h5>
                                    <p className="text-muted small">{patient.adress}</p>
                                    <Link to={`/patient/${patient.id}`} className="btn btn-primary btn-profile">
                                        View Profile
                                    </Link>
                            <button className="btn btn-edit" onClick={() => deletePatient(patient.id)}>
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