# Product Store

This repository contains automated tests for a web application using Cypress. Below you'll find everything you need to set up and run the tests, as well as an explanation of the testing approach.

## Prerequisites

Before running the tests, you'll need to have the following installed on your computer:

1. **Node.js** (version 14 or higher)

   - Download from [https://nodejs.org/](https://nodejs.org/)
   - After installation, verify it works by running in your terminal:
     ```bash
     node -v
     ```
     This should display your Node.js version.

2. **npm** (comes with Node.js)
   - Verify it works by running:
     ```bash
     npm -v
     ```

## Setup Instructions

1. **Clone this repository** to your local machine.
   ```bash
   git clone https://github.com/henriquelh1/productstore.git
   ```
2. **Navigate to the project folder** in your terminal:
   ```bash
   cd path/to/your/project
   ```
3. **Install dependencies** by running in your terminal:
   ```bash
   npm install
   ```
   This will install Cypress and all other required packages.

## Running the Tests

There are two ways to run the tests:

1.  **Interactive Mode** (Recommended for Development):

        ```bash
        npx cypress open
        ```

    This opens the Cypress Test Runner where you can see tests executing in real browsers.
    After running this command you should choose the browser and the test spec you would like run.

2.  **Headless Mode** (Recommended for CI/CD)
        ```bash
    npx cypress run
    ```
    This runs all tests in the command line without opening a browser GUI.
    ```

## Testing Approach

This test suite focuses on two critical user flows: **Login** and **Purchase**. These are high-value actions for both the user and the business, so it's important to ensure they work correctly under a variety of conditions.

### Login Flow – What We Test

✅ Successful login with valid credentials

❌ Login attempt with invalid credentials (displays error)

🔄 Form validation (e.g., required fields)

🔓 Logout functionality

### Purchase Flow – What We Test

✅ Adding and removing items to the cart

✅ Successful purchase confirmation page or message

❌ Handling of failed purchase

### How the Tests Are Designed

**Happy Path First**: We ensure the expected, ideal flow works — valid login and a complete purchase.

**Edge Cases Next**: We simulate bad input, incorrect credentials, and failed purchases to make sure the app handles them gracefully.

**Real User Behavior**: Tests are written from the user’s point of view — visiting pages, clicking buttons, filling out forms — instead of testing internal logic.

## Author

LUIS MARREIROS
