import Login from './auth/Login'
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList.js'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import LocationWithEmployees from './location/LocationWithEmployees'
import LocationsEditForm from './location/LocationsEditForm'
import OwnerEditForm from './owner/OwnerEditForm'

class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  // isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props}/>
        }} />
        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList
              {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
        }} />
       <Route path="/owners/:ownerId(\d+)/edit" render={props => {
         return <OwnerEditForm
         {...props} />
       }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm
            {...props}
          />
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.props.user) {
            return <LocationList
              {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationsEditForm
          {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/details" render={(props) => {
          return < LocationWithEmployees {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm
            {...props}
          />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
              return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm 
          {...props}
          />
        }} />
          <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
            return <EmployeeWithAnimals {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={(props) => {
          return <EmployeeEditForm {...props} 
          />
         }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
