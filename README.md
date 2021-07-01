# Exercise: Covid-19 Daily Update

*	Based on an open API, create a page with some Covid-19 info
https://documenter.getpostman.com/view/4876530/SzRxUpPv?version=latest

*	Display a page that contains the following elements

    header section
    footer section

## Part 1 - Cases summary

i.	calculate current list total of countries, confirmed cases and deaths
ii.	calculate deaths precents ratio from all the confirmed cases

```
X Countries and Territories around the world have reported a total of Y confirmed cases of the coronavirus COVID-19 and a death toll of Z deaths.
A ratio of N% Deaths from all confirmed cases
```

## Part 2 - Countries where COVID-19 has spread

1. search filter (by country) that support lowercase and uppercase  
   1.1 please add unit test (Jest or other) for search filter action  
   1.2 the seach filter is not part of the list view - only influence on current items view on the list  
2. list view of countries where COVID-19 has spread


## Part 3 - Bonus - Daily New Cases

Graph of daily new cases for specific country/worldwide
(you can use any graph implementation you like)

---

Implementation Details
•	The solution should be with React
•	The page should be responsive.

Try to pay attention to code design, quality and readability. Work iteratively. Invest up to ~3 hours. No need to invest too much.
And of course: don’t hesitate to contact us with questions if the exercise requirements aren’t clear.

---
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
