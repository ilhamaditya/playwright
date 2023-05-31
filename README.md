# playwright

# Run Test
# Headless All Browsers
npx playwright test
# With 3 workers in parallel
npx playwright test --workers 3 
# specific test file

# files specified
npx playwright test example.spec.js demo-todo-app.spec.js
# one or two same file name
npx playwright test example
# With title
npx playwright test -g "Title Name"
# With specific browsers
npx playwright test --project=chromium
npx playwright test --project=chromium --headed
# With headed mode
npx playwright test --headed
# debug
npx playwright test --debug
npx playwright test --project=chromium --debug
npx playwright test example.spec.js --debug
# debug specific line
npx playwright test example.spec.js:21 --debug



# See Test Result
npx playwright show-report