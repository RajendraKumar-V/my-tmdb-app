# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Dependencies or packages installed`

Axios 
React router DOM
React Error Boundary
Tailwind css - for better and rich UI

### `Commands`

npm install axios react-router-dom react-error-boundary

### `Tailwind CSS Set Up`

-Install following packages
     npm install -D tailwindcss
     npx tailwindcss init
-Add the paths to all of your template files in your tailwind.config.js file
-npx tailwindcss -i ./src/custom.css -o ./dist/output.css --watch

### `Jest Set Up`
Jest: The core testing framework.
npm install --save-dev jest

@testing-library/react: Provides utilities for testing React components.
npm install --save-dev @testing-library/react

npm install --save-dev jest@^28

@testing-library/jest-dom: Extends Jest matchers for better assertions in your tests.
npm install --save-dev @testing-library/jest-dom

npm install --save-dev jest@^29

ts-jest: Allows Jest to work with TypeScript.
npm install --save-dev ts-jest

@types/jest: TypeScript types for Jest.
npm install --save-dev @types/jest
     
### `Functionality implemented`

-Created custom hooks to fetch data from API based on the API URL's.
-TabNavigation functionality to switch between movies and series tab.
-Error handling by implementing error boundaries.
-Implemented routing.
-Overlay concept implemented on click on movie card it will be on movie list page itself
 and movie detail page displayed in a pop-up.Same functionality implemented for series also. 
-On click on movie cards in movies list page based upon on the movie id 
It will be redirected to movie detail page.
-On click on close button it will redirect user to movie list page.
-On click on series cards in series list page based upon on the series id 
 it will be redirected to series detail page.
-On click on close button it will redirect user to movie list page.
-On mouse hover on movie cards image will zoom in.
-On mouse hove on movie cards,movie title displayed in a tooltip.
-For rich UI experience implemented tail wind css.

### `Screen shots`
-Movie list screen 
![Movie_list Screen](./src/ScreenShots/Movie_List.PNG)

-Movie detail screen
![Movie_detail Screen](./src/ScreenShots/Movie_Detail.PNG)

-Series list screen
![Movie_detail Screen](./src/ScreenShots/Series_List.PNG)

-Series detail screen
![Movie_detail Screen](./src/ScreenShots/Series_Detail.PNG)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
