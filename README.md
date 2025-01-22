# Job Portal

## Live Demo
[Click here to view the live demo](https://job-portal-shozab.vercel.app) <!-- Replace # with the actual live demo link -->

## Description
The Job Portal is a MERN stack-based web application where users can apply for jobs and recruiters can manage job postings. It includes authentication via Clerk and separate functionalities for job applicants and recruiters.

---

## Features
- **User Functionality:**
  - Login/Signup using Clerk authentication.
  - View and apply for available jobs.
  - Track application status (Accepted/Rejected).
- **Recruiter Functionality:**
  - Separate login/signup for recruiters.
  - Dashboard to manage job postings.
  - Accept or reject job applications.

---

## Installation Instructions

1. Clone the repository:
```bash
git clone https://github.com/shozabali06/Job-Portal-MERN.git
```

2. Navigate to the project directory:
```bash
cd Job-Portal-MERN
```

### Backend Setup

3. Navigate to the backend folder:
```bash
cd backend
```

4. Install dependencies:
```bash
npm install
```

5. Configure environment variables:
   Create a `.env` file in the `backend` folder and add the following:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   CLOUDINARY_URL=<your-cloudinary-url>
   CLERK_WEBHOOK_SECRET=<your-clerk-webhook-secret>
   CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   ```

6. Start the backend server:
```bash
npm run server
```

### Frontend Setup

7. Navigate to the frontend folder:
```bash
cd frontend
```

8. Install dependencies:
```bash
npm install
```

9. Configure environment variables:
   Create a `.env` file in the `frontend` folder and add the following:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   VITE_BACKEND_URL=<url-for-backend>
   ```

10. Start the frontend server:
```bash
npm run dev
```

---

## Commands Summary

### Backend Commands
- **Install dependencies:** `npm install`
- **Run the server:** `npm run server`

### Frontend Commands
- **Install dependencies:** `npm install`
- **Run the client:** `npm run dev`

---

## Environment Variables Summary

### Backend Folder
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JSON Web Token.
- `CLOUDINARY_NAME`: Cloudinary account name.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.
- `CLOUDINARY_URL`: Cloudinary URL.
- `CLERK_WEBHOOK_SECRET`: Clerk webhook secret.
- `CLERK_PUBLISHABLE_KEY`: Clerk publishable key.
- `CLERK_SECRET_KEY`: Clerk secret key.

### Frontend Folder
- `VITE_CLERK_PUBLISHABLE_KEY`: Clerk publishable key for the frontend.
- `VITE_BACKEND_URL`: URL of the backend server.

---

Feel free to reach out for further assistance or feature suggestions!
