# Shine Haven

## Introduction
Shine Heaven is a web application developed to simplify the shopping experience by providing a seamless and user-friendly interface for browsing, selecting, and purchasing products online. This project was initiated to address the growing need for an efficient online shopping platform that caters to users' needs with minimal friction. Shine Heaven integrates various features such as user authentication, a dynamic shopping cart, and a secure payment gateway, ensuring a smooth and secure shopping experience. 

The core functionality of Shine Heaven includes:
- A comprehensive product catalog with detailed descriptions and images.
- A shopping cart system that allows users to add, update, and remove items.
- Secure user authentication and profile management.
- An integrated payment system for easy and secure transactions.

By developing Shine Heaven, we aim to provide a reliable and enjoyable shopping platform that enhances the user's online shopping experience.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://66713797ff903dc0919ec5ca--bucolic-banoffee-8c19f2.netlify.app/
Backend: https://console.firebase.google.com/project/huawei-heroes081/overview
Database: [https://deployed-site.whatever](https://huawei-heroes-081-5.onrender.com/data)

## Directory Structure
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/1ff81f2c-d8f2-4a54-a9b7-bf5bb2e84012) <br/>
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/42986834-08ea-4581-bd86-e794855b9d7e)



## Video Walkthrough of the project
video walkthough of all of the features: https://youtu.be/xD9DWlJlRps 

## Features
- **User Authentication**: Secure user authentication to protect user data and enhance security. 
- **Product Listing**: A comprehensive and searchable product catalog with detailed descriptions and images.
- **Shopping Cart**: Dynamic shopping cart functionality that allows users to add, update, and remove items.
- **Payment Gateway Integration**: Secure and seamless integration with a payment gateway for easy transactions.
- **Admin Panel**: Includes functionalities for product management such as adding, updating, and deleting products, as well as password management for users.
- **User Panel**: Allows users to manage their favorites, provides a buy option, and includes QR code generation for quick access.
- **Product Filtering**: Advanced filtering options to sort products by price and rating, enhancing user experience.
- **Pagination**: Efficient pagination to handle large sets of products, ensuring quick load times and better performance.


## design decisions or assumptions
List your design desissions & assumptions

## Installation & Getting Started

# Create React App (CRA)
 First, ensure you have Node.js installed on your system. You can download and install it from Node.js website.
Open your terminal.<br>
To create a new React app using CRA, run the following command:

```bash
npx create-react-app my-app
```
Replace my-app with your preferred project name.<br>
Navigate to your project directory:

```bash
cd my-app
```
# Vite
First, ensure you have Node.js installed on your system. You can download and install it from Node.js website.
Open your terminal.<br>
To create a new React app using Vite, run the following command:

```bash
npm init vite@latest my-app --template react
```
Replace my-app with your preferred project name.<br>
Navigate to your project directory:

```bash
cd my-app
```
Install Dependencies
Navigate to the root directory of your project.<br>
Install necessary dependencies:

```bash
npm install axios react-router-dom redux react-redux redux-thunk
```
Configuration
Set up your project structure according to your needs. You can organize your components, pages, and assets in the src directory.
Configure your routes using react-router-dom if necessary.<br>
Set up Redux for state management if required. Create reducers, actions, and store as per your application's needs.
Running the Project<br>
Once you have completed the setup and configuration, you can start the development server.
For CRA:

```bash
npm start
```
For Vite:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:3000 (if using CRA) or the URL shown in your terminal (if using Vite) to view your project.

```bash
npm install my-project
cd my-project
npm start
```

## Credentials
Email : babakhalil@gmail.com
password: 12345678


## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

Follow these steps to set up a JSON server for your project:

1. **Initialize npm**: Start by initializing a new npm project in your project directory:  npm init -y
 
2. **Install JSON Server**: Install JSON Server as a dependency in your project: npm install json-server
  

3. **Prepare Data File**: Create a JSON file to serve as your database. Make sure the file has a `.json` extension and contains your data in JSON format.

4. **Create Server Script**: Create a `server.js` file to define your JSON Server configuration and routes.

5. **Create .gitignore**: Create a `.gitignore` file and add `node_modules` to it to exclude the `node_modules` directory from version control.

6. **Define Start Script**: In your `package.json` file, add a `start` script to start the JSON Server:
``json
"scripts": {
  "start": "node server.js"
}

7. Add to Repository: Add your project files to your Git repository: git add .
8. Commit Changes: Commit your changes to Git: git commit -m "msg"
9. Push to Remote Repository: Push your changes to your remote Git repository: git push origin main
10. Use JSON Server: You can use JSON Server to serve your data by running the following command: npm start.

Create Webservice Option: If you want to host your JSON Server online, you can paste the GitHub code link in the appropriate option to generate a JSON server on your account.<br>

That's it! You've now set up a JSON server for your project. You can access your JSON server by visiting http://localhost:3000.

In this project, we have used Render to create JSON server online.

## API Endpoints

Data Servers: - [https://react-project-sutlej-dependency-020-3.onrender.com/](https://huawei-heroes-081-5.onrender.com/data)

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item
PUT /api/items - update particular data


## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```

Include screenshots as necessary.

overview images
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/3d3303ef-cf37-4bef-a7a8-c2fc778f6b82)
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/d2b0faf7-f127-42ad-84f1-6010b4581a16)
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/eeaa979f-8846-41b5-a0db-083f5f592eb2)
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/4cb014e5-553f-4443-a7c2-a3fb27669d84)
![image](https://github.com/BabakhalilM/Huawei-Heroes_081/assets/154895694/f547bdfa-94d2-42d4-8e9b-7a5b83802d97)

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- React
- Firebase
- Html
- Css
- Other libraries/modules like QrCode etc...
