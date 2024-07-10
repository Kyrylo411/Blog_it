# Blog_it
## Overview
Blog_it is a full-featured blogging platform where users can create, edit, and manage posts. The platform also includes user profiles with editing capabilities and a comments section for each post. This application is currently under development.

## Features
### Posts Management:
- Create new posts
- Edit existing posts
- Delete posts
- User Profiles:

### Create user profiles
- Edit user profiles
- View profiles

### Comments:
- Add comments to posts
- Edit comments
- Delete comments

## Getting Started
Follow these instructions to set up the project locally on your machine.

### Prerequisites
Node.js (>= 16.x)

### Installation

- Clone the repository:
**git clone https://github.com/Kyrylo411/Blog_it.git**

- Install dependencies:
**npm install**

- Run the application:
**npm run start:dev**
  
The application will be available at http://localhost:3000, server will start at http://localhost:8000

## Project Structure
**The project follows the Feature-Sliced Design architecture:**

- **app/**: Application-level styles, configurations and setups (e.g., routing, providers)
- **entities/**: Domain entities (e.g., profile, user, article)
- **pages/**: Pages of the application
- **features/**: Application features (e.g., auth, comment management)
- **shared/**: Shared assets, utilities, hooks, and components
- **widgets/**: UI components and widgets

## Usage

**Running Unit Tests**
- To run tests, use: **npm run test:unit**

**Running Storybook**
- To start Storybook, use: **npm run storybook**

**Running Loki Screenshot Tests**
- To run Loki screenshot tests, use: **npm run test:ui**

**Building for Production**
- To create a production build, run: **npm run build:prod**
  
The production-ready files will be in the build/ directory.

## Contact
If you have any questions or suggestions, feel free to open an issue or contact the project maintainers. You can contact me via LinkedIn www.linkedin.com/in/кирило-омельченко-1aa97420b

