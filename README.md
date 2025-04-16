# GoGrocer Project

GoGrocer is a web application designed to facilitate the buying and selling of grocery items. The application consists of a frontend built with React and a backend built with Node.js and Express. It provides a user-friendly interface for sellers to manage their inventory and for buyers to search and purchase products.

## Features

### Frontend
- **Seller Dashboard**: 
  - Sellers can add new products, manage existing inventory, and toggle product availability.
  - The dashboard displays a list of products with options to edit or remove them.

- **Buyer Interface**: 
  - Buyers can search for products by name.
  - The interface displays product details, including price and availability.
  - Buyers can place orders for products.

- **Notifications**: 
  - Sellers receive notifications about order statuses.

### Backend
- **API Endpoints**: 
  - The backend provides RESTful API endpoints for managing products, orders, and user authentication.
  - Endpoints include functionality for creating, reading, updating, and deleting products and orders.

- **Database**: 
  - The application uses a MongoDB database to store product and order information.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running (or use a cloud-based MongoDB service).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd GoGrocer
   ```

2. **Install Backend Dependencies**:
   Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**:
   Navigate to the backend directory and start the server:
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Application**:
   Open a new terminal, navigate to the frontend directory, and start the application:
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application**:
   Open your browser and go to `http://localhost:3000` to access the frontend.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgments
- React for the frontend framework.
- Node.js and Express for the backend framework.
- MongoDB for the database.
