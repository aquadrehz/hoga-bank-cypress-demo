# hoga-bank-cypress-demo
Testing project in Cypress

## Installation
- Retrieve NPM packages and start cypress
```shell
npm install
```

### Run in GUI mode
- Start Cypress
```shell
cypress open 
```
- Click each feature file for execution in GUI mode
- Cypress can navigate in each step by clicking on that step

### Run in background mode
- Start Cypress
```shell
# Run in background with no GUI
cypress run
```
- Check _mochawesome-report_ for result HTML and JSON files
- Check _screenshots_ for screenshot on failed test case
- Check _videos_ for video capture along running

## Note
- DB should be seeded when start this test script project for stable result
- These test cases can be refactored in test data set in cost of increased complexicity

