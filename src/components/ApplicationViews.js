import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList.js'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          console.log(props)
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
        }} />

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}/>
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
