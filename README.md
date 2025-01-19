Blogify

Blogify is a simple blog application designed to help users create, edit, and manage blog posts effortlessly. Built as a full-stack application, Blogify integrates a Node.js backend, MongoDB database, and basic HTML/CSS for a responsive and user-friendly frontend.

---

## Features and Functionality

### User Features
- **Home Page**:
  - Displays all blog posts with title, short description, and timestamp.
  - Includes a “Read More” option for viewing full blog posts.
- **Create Post**:
  - Simple form to input:
    - Title (max 100 characters)
    - Content (plain text only)
  - Saves the post to the database.
- **Edit Post**:
  - Modify an existing blog post.
- **Delete Post**:
  - Remove a post with a confirmation prompt.
- **Post Details**:
  - View the full blog post with title, content, and timestamp.

## Non-Functional Requirements

- **Scalability**: Handles up to 100 blog posts initially.
- **Performance**:
  - Home Page loads within 2 seconds for up to 50 posts.
  - API response time ≤ 500ms.
- **Usability**:
  - Responsive design for mobile, tablet, and desktop.
  - Minimal and intuitive UI/UX.

---

## Tech Stack

### Frontend
- React
- TailwindCSS

### Backend
- **Node.js** with **Express.js**

### Database
- **MongoDB**: Stores blog post data

---

API Endpoints

Method	Endpoint	Description
GET	/posts	Fetch all blog posts
GET	/posts/:id	Fetch a single post
POST	/posts	Create a new post
PUT	/posts/:id	Update an existing post
DELETE	/posts/:id	Delete a post

Project Milestones
	1.	Project Setup (2 Days)
	•	Initialize Node.js, Express, and MongoDB.
	•	Set up folder structure and dependencies.
	2.	Backend Development (4 Days)
	•	Create CRUD API endpoints.
	•	Test endpoints using Postman.
	3.	Frontend Development (4 Days)
	•	Design HTML pages for Home, Create Post, Edit Post, and Post Details.
	•	Implement responsive CSS.
	4.	Integration and Testing (2 Days)
	•	Connect frontend with backend.
	•	Test full-stack functionality.
	5.	Deployment (1 Day)
	•	Deploy on platforms like Heroku/Render (backend) and Netlify/Vercel (frontend).

Future Enhancements
	•	Add user authentication for multi-user functionality.
	•	Include a rich text editor for blog content.
	•	Allow image uploads for posts.
	•	Implement categories and tags for better organization.

Contributing

Contributions are welcome! To contribute:
	1.	Fork the repository.
	2.	Create a new branch: git checkout -b feature-branch-name.
	3.	Commit your changes: git commit -m "Add new feature".
	4.	Push to the branch: git push origin feature-branch-name.
	5.	Open a pull request.

Contact
	•	Author: Abdulaziz
	•	Email: mohdabdulaziz2023@gmail.com
	•	GitHub: abd-az1z
