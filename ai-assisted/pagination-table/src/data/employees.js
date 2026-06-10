const employees = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 2}`,
    position: `Position ${index % 5}`,
    department: `Department ${index % 3}`,
  }));
  
  export default employees;
  