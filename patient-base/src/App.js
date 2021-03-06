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
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import NotFound from "./components/auth/NotFound";

function App() {
  return (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
      <div className="App">
      <PrivateRoute component={Navbar} />
        <Switch>
          <PrivateRoute exact path="/" component={Patients}/>
          <PrivateRoute exact path="/patient/:id" component={Patient}/>
          <PrivateRoute exact path="/patientForm/:id?" component={PatientForm}/>
          <Route exact path="/login" component={Login}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
