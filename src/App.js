import React from 'react';
import './App.css';
import users from "./users";
import linkedin from "./linkedin.png"
import { Component } from "react";

class App extends Component {
	state = {
  search: '',
		students: true,
		teachers: true,
		campus: 'All'
	}

	handleChange = event => {
    const name = event.target.name;
		const value = event.target.type === 'text' ? event.target.value : event.target.checked;
		this.setState({
			[name]: value
		})

	}

	render() {
    const filteredUsers = users.filter(user => 
      ((this.state.students && user.role === 'student') || (this.state.teachers && user.role === 'teacher')) &&
			(user.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.state.search.toLowerCase()))
		)

		return (
			<>
			<div className="header">
				<h1>IronBook</h1>
			</div>
			<div className="search-box">
				<input type="text" id="search" name="search" placeholder="Search..." onChange={this.handleChange}/>
			</div>
      <div className="checkbox">
				<label htmlFor="students">Students</label><input type="checkbox" id="students" name="students"	 onChange={this.handleChange} defaultChecked></input>
				<label htmlFor="students">Teachers</label><input type="checkbox" id="teachers" name="teachers" onChange={this.handleChange} defaultChecked></input>
			</div>
			<div className="App">
				<table>
					<thead>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Campus</th>
						<th>Role</th>
						<th>Links</th>
					</thead>
					<tbody>
						{filteredUsers.map(user => (
						<tr>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.campus}</td>
							<td>{user.role}</td>
							<td>{user.linkedin? <a href={user.linkedin}><img src={linkedin} alt="LinkedIn" height="15px"></img></a> : ''}</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
			</>
		);
	}
}
  
  export default App;