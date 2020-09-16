import React from 'react';
import './styles/App.scss';
import Navbar from './components/layout/Navbar';
import Patients from './components/patients/Patients';
import Patient from './components/patients/Patient';
import PatientForm from './components/patients/PatientForm';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

function App() {
  return (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Patients}/>
          <Route exact path="/patient/:id" component={Patient}/>
          <Route exact path="/patientForm/:id?" component={PatientForm}/>
        </Switch>
      </div>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
