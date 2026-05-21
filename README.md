# Cypress E2E Testing — Semester Project

**Student:** [Your Name]  
**Student ID:** [Your ID]  
**Date:** [Submission Date]  
**Website Under Test:** [https://www.saucedemo.com](https://www.saucedemo.com)

---

## Project Structure

```
cypress-e2e-project/
├── cypress/
│   ├── e2e/
│   │   ├── task1/
│   │   │   ├── login.cy.js          ← Login Test 1, 2, 3
│   │   │   ├── navigation.cy.js     ← Navigation Test 1, 2
│   │   │   └── form.cy.js           ← Form Test 1 (Checkout)
│   │   └── task2/
│   │       ├── assertions.cy.js     ← Assertions, Aliases, beforeEach
│   │       └── custom_commands.cy.js← Custom Command usage tests
│   └── support/
│       ├── commands.js              ← Custom commands definition
│       └── e2e.js                   ← Imports commands globally
├── cypress.config.js
├── package.json
└── README.md
```

---

## How to Install

Make sure you have **Node.js 18+** installed. Then:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cypress-e2e-project.git
cd cypress-e2e-project

# Install dependencies
npm install
```

---

## How to Run Tests

### Open Cypress GUI (interactive mode)
```bash
npm run cy:open
```
This opens the Cypress Test Runner where you can click on any test file to run it visually in the browser.

### Run all tests headlessly (terminal)
```bash
npm run cy:run
```

### Run only Task 1 tests
```bash
npm run cy:run:task1
```

### Run only Task 2 tests
```bash
npm run cy:run:task2
```

---

## Task 1 — UI Test Suite (Functional Testing)

Tests written for **https://www.saucedemo.com**

| File | Test | Description |
|------|------|-------------|
| `login.cy.js` | Login Test 1 | Valid credentials → lands on Products page |
| `login.cy.js` | Login Test 2 | Wrong password → error message appears |
| `login.cy.js` | Login Test 3 | Empty fields → validation message shown |
| `navigation.cy.js` | Navigation Test 1 | Menu link has correct href attribute |
| `navigation.cy.js` | Navigation Test 2 | Products page and Cart page have correct headings |
| `form.cy.js` | Form Test 1 | Complete checkout form → order confirmation shown |

### Core Cypress commands used:
- `cy.visit()` — navigate to a URL
- `cy.get()` — select DOM elements by selector
- `cy.should()` — make assertions on elements
- `cy.type()` — type text into inputs
- `cy.click()` — click buttons or links
- `cy.url()` — assert on current page URL

---

## Task 2 — Assertions, Aliases & Custom Commands

### What Task 2 covers:

| File | Exercise | Skill Demonstrated |
|------|----------|--------------------|
| `assertions.cy.js` | Assertion Practice | `be.visible`, `have.value`, `have.attr` |
| `assertions.cy.js` | Negative Assertion | `not.exist` on error before login attempt |
| `assertions.cy.js` | Alias Practice | `.as('name')` and `cy.get('@name')` |
| `assertions.cy.js` | beforeEach Hook | `cy.visit()` runs before every test automatically |
| `custom_commands.cy.js` | Custom Commands | `cy.login()`, `cy.logout()`, `cy.addItemToCart()` |

### Custom Commands defined in `cypress/support/commands.js`:

```javascript
// Login with any username/password
cy.login('standard_user', 'secret_sauce')

// Logout via the menu
cy.logout()

// Add a product to cart by its slug
cy.addItemToCart('sauce-labs-backpack')
```

---

## Task 2 — Reflection

> **One thing I found difficult and how I solved it:**
>
> The most challenging part of Task 2 was understanding when and why to use aliases. At first,
> I thought aliases were just shortcuts for long selectors. However, I later realised their
> real purpose is to save a reference to a DOM element so it can be reused reliably later in
> the same test, even after the DOM may have re-rendered. I solved this confusion by reading
> the official Cypress documentation on Variables and Aliases, which explained that Cypress
> commands are asynchronous and that normal JavaScript variables cannot hold element references
> the same way. Once I understood this, writing the alias test became straightforward.

---

## Test Credentials (saucedemo.com)

| Username | Password | Behaviour |
|----------|----------|-----------|
| `standard_user` | `secret_sauce` | Normal login — works correctly |
| `locked_out_user` | `secret_sauce` | Blocked — shows locked-out error |
| `problem_user` | `secret_sauce` | Buggy UI — for exploratory testing |

---



```bash
npm run cy:run
```
