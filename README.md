
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/RajendraKumar-V/my-tmdb-app).

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

npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript
npm install --save-dev jest @types/jest ts-jest @babel/core babel-jest
     
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

To launch the test runner in interactive watch mode for your project, please use the following command. This will help you ensure the correctness of your code and assist in identifying any issues during development:

npm test

### `npm run build`

To build your app for production and prepare it for deployment, you can utilize the following command:

npm run build

Deployment
Please note that this application is not currently deployed. While there is a section in this README.md that links to the Create React App deployment documentation, the app has not been deployed at this time. You can follow the deployment instructions provided by Create React App's documentation when you decide to deploy it.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



