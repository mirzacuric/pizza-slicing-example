# pizza-slicing-example

# Setup an app

Clone the repo from https://github.com/mirzacuric/pizza-slicing-example.git

Run `npm install` to add all dependencies

Run `npm start` to start an app after all dependencies are added.

App is running on port `9000` and all routes are accessible with prefix `api/`

# Pizza enpoints

Provide two-dimensional array where first element indicates the number of test cases (nested arrays).
Rest are valid values indicating the set of values needed for calculations.

In order to find the highest value of optimal path request goes like this:
    
    endpoint: `${BACKEND_URL}/api/pizza/slice`

    payload: points: [
        [4],
        [20,6,60,0,0],
        [20,6,59,59,59],
        [30,20,33,30,0],
        [40,200,120,0,0]
    ]

    expected output: [
        209.439510,
        209.444358,
        263.108385,
        1675.516082
    ]