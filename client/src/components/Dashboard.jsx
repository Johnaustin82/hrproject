// import React, { useState } from 'react';
// import './dashboard.css';
// import EmployeeList from './Employees/EmployeeList';
// import AdminLeaveManagement from './AdminLeaveManagement';

// const Dashboard = () => {
//     const [employees, setEmployees] = useState([]);
//     const [employeeId, setEmployeeId] = useState('');
//     const [employeeName, setEmployeeName] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [employeeRole, setEmployeeRole] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [updateIndex, setUpdateIndex] = useState(null);
//     const [showEmployeeList, setShowEmployeeList] = useState(false);
//     const [showEmployeeLeave, setShowEmployeeLeave] = useState(false)
//     const [message, setMessage] = useState('');

//     const addEmployee = async (e) => {
//         e.preventDefault();

//         if (employeeName && contactNumber && employeeRole && email && password) {
//             const newEmployee = {
//                 id: employeeId || Date.now(),
//                 name: employeeName,
//                 contact: contactNumber,
//                 role: employeeRole,
//                 email,
//                 password,
//             };

//             try {
//                 const response = await fetch('http://127.0.0.1:5000/auth/register', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(newEmployee),
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setMessage(data.message || 'Employee added successfully');
//                     setEmployees([...employees, newEmployee]);
//                     resetForm();
//                 } else {
//                     const error = await response.json();
//                     setMessage(error.error || 'Failed to add employee');
//                 }
//             } catch (error) {
//                 setMessage('An error occurred while adding the employee');
//                 console.error(error);
//             }
//         } else {
//             setMessage('All fields are required');
//         }
//     };

//     const resetForm = () => {
//         setEmployeeId('');
//         setEmployeeName('');
//         setContactNumber('');
//         setEmployeeRole('');
//         setEmail('');
//         setPassword('');
//         setIsUpdating(false);
//         setShowEmployeeList(false);
//         setShowEmployeeLeave(false);
//         setMessage('');
//     };

//     return (
//         <div className="dashboard">
//             <div className="side-panel">
//                 <h2>Employee Management</h2>
//                 <button onClick={resetForm}>Add Employee</button>
//                 <button onClick={() => setShowEmployeeList(true)}>View Employees</button>
//                 <button onClick={()=>setShowEmployeeLeave(true)}>Leave Management</button>
//             </div>
//             <div className="employee-form">
//                 {!showEmployeeList ? (
//                     <>
//                         <h1>{isUpdating ? 'Update Employee' : 'Add Employee'}</h1>
//                         {message && <p>{message}</p>}
//                         <form onSubmit={addEmployee}>
//                             <label>
//                                 Employee ID:
//                                 <input
//                                     type="text"
//                                     value={employeeId}
//                                     onChange={(e) => setEmployeeId(e.target.value)}
//                                     disabled={isUpdating}
//                                 />
//                             </label>
//                             <label>
//                                 Employee Name:
//                                 <input
//                                     type="text"
//                                     value={employeeName}
//                                     onChange={(e) => setEmployeeName(e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 Contact Number:
//                                 <input
//                                     type="text"
//                                     value={contactNumber}
//                                     onChange={(e) => setContactNumber(e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 Employee Role:
//                                 <input
//                                     type="text"
//                                     value={employeeRole}
//                                     onChange={(e) => setEmployeeRole(e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 Email:
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 Password:
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </label>
//                             <button type="submit">{isUpdating ? 'Update Employee' : 'Add Employee'}</button>
//                         </form>
//                     </>
//                 ) : (
//                     <EmployeeList employees={employees} /> ||
//                     <AdminLeaveManagement leaveApplications={leaveApplications}/>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useState } from 'react';
import './dashboard.css';
import EmployeeList from './Employees/EmployeeList';
import AdminLeaveManagement from './AdminLeaveManagement';
import AddNotification from './Notications/AddNotications';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [showEmployeeList, setShowEmployeeList] = useState(false);
    const [showEmployeeLeave, setShowEmployeeLeave] = useState(false);
    const [showAddLeave, setShowAddLeave]= useState(false);
    const [message, setMessage] = useState('');

    const addEmployee = async (e) => {
        e.preventDefault();

        if (employeeName && contactNumber && employeeRole && email && password) {
            const newEmployee = {
                id: employeeId || Date.now(),
                name: employeeName,
                contact: contactNumber,
                role: employeeRole,
                email,
                password,
            };

            try {
                const response = await fetch('http://127.0.0.1:5000/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newEmployee),
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessage(data.message || 'Employee added successfully');
                    setEmployees([...employees, newEmployee]);
                    resetForm();
                } else {
                    const error = await response.json();
                    setMessage(error.error || 'Failed to add employee');
                }
            } catch (error) {
                setMessage('An error occurred while adding the employee');
                console.error(error);
            }
        } else {
            setMessage('All fields are required');
        }
    };

    const resetForm = () => {
        setEmployeeId('');
        setEmployeeName('');
        setContactNumber('');
        setEmployeeRole('');
        setEmail('');
        setPassword('');
        setIsUpdating(false);
        setShowAddLeave(false);
        setShowEmployeeList(false);
        setShowEmployeeLeave(false);
        setMessage('');
    };

    return (
        <div className="dashboard">
            <div className="side-panel">
                <h2>Employee Management</h2>
                <button onClick={resetForm}>Add Employee</button>
                <button
                    onClick={() => {
                        setShowAddLeave(false)
                        setShowEmployeeList(true);
                        setShowEmployeeLeave(false);
                    }}
                >
                    View Employees
                </button>
                <button
                    onClick={() => {
                        resetForm(false);
                        setShowEmployeeList(false);
                        setShowEmployeeLeave(false);
                        setShowAddLeave(true);
                    }}
                >
                    Add Notice
                </button>
                <button
                    onClick={() => {
                        setShowAddLeave(false)
                        setShowEmployeeList(false);
                        setShowEmployeeLeave(true);
                    }}
                >
                    Leave Management
                </button>
            </div>
            <div className="main-content">
                {!showEmployeeList && !showEmployeeLeave && !showAddLeave && (
                    <>
                        <h1>{isUpdating ? 'Update Employee' : 'Add Employee'}</h1>
                        {message && <p>{message}</p>}
                        <form onSubmit={addEmployee}>
                            <label>
                                Employee ID:
                                <input
                                    type="text"
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                    disabled={isUpdating}
                                />
                            </label>
                            <label>
                                Employee Name:
                                <input
                                    type="text"
                                    value={employeeName}
                                    onChange={(e) => setEmployeeName(e.target.value)}
                                />
                            </label>
                            <label>
                                Contact Number:
                                <input
                                    type="text"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                />
                            </label>
                            <label>
                                Employee Role:
                                <input
                                    type="text"
                                    value={employeeRole}
                                    onChange={(e) => setEmployeeRole(e.target.value)}
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            <button type="submit">{isUpdating ? 'Update Employee' : 'Add Employee'}</button>
                        </form>
                    </>
                )}
                {showEmployeeList && <EmployeeList employees={employees} />}
                {showEmployeeLeave && <AdminLeaveManagement />}
                {showAddLeave && <AddNotification/>}
            </div>
        </div>
    );
};

export default Dashboard;
