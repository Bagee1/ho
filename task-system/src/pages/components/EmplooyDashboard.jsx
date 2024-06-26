import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container grid grid-cols-2 gap-20 p-20 bg-gradient-to-r from-blue-500 to-blue-700 font-sans">
      {/* Tasks Section */}
      <div className="tasks">
        <h2 className="sticky top-0 bg-white px-4 py-2 border-b border-gray-300">Tasks</h2>
        <div className="task-list overflow-y-auto">
          <a href="task1.html" className="task-item">
            <span>User ID: 12345</span>
            <span>Task Name: Task 1</span>
          </a>
          <a href="task2.html" className="task-item">
            <span>User ID: 12346</span>
            <span>Task Name: Task 2</span>
          </a>
          {Array.from({ length: 20 }, (_, index) => (
            <a href={`task${index + 3}.html`} className="task-item" key={index}>
              <span>User ID: 12347</span>
              <span>Task Name: Task {index + 3}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Employee Information Section */}
      <div className="employee-info flex flex-col justify-center items-center">
        <img src="naruto.jpg" alt="Employee Photo" className="rounded-full mb-4" width="100" height="100" />
        <p className="mb-2"><strong>Employee ID:</strong> 12345</p>
        <p className="mb-2"><strong>Name:</strong> John</p>
        <p className="mb-2"><strong>Surname:</strong> Doe</p>
        <p className="mb-2"><strong>Email:</strong> john.doe@xyz.com</p>
        <p className="mb-2"><strong>Phone:</strong> 123-456-7890</p>
        <div className="logout-button mt-auto">
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md">Logout</button>
        </div>
      </div>

      {/* Company Notices Section */}
      <div className="company-notices col-span-2">
        <h2 className="sticky top-0 bg-white px-4 py-2 border-b border-gray-300">Company Notices</h2>
        <ul className="max-h-48 overflow-y-auto">
          {Array.from({ length: 10 }, (_, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md my-2">Notice {index + 1}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
