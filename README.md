# Career-Code: A Job Portal System

## Project Overview
Welcome to **Career-Code**, a comprehensive **Job Portal System** designed to streamline the interaction between job seekers and employers. The platform enables users to manage job postings, apply for jobs, and review applications seamlessly.

This project showcases clean code, modern UI/UX, and robust features to enhance the job recruitment experience for all users.

---

## 🚀 **Live URL**
[**Visit the Application**](https://career-code.web.app/)

---

## 🎯 **Key Features**
### 1. **Authentication System**
- User Registration with name, email, password, and profile photo.
- Login system with **email/password** and **Google Authentication**.
- Password recovery functionality (Forgot Password).
- Protected Routes: Only authenticated users can access job-related functionalities.

### 2. **Home Page (Landing Page)**
- Interactive design to engage users.
- Displays available job posts with:
  - Title, Location, Job Type, Category, Deadline, Total Applicants, and Salary Range.
- "Details" button to view individual job descriptions.

### 3. **All Jobs Page**
- Displays all available jobs with essential information.
- Features include:
  - **Search System**: Search jobs by title.
  - **Filters**:
    - Job Type: Full-Time, Part-Time, Hybrid.
    - Experience Level: Junior, Mid-Level, Entry, Internship, Senior.
    - Salary Range: Minimum and Maximum.
  - **Sorting**: Sort jobs based on the deadline.
- Efficient loading and error handling.

### 4. **Job Details Page**
- Shows full job information:
  - Description, Responsibilities, Requirements, Salary, and Deadline.
- "Apply" button to navigate to the application form (if the deadline is available).

### 5. **Add Job Page** (For Employers)
- Employers can post new jobs with a form:
  - Job Title, Location, Job Type, Category, Descriptions, Salary Range, and Company Info.
- Adds job details along with employer information into the database.

### 6. **Application Page** (For Job Seekers)
- Job seekers can apply for jobs using a detailed form:
  - Personal Info, Skills, Experience, Career Summary, Portfolio Links, and Resume.
  - Includes checkboxes for alignment with job requirements.
- Application data is submitted and stored with a timestamp.

### 7. **My Applications Page**
- Displays all job applications submitted by the user in a table format.
- "Withdraw Application" button to delete applications.

### 8. **My Job Posts Page**
- Employers can view all jobs they have posted in a tabular format.
- Functionalities:
  - View Applications: Navigate to review applications for a job.
  - Edit Job: Update existing job posts.
  - Delete Job: Remove job posts.

### 9. **Review Applications Page**
- Employers can review job applications submitted for a specific post.
- Application cards include applicant details and a dropdown menu to update status:
  - Rejected, Shortlisted, Hired, or Interview Scheduled.

### 10. **Update Job Page**
- Employers can update existing job details using a form.

---

## 🛠️ **Technologies Used**
| **Technology**     | **Purpose**                           |
|--------------------|--------------------------------------|
| React.js           | Front-End Framework                  |
| Firebase           | Authentication and Hosting           |
| Tailwind CSS       | Styling and Responsive UI            |
| DaisyUI            | Pre-built UI Components              |
| React Router DOM   | Navigation and Routing               |
| Axios              | HTTP Requests and Data Fetching      |
| GitHub             | Version Control                      |
| Node.js & Express  | Back-End Server (Optional if used)   |
| MongoDB            | Database (Optional if used)          |

---


## 📂 **Project Structure**
```plaintext
src/
│-- assets/           # Images and static files
│-- components/       # Reusable UI components
│-- pages/            # Application Pages (Home, Jobs, etc.)
│-- routes/           # Route configurations
│-- Contexts/         # Global State Management
│-- firebase.config.js # Firebase setup
│-- App.jsx           # Main App Component
│-- main.jsx          # Entry Point
│-- index.css         # Global Styles
```

---

## 📊 **GitHub Management**
- Included **10+ meaningful commits** reflecting key milestones.
- Organized and modular code following best practices.

---

## 🔒 **Error Handling and UX**
- **Error States**: Display clear error messages for failed actions.
- **Loading States**: Implemented loaders to enhance user experience.

---

## 🤝 **Contributing**
Contributions are welcome! If you have any suggestions or improvements, please fork the repository and submit a pull request.

---

## 📄 **License**
This project is licensed under the **MIT License**.

---

## 📧 **Contact**
For any queries or issues, please reach out:
- **Email**: shaikatahmed78@gmail.com
- **GitHub**: [My GitHub Profile](https://github.com/SaikatAhmed78)

---

Thank you for exploring **Career-Code**! 🌟

Feel free to share feedback and suggestions to help improve this platform.

