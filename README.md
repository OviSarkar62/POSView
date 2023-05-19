# POSView

POSView is a web application built using the MERN stack, which includes MongoDB, Express, React, and Node.js. This application is designed to serve as a point of sale (POS) system, allowing users to manage products, customers, and sales.

## Project View

- **Homepage**
<p align="center">
  <img alt="img-name" src="Images of POSView/Homepage.png" width="700">
</p>

- **Bills**
<p align="center">
  <img alt="img-name" src="Images of POSView/Bills.png" width="700">
</p>



## Installation

- Clone the project from the GitHub repository: 

       git clone https://github.com/OviSarkar62/POSView.git
    
- Navigate to the project directory: 

       cd POSView
    
- Install the dependencies for the server: 

       npm install
    
- Navigate to the client directory: 

       cd client
    
- Install the dependencies for the client: 

       npm install
    
- Create a .env file in the root directory with the following environment variables:

1. MONGO_URI: The connection string for MongoDB. If using MongoDB Atlas, you can find this in the cluster details.
2. SALT_ROUNDS: A salt value.

- Start the server: 

       npm run server
    
- In a new terminal window, navigate to the client directory:

       cd client
    
- Start the client: 

       npm start
    
Open http://localhost:3000 in your browser to access the application.

## API Endpoints

The API for this project is RESTful and provides the following endpoints:

       POST /api/users/register: Register a new user
       POST /api/users/login: Log in an existing user
       GET /api/products: Returns a list of all products
       POST /api/products: Creates a new product
       GET /api/products/:id: Returns a product by ID
       PUT /api/products/:id: Updates a product by ID
       DELETE /api/products/:id: Deletes a product by ID
       GET /api/customers: Returns a list of all customers
       POST /api/customers: Creates a new customer
       GET /api/customers/:id: Returns a customer by ID
       PUT /api/customers/:id: Updates a customer by ID
       DELETE /api/customers/:id: Deletes a customer by ID
       GET /api/sales: Returns a list of all sales
       POST /api/sales: Creates a new sale
       GET /api/sales/:id: Returns a sale by ID
       PUT /api/sales/:id: Updates a sale by ID
       DELETE /api/sales/:id: Deletes a sale by ID
       
Each endpoint expects and returns data in JSON format.

## Client-side functionality

The client-side of the application is built with React. The user interface provides the following functionality:

- View a list of all products, customers, and sales
- Create a new product, customer, or sale
- Edit an existing product, customer, or sale
- Delete a product, customer, or sale

The client utilizes Axios to make HTTP requests to the server-side API.

## Error handling

The server-side code includes error handling for common errors such as missing parameters or incorrect data types. Error messages are returned in messages as required.

## Conclusion

POSView is a functional web application with CRUD functionality for managing products, customers, and sales. The server-side API is

## Live Link
The live project: [POSView](https://pos-view.vercel.app/login)

