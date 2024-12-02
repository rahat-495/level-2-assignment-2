### Features
Car Inventory Management: Add, update, delete, and view available cars in the store. <br>
Order Management: Place orders for cars, view order details, and calculate total prices. <br>
Stock Control: Manage the available quantity of each car and track if the car is in stock. <br>
CRUD Operations: Create, read, update, and delete operations for both cars and orders. <br>
Data Integrity: Mongoose validation ensures that data meets predefined rules and constraints. <br>

### Tech Stack
- Backend: Express.js .

- Database: MongoDB, Mongoose .

- Language: TypeScript .

- Validation: Mongoose Schema Validation .

- API Documentation: REST API .

### Project Setup
Follow these instructions to set up the project locally.

1. Clone the Repository
Clone this repository to your local machine:

Copy code

```git clone https://github.com/rahat-495/level-2-assignment-2.git```

2. Install Dependencies
Navigate to the project directory and install the required npm packages:

bash
Copy code <br>
cd car-store-b4a2v3
npm install mongoose cors express dotenv ts-node-dev

3. Set Up Environment Variables
Create a .env file in the root of the project and add the following environment variables:

env
Copy code
PORT=5555
DATABASE_URL=yourUrl

4. Run the Application Locally
Start the application locally:

bash
Copy code
npx ts-node-dev --respawn --transpile-only src/server.ts
The app will be running at http://localhost:5555.
