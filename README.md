# Playwrite_assessment

# Sauce Labs Checkout Flow Test (Playwright + JavaScript)

This project is an automated end-to-end test suite that simulates a customer completing a purchase on the Sauce Labs demo website.
It uses Playwright to:
1- Log in as a user
2- Add 3 random items to the shopping cart
3- Complete the checkout process
4- Verify the order confirmation


# Setup Instructions

1. Clone the Repository
git clone https://github.com/AsmaAf11/Playwrite_assessment.git
cd Playwrite_assessment
cd playwrite2
3. Install Dependencies
npm install
This installs playwright and other required packages from package.json.
4. Install Browsers
npx playwright install
This downloads the necessary browsers (Chromium, Firefox, WebKit).

 Running the Test
Run the test using the following command:
npx playwright test Main.spec.js
To run it in headed mode (see the browser in action):
npx playwright test Main.spec.js --headed

# Reporting

The report will open automatically after executing the code

# What This Test Does
Logs in using:
Username: standard_user
Password: secret_sauce
Randomly selects 3 products from the inventory
Adds them to the cart
Proceeds through checkout:
First Name: Asma
Last Name: Ali
Postal Code: 12345
Asserts:
3 items are in the cart
The order summary is visible
The final confirmation message appears:
"Thank you for your order!"

# Prerequisites

Make sure you have:
Node.js v16 or higher installed
Internet access (the site is live)
No browser restrictions (Playwright downloads its own versions)
