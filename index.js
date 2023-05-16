const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

async function initializeDB() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
    });

    return connection;
}

async function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit'
            ]
        }
    ]);
}

async function handleAction(connection, action) {
    switch (action) {
        case 'View all departments':
            const [rows, fields] = await connection.query('SELECT * FROM department');
            console.log(rows);
            break;
        case 'View all roles':
            // call function to view all roles
            break;
        case 'View all employees':
            // call function to view all employees
            break;
        case 'Add a department':
            // call function to add a department
            break;
        // ...additional cases...
    }
}

async function main() {
    const connection = await initializeDB();

    let exit = false;
    while (!exit) {
        const answers = await promptUser();
        if (answers.action === 'Quit') {
            exit = true;
        } else {
            await handleAction(connection, answers.action);
        }
    }

    connection.end();
}

main().catch(err => console.error(err));


