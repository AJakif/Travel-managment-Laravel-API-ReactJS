import React, { useEffect, useState } from "react";
import axios from "axios"

const Empshow = () => {

	const [emp, setEmp] = useState([]);
	useEffect(() => {
		loadEmp();
	}, []);
	const loadEmp = async () => {
		await axios
			.get(`http://127.0.0.1:8000/api/Employee/view`)
			.then(response => setEmp(response.data))
			.catch(error => {
				return error;
			});
	};

	return (
		<>
			<div className="card shadow mb-4">
				<section className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1>Employee Information</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item">
										<a href="/">Dashboard</a>
									</li>
									<li className="breadcrumb-item">
										<a href>Employee</a>
									</li>
									<li className="breadcrumb-item active">Employee List</li>
								</ol>
							</div>
						</div>
					</div>
					{/* /.container-fluid */}
				</section>
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-header py-3">
										<a
											href="/employee/create"
											className="btn btn-primary btn-sm float-right"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Add User"
										>
											<i className="fas fa-plus" /> Add Employee
										</a>
									</div>
									<div className="card-body">
										<table
											id="example2"
											className="table table-bordered table-hover table-striped"
										>
											<thead>
												<tr>
													<th>S.N.</th>
													<th>Full Name</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th>Join Date</th>
													<th>Salary</th>
													<th>Role</th>
													<th>Action</th>
												</tr>
											</thead>
											<tfoot>
												<tr>
													<th>S.N.</th>
													<th>Full Name</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th>Join Date</th>
													<th>Salary</th>
													<th>Role</th>
													<th>Action</th>
												</tr>
											</tfoot>
											<tbody>
												{emp.map((item,i)=>{
													return(
														<tr className="{item.id}">
													<td>
														{i+1}
													</td>
													<td>
														{item.fullname}
													</td>
													<td>
														{item.phone}
													</td>
													<td>
														{item.address}
													</td>
													<td>
														{item.join_date}
													</td>
													<td>
														{item.salary}
													</td>
													<td>
														{item.type}
													</td>
													<td>
														<a
															href="/employee/edit"
															className="btn btn-primary btn-sm float-left mr-1"
															style={{
																height: 30,
																width: 30,
																borderRadius: "50%",
															}}
															data-toggle="tooltip"
															title="edit"
															data-placement="bottom"
														>
															<i className="fas fa-edit" />
														</a>
														<button
																className="btn btn-danger btn-sm dltBtn"
																data-id="{item.id}"
																style={{
																	height: 30,
																	width: 30,
																	borderRadius: "50%",
																}}
																data-toggle="tooltip"
																data-placement="bottom"
																title="Delete"
															>
																<i className="fas fa-trash-alt" />
															</button>
													</td>
												</tr>
													)
												})}
												
											</tbody>
										</table>
									</div>
								</div>
								{/* /.card-body */}
							</div>
							{/* /.card */}
						</div>
						{/* /.col */}
					</div>
					{/* /.row */}
				</section>
			</div>
			{/* /.container-fluid */}
		</>
	);
};
export default Empshow;
