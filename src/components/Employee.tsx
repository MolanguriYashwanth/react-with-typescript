import React, { Component } from 'react';
import { Employee } from '../mst';
import {inject,observer} from 'mobx-react'
interface EmployeeProps{
    employee:Employee
}
interface EmployeeState{
    employeeName:string,
    hoursWorked:string,
    edit:boolean
}

@inject('rootTree')
@observer
class EmployeeComp extends Component<EmployeeProps,EmployeeState> {
    constructor(props:EmployeeProps){
        super(props);
        this.state={
            employeeName:this.props.employee.name,
            hoursWorked:this.props.employee.hoursWorked.toString(),
            edit:false
        }
        this.changeEmployeeName = this.changeEmployeeName.bind(this);
        this.changeEmployeeWorkedHour = this.changeEmployeeWorkedHour.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeEmployeeName(event:any){
        const employeeName = event.target.value;
        this.setState({employeeName})

    }
    changeEmployeeWorkedHour(event:any){
        const hoursWorked = event.target.value;
        this.setState({hoursWorked})
    }
    toggleEdit(){
            this.setState((prevState)=> ({edit:!prevState.edit}))
    }

    onSubmit(event:any){
        event.preventDefault();
        const {employeeName,hoursWorked} = this.state;
        this.props.employee.editEmployee(employeeName,parseInt(hoursWorked));
        this.toggleEdit()
    }
    render() {
        const {name,hoursWorked} = this.props.employee;
        const {edit} = this.state;
        return (
            <div>
                {
                    edit? 
                    <form onSubmit={this.onSubmit}>
                    <p>Name:</p>
                    <input type="text" value={this.state.employeeName} onChange={this.changeEmployeeName}/>
                    <p>Hours Worked:</p>
                    <input type="text" value={this.state.hoursWorked} onChange={this.changeEmployeeWorkedHour}/>
                    <br/>
                    <button type="submit">Edit Employee</button>
                    <button type="button" onClick={this.toggleEdit}>Cancel</button>

                </form>
                    :    
                   (<React.Fragment>
                       <p>{`Name : ${name}`}</p>
                    <p>{`Hours Worked : ${hoursWorked}`}</p>
                    <button type="button" onClick={this.toggleEdit}>Edit</button>
                       </React.Fragment>)
                }
            
            </div>
        );
    }
}

export default EmployeeComp;