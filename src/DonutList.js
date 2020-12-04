// displays list of donuts to DOM

// imports
import react from 'react'

export const DOcnutList = () => {
    return (
        <>
        <p>Hello I am donut List</p>
        </>
    )

}



/*
// get all components rendering on page just a simple string
create new DonutList.js module
  get it to render to DOM - basic text
  add funciton to return basic text
create a nav bar
  npm install --save react-router-dom
  create new NavBar.js module
  import react
  import link from react-router-dom
  add export const NavBar and return JSX with navbar html
add <NavBar /> to app.js
  expect error not use lnk outside a router
Go to index.js
  import browserRouter as Router from react router dom
  add <Router> <Router /> wrapper around <App /> inside the REact.StrintMode
  route function is now available to app.js
  all index.js is put the app on the DOM
  all nav bar does is change URL
WE need a component that will watch URL and render the correct component based on link
add new ApplicationViews.js
  import react
  import route from react-router-dom
  export const ApplicationViews funciton
   returns JSX fragment <>  </>
   add <Route><Route /> for / wrap inside JSX so the <home /> comonent will route when the homepage chagnes to /
   may see errors about undefined. if so, add props to application views for user
   in App.js remove home where use is passed and have app pass to applicationview and then down to homepage via props

make routes for FAQ and Donut list
   add link to NavBar.js
   add FAQ to applicationview.js add route path = /FAQ
   remove FAQ from app.js as it should be rendering twice.

make route for donutlist
  add route to applicationviews for donuts and then call donutlist
  check link in bar for donuts when navbar is selected
  create new module dataprovider.js
    create donut data objects - copy from bay and marble database.json
    import React useState from react
    export const DonutContext = reac.createcontext()
    export const DocnutProvider = (props) => {}
    copy from JS bay and marble - distch export tag on get and createdonut
    modify from vanills js to react w/ useState and return context.provider
If donustlist wants data form donutprovider we need to 
  import DonutContext into donutlist from donutprovider
  donutlist now has access to getdonuts context
  in applicationviews.js - wrap donutlist in the donutprovider tags so donustlist is allows to use getdonuts
  add useEffect inside of donstlist.js Donutlist function, call getdonuts inside of useEffect
  check in devtools components to check donut data to ensure useEffect worked
  now in the donutlist.js return statement we can add a donuts.map to print each donut name.

add new donut.js compnent
  import react
  export const donut function with return
  

  













  
















Go back to 









*/


