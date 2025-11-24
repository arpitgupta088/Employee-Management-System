const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design login UI",
        "taskDescription": "Create a modern login screen for the dashboard.",
        "taskDate": "2025-12-01",
        "category": "design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix navbar bug",
        "taskDescription": "Navbar collapsing issue on mobile view.",
        "taskDate": "2025-12-03",
        "category": "development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update user profile API",
        "taskDescription": "Enhance API to support avatar uploads.",
        "taskDate": "2025-11-27",
        "category": "backend"
      }
    ]
  },

  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write documentation",
        "taskDescription": "Complete project setup documentation.",
        "taskDate": "2025-12-02",
        "category": "documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create logo",
        "taskDescription": "Design the main logo for branding.",
        "taskDate": "2025-11-25",
        "category": "design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare onboarding sheet",
        "taskDescription": "Make onboarding document for new hires.",
        "taskDate": "2025-11-29",
        "category": "HR"
      }
    ]
  },

  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement dark mode",
        "taskDescription": "Add dark mode theme toggle.",
        "taskDate": "2025-12-05",
        "category": "frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "API testing",
        "taskDescription": "Test all authentication APIs.",
        "taskDate": "2025-11-20",
        "category": "testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Optimize images",
        "taskDescription": "Reduce image sizes for faster load speed.",
        "taskDate": "2025-11-22",
        "category": "performance"
      }
    ]
  },

  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create database schema",
        "taskDescription": "Design the DB schema for user tasks.",
        "taskDate": "2025-12-06",
        "category": "database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix SQL injection bug",
        "taskDescription": "Patch DB endpoints to prevent injection attacks.",
        "taskDate": "2025-11-18",
        "category": "security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Normalize tables",
        "taskDescription": "Improve DB structure using 3NF.",
        "taskDate": "2025-11-28",
        "category": "database"
      }
    ]
  },

  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create banner design",
        "taskDescription": "Make homepage banner for marketing.",
        "taskDate": "2025-12-04",
        "category": "design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social media posts",
        "taskDescription": "Design 3 Instagram posts.",
        "taskDate": "2025-11-19",
        "category": "marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Promo video edit",
        "taskDescription": "Edit 30-second promotional video.",
        "taskDate": "2025-11-26",
        "category": "video editing"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees, admin);
}