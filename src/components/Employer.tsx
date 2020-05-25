import React, { Component } from 'react';
import {observer,inject} from 'mobx-react'
import { Root } from '../mst';
import Employee from './Employee';
interface EmployerProps{
    rootTree?:Root
}
interface EmployerState{
    employeeName:string,
    hoursWorked:string,
    searchString:string
}

@inject('rootTree')
@observer
class Employer extends Component<EmployerProps,EmployerState> {
    constructor(props:EmployerProps){
        super(props);
        this.state = {
            employeeName:"",
            hoursWorked:"",
            searchString:''
        }
    }
    changeEmployeeName = (event:any) => {
        const employeeName = event.target.value;
        this.setState({employeeName})

    }
    changeEmployeeWorkedHours = (event:any) => {
        const hoursWorked = event.target.value;
        this.setState({hoursWorked})

    }
    onSubmit = (event:any)=>{
        event.preventDefault();
        const {employeeName,hoursWorked} = this.state;
        const {rootTree} = this.props;
        if(!rootTree) return null
        rootTree.employer.NewEmployee(employeeName,parseInt(hoursWorked));
        this.setState({employeeName:'',hoursWorked:''})
    }
    render() {
        const {rootTree} = this.props;
        const filteredEmps = rootTree?.employer.filtered_employees(this.state.searchString);
        if(!rootTree) return null
        return (
            <div>
                <h1>{rootTree.employer.name}</h1>  
                <h3>{rootTree.employer.location}</h3>  
                <p>{`Total No.of Employees ${rootTree.employer.numOfEmployees}`}</p>
                <hr/>
                <p>Add Employee</p>
                <form onSubmit={this.onSubmit}>
                    <p>Name:</p>
                    <input type="text" value={this.state.employeeName} onChange={this.changeEmployeeName}/>
                    <p>Hours Worked:</p>
                    <input type="text" value={this.state.hoursWorked} onChange={this.changeEmployeeWorkedHours}/>
                    <br/>
                    <button>Add Employee</button>
                </form>
                <hr/>
                <input type="text" value={this.state.searchString} onChange={(e)=>this.setState({searchString:e.target.value})}/>
                {filteredEmps ? filteredEmps.map((employee)=><Employee key={employee.id} employee={employee}/>):null}
                <hr/>
            </div>
        );
    }
}

export default Employer;