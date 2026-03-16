# AI Agent Instructions - Playwright Practice Project

## Project Overview
This is a **Playwright test automation** project for practicing end-to-end (E2E) testing. It contains browser automation tests using the Playwright testing framework targeting multiple browsers (Chromium, Firefox, WebKit).

## Architecture & Key Components

### Test Structure
- **Location**: `./tests/` directory
- **Files**: `*.spec.js` files (example: `example.spec.js`, `login.spec.js`)
- **Config**: `playwright.config.js` - centralized Playwright configuration
- **Output**: `playwright-report/` - HTML test report after runs
- **CI/CD**: `.github/workflows/playwright.yml` - GitHub Actions automation

### Configuration & Browsers
- Tests run in **parallel** by default (`fullyParallel: true`)
- Configured browsers: **Chromium, Firefox, WebKit**
- CI mode: Single worker with 2 retries (see playwright.config.js lines 26-28)
- Local mode: Multiple workers, no retries (undefined workers = auto)
- Trace collection on first retry for debugging failures

## Test Patterns & Conventions

### Selector Patterns (Prefer Accessibility-First)
```javascript
// Good - role-based selectors (accessible)
page.getByRole('link', { name: 'Get started' })
page.getByRole('textbox', { name: 'Enter mobile number' })
page.getByText('Hello, sign in')

// Acceptable - when role-based unavailable
page.locator('input[name="password"]')
page.locator("[href='/path']")
page.locator("//xpath[expression]")  // XPath if necessary
```

### Common Test Flow Pattern
1. Navigate with `page.goto()`
2. Interact with elements (`click()`, `fill()`, `type()`)
3. Wait strategically: `page.waitForTimeout()` or element-based waits
4. Assert with `expect()` from @playwright/test
5. Key assertions: `toHaveTitle()`, `toBeVisible()`, `toContainText()`

### Async/Await Usage
All Playwright operations are async - always `await` on:
- Page navigation (`page.goto()`)
- Locator interactions (`click()`, `fill()`)
- Waits (`waitForTimeout()`, `waitForNavigation()`)
- Assertions (`expect()`)

## Running Tests

### Local Execution
```bash
# Run all tests
npx playwright test

# Run single file
npx playwright test tests/login.spec.js

# Run with UI mode (interactive debugging)
npx playwright test --ui

# Run in headed mode (see browser)
npx playwright test --headed

# Debug specific test
npx playwright test tests/login.spec.js --debug
```

### CI Execution
Automated via `.github/workflows/playwright.yml` on:
- Push to `main` or `master` branches
- Pull requests to those branches

Steps:
1. Installs dependencies (`npm ci`)
2. Installs Playwright browsers (`npx playwright install --with-deps`)
3. Runs all tests (`npx playwright test`)
4. Uploads test report as artifact (30-day retention)

## Test-Specific Details

### Example Tests
- **example.spec.js**: Basic tests against playwright.dev (navigation, title checks)
- **login.spec.js**: Amazon.in login flow (email/password fields, navigation, waits)

### Current Issues/Patterns to Note
- `login.spec.js` has commented-out `page.pause()` calls for manual debugging
- Uses manual `waitForTimeout()` rather than element-based waits (opportunity for improvement)
- XPath and CSS locators mix with role-based selectors

## Key Dependencies
- `@playwright/test@^1.58.2` - Testing framework
- `@types/node@^25.3.2` - TypeScript types

## Integration Points & External Sites
- Tests against external sites: `playwright.dev/`, `amazon.in/`
- No local server setup (webServer config is commented out)
- Credentials hardcoded in test files (dev/practice only)

## Important Notes for Agents
1. **No npm scripts**: Tests run via direct `npx playwright test` commands
2. **Trace enabled**: Failures include trace artifacts in `test-results/` for debugging
3. **Parallel execution risk**: Tests targeting same external site may conflict - consider test isolation
4. **Selectors matter**: Prioritize role-based selectors for maintainability; avoid brittle XPath when possible
5. **Waiting strategy**: Improve from hardcoded timeouts to element-based waits (`waitForSelector()`, `waitForNavigation()`, etc.)

## Typical Agent Tasks
- Add new test cases in `tests/` directory following existing `.spec.js` conventions
- Refactor locators to be more maintainable (role-based where possible)
- Debug failing tests using `--debug` flag or UI mode
- Improve wait strategies to reduce flakiness
- Extend playwright.config.js for new browsers or device types
