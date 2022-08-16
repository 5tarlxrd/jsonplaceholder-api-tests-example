# jsonplaceholder-api-tests-example

API tests for https://jsonplaceholder.typicode.com/

This framework was developed with NodeJS, Typescript, Jest, AJV and Axios.

## Quick Start
1. NodeJS is required for this project, you can find installation instructions [here](https://nodejs.org/en/).
2. Clone this repository:
    ```sh
    git clone https://github.com/5tarlxrd/jsonplaceholder-api-tests-example.git
    ```
3. Go to the repository directory in the Terminal/Command line and run the following command to install dependencies:
    ```sh
    npm i
    ```

## Run Tests Locally
You can simply run tests locally by the following command:
```sh
npm test
```
Also, you can configure API URL providing `BASE_URL` environment variable.

### Reports
After running with `npm test` reports will be generated in the `reports` directory:
-   `jsonplaceholder-api-tests.xml`: JUnit report.
-   `index.html`: HTML report.

## CI
A `run_tests` job is executed in CircleCI.
Test reports are stored as artifacts for every execution of the `run_tests` job.