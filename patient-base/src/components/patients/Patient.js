import React, { useState, useEffect }  from 'react'
import {Link, useParams} from 'react-router-dom'
import { useFirestore } from "react-redux-firebase";
import Loading from "../layout/Loading";

/**
* @author
* @function Student
**/

const Student = () => {
    const firestore = useFirestore();
    const {id} = useParams();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
      loadPatient();
      }, []);

      const loadPatient = async () => {
        try {
          const docRef = firestore.collection("patients").doc(id);
          const result = await docRef.get();
          if (result.exists) {
            setPatient(result.data());
          } else {
            console.log("No such Patient!");
          }
        } catch (error) {
          console.log("Error getting patient:", error);
        }
      };
      if (patient == null) {     
        return <Loading />;
      }

  return(
    <div className="container">
        <div className="py-4">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="card card-body shadow">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={ require("../../assets/admin.svg")} className="rounded-circle" height="50px" alt="admin" />
                            </div>
                            <div className="col-md-8">
                                <ul className="list-group">
                                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                                        <h3 className="m-0">{patient.full_name}</h3>
                                        <Link className="btn btn-primary" to={`/patientForm/${id}`}>
                                            Edit Profile
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <p><b>Full Name:</b> {patient.full_name}</p>
                                        <p><b>CNP:</b> {patient.cnp}</p>
                                        <p><b>Address:</b> {patient.adress}</p>
                                        <p><b>Telephone:</b> {patient.phone}</p>
                                        <p><b>Treatment:</b> {patient.treatment}</p>
                                        <p><b>Center Treatment:</b> {patient.center_treatment}</p>
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