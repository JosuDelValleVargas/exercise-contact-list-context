import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const [fullName, setFullName] = useState("");
	const [adress, setAdress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" 
						onChange={(e)=>setFullName(e.target.value)}
						value={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" 
						onChange={(e)=>setEmail(e.target.value)}
						value={email}						
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone"
						onChange={(e)=>setPhone(e.target.value)}
						value={phone}
						 />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address"
						onChange={(e)=> setAdress(e.target.value)}
						value={adress}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
