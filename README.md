# Employee Content Management System

This application is a command-line based content management system (CMS) for managing a company's employees. It allows the user to view and manage the departments, roles, and employees in the company.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/dtran1208/build-employee-CMS
    ```

2. **Install the dependencies:**

    Navigate into the cloned repository:

    ```bash
    cd employee-cms
    ```

    Then install the dependencies:

    ```bash
    npm install
    ```

3. **Setup the database:**

    Update the `initializeDB` function in the `index.js` file with your MySQL credentials.

    Run the `schema.sql` and `seeds.sql` files in your MySQL client to create and populate the `employee_db` database.

## Usage

Start the application:

```bash
node index.js
