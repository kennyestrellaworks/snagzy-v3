import React, { useState } from "react";
import employees from "../data/employees";

const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  // Get current employees for the page
  const startIndex = (currentPage - 1) * employeesPerPage;
  const currentEmployees = employees.slice(
    startIndex,
    startIndex + employeesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Position</th>
            <th className="py-2 px-4 border">Department</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{employee.id}</td>
              <td className="py-2 px-4 border">{employee.name}</td>
              <td className="py-2 px-4 border">{employee.position}</td>
              <td className="py-2 px-4 border">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
