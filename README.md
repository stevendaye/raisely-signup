# Raisely Signup | Simple Signup Form for Raisely
Raisely Signup is a simple signup form that let users register a Raisely account to start their Campaigns. Raisely support people's vision to raise money for their noble cause through the platform.

After a *successfull registration*, an additional feature was added to take the user to a simple **Raisely dashboard** based on the **token** and **user profile** received from the server. From this dashborad, the user can see a glimpse of Raisely main features. Another **Logout** feature was added as well to allow the user to logout and to come back to the registration page. However, he will not be able to sign in again, because no API was provided for that and was not required in this test. A **404 NOT FOUND** feature was also added in other to handle non-exsiting routes. The application is fully responsive and adapt to any screen size.

## Technologies
- HTML5
- CSS3 | Flexbox
- JavaScript | ES6+
- ReactJS 16
- React Router
- Redux | Redux Saga | Redux Persist
- Font Awesome (icons)

## How To Run
Follow these steps to run the Raisely Signup App in development.

**1- Make a clone of the app**
  * `git clone https://github.com/stevendaye/raisely-signup`

**2- Go to the root of the project**
  * `cd raisely-signup`

**3 Intall required dependencies**
 * `npm i`

**4 Run the app [at the root]**
 * `npm start`

## File Organisation
 - `./src/App.js` -- is the root component
 - `./src/index.js` -- renders the root component

 - `./src/components` -- contains all other components including a **Protected Route Component** to not allow non-registered users have access to the `./campaign` dashboard
 - `./src/types` -- a single source of truth containing action types
 - `./src/actions` -- contains signup, signout and notifications redux actions
 - `./src/reducers` -- contains signup, signout and notifications reducers
 - `./src/store` -- is the gobal store for the entire application
 - `./src/apis` -- contains APIs for making asynchronous request to raisely's backend
 - `./src/sagas` -- contains signup and notifications redux sagas for handling errors and asynchronous requests

 - `./src/assets` -- contains app's logo and icons
 - `./src/App.css` -- is where sits the whole app's style
 - `./src/Layout.css` -- makes the app responsive therefore adaptable to any screen size

## App's Routes
 - `/` = Homepage
 - `/campaign` = Campaign Dashboard Page
 - `/?` = Any Other Route Leads to 404 NOT FOUND Page

## Features Added to the Signup App
 - Protected Routes [Protects all frontend routes that require users to be logged in before accessing it]
 - Redirection [Takes user to a simple Raisely Dashboard based on the token and user profile received from the server]
 - Logout [Logs out the user from the Raisely Dashboard]
 - Responsiveness [Adapatable to any sort of screen]

## Additional Things That Could Have Been Done Regardless Of The Timimg
 - CSS3 Animation | ReactTransitionGroup to animate Landing Page upon app's mounting
 - Test [Test the app with Jest, Sinon and Chai]

## Good To Know
 - FirstName and LastName are controlled to only accepts String characters. Therefore No special characters is allowed except hyphenated names. Eg: **John Doe** is good. *John Doe12* is not good. *Anne-Marie Ford-London* is good. *Anne_Marie Ford* is not good.
 - Password was controlled to only accept Strings and Nubers. Therefore No special characters is allowed. Eg: *Hello123* is good. *hello-_123[]* is not good
 - Email is controlled to be a regular and valid email address. Eg: *john@doe.com* is good. *joHn@doe* is not good.

## Links
 - Production URL Link: `https://the-raisely-signup-app.herokuapp.com`
 - Codebase URL Link: `https://github.com/stevendaye/raisely-signup`
