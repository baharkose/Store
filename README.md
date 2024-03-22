

# BE-ASS-02 : Store with CRUD Operations

## Description

In this project, you will create a basic Store API using Express.js as the backend framework and Mongoose as the ODM for database interaction. The focus of this project is to implement CRUD (Create, Read, Update, Delete) operations for products. The application should allow all users to view and admin to add, view, update, and delete products records in the store.

## Project Skeleton

Your project directory structure might look like this:

```
store/
  ├── index.js          // Express.js server setup
  ├── .env
  ├── src
      ┣ controllers
      ┃ ┣ adminController.js
      ┃ ┣ productsController.js
      ┃ ┗ userController.js
      ┣ helpers
      ┃ ┣ paswordEncrypte.js
      ┃ ┗ sync.js
      ┣ middlewares
      ┃ ┣ auth.js
      ┃ ┣ getCors.js
      ┃ ┗ postCors.js
      ┣ models
      ┃ ┣ productsModel.js
      ┃ ┗ userModel.js
      ┣ routes
      ┃ ┣ adminRoutes.js
      ┃ ┣ productsRoutes.js
      ┃ ┗ userRoutes.js
      ┣ db.js
      ┗ errorHandler.js
  ├── package.json    // Node.js project configuration
  └── README.md       // Project documentation
```

## Project ERD

![erd](./erd.png)

## Project Tasks

1. **Create a New Express.js Project**:
   - Adding Dependencies(Express, Mongoose, etc) to Your Project.
   - Establish Connection with MongoDB.
2. **Database Setup**:
   - Create your models according to the given ERD diagram.
3. **Adding Sample Data to the Database:**
   - To add sample data to the database, create a script. This script will add predefined product and category data to the database (Example data can be retrieved from the Dummy JSON API.). You can also add the admin user here. Admin user information: {"email":"admin@aa.com","pass":"admin"}.
4. **Controller Creation:**
   - Create a userController to manage user operations. This controller will handle user login and logout operations.
   - Create productControllers to manage product and category operations. These controllers will only handle **listing and reading operations** for products and categories.
   - Create a adminController to manage admin operations. This controller will handle adding, editing, deleting, and listing operations for products and categories.
5. **Route Creation:**
   - Create a userRoute for user operations. This route will manage user login and logout operations.
   - Create productRoutes for product and category operations. These routes will manage listing and reading operations for products and categories, as well as listing products by category.
   - Create a adminRoute for admin operations. This route will manage adding, editing, deleting, and listing operations for products and categories.
   - **Note**: You can set up your routes according to the provided Postman collection.
6. **Middleware Creation**:
   - Creating Auth Middleware: In order for a user to access admin routes, they need to log in with admin credentials. Create a middleware for adminRoutes that checks if the user exists.
   - Creating Middleware for GET Requests: Users can only make GET requests to productRoutes. Create a cors middleware that only allows GET requests.
   - Creating Middleware for POST Requests: Allow users to make POST requests for login and logout operations in userRoutes. Create a cors middleware for this purpose.
7. **Search and Limit**:
   - Perform search and limit operations. The search operation should be based on the incoming query, occurring in both the title and description fields. It is sufficient for the query to appear in either field. For example, if the query "hand" appears in the title field of some products and in the description field of others, the user should see all these products. If the limit parameter is not provided, it should default to 30.
8. **Error Handling:**
   - Handle errors and provide meaningful error messages.
9. **Documentation:**
   - Provide clear and well-documented code.
   - Include a README file that explains how to set up and run the project locally.

## **Deliverables:**

- A GitHub repository containing your project.
- A live demonstration of your project (if possible).

## Postman Collection

- https://documenter.getpostman.com/view/19994125/2sA2xmTpoz

## Notes

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
