# Playwright SauceDemo Test Suite

Automated end-to-end test suite for [SauceDemo](https://www.saucedemo.com) built with Playwright and JavaScript, following the Page Object Model (POM) design pattern.

---

## Tech Stack

- [Playwright](https://playwright.dev/) - End-to-end testing framework
- JavaScript (ES Modules)
- Page Object Model (POM)

---

## Project Structure

```
playwright-saucedemo/
├── pages/
│   ├── LoginPage.js        # Login page locators and actions
│   └── InventoryPage.js    # Inventory page locators and actions
├── tests/
│   ├── login.spec.js       # Login test cases
│   └── inventory.spec.js   # Inventory test cases
└── playwright.config.js    # Playwright configuration
```

---

## Test Coverage

### Login Tests (`login.spec.js`)
| Test Case | Description |
|---|---|
| Login with valid credentials | Verifies successful login redirects to inventory page |
| Login with invalid credentials | Verifies error message is displayed |

### Inventory Tests (`inventory.spec.js`)
| Test Case | Description |
|---|---|
| Inventory page shows 6 products | Verifies all 6 products are displayed |
| Inventory page title is correct | Verifies page title is "Products" |
| Add to cart updates badge | Verifies cart badge updates to "1" after adding a product |

---

## Getting Started

### Prerequisites
- Node.js v18 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/MousavianHanieh/playwright-saucedemo.git
cd playwright-saucedemo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run all tests (headed - see the browser)
npx playwright test --headed

# Run a specific test file
npx playwright test login.spec.js

# Run on a specific browser
npx playwright test --project=chromium

# View HTML report
npx playwright show-report
```

---

## Cross-Browser Testing

Tests run across **3 browsers** by default:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)

---

## Key Concepts Demonstrated

- **Page Object Model (POM):** Each page has its own class with locators and actions, making tests maintainable and reusable.
- **beforeEach Hook:** Shared preconditions (navigation and login) are handled before each test.
- **baseURL Configuration:** Base URL is defined once in `playwright.config.js`, not repeated in every test.
- **Cross-browser Testing:** Single test file runs across Chromium, Firefox, and WebKit automatically.
- **Auto-waiting:** Playwright automatically waits for elements to be ready, no manual waits needed.
