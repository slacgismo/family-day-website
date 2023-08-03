# family-day-website

To run locally, follow the steps below:

~~~
cd family-day
npm install
npm run dev
~~~

Now you can access this app on ```localhost:3000```!

Follow the link to the correct page for the family day application.

## Structure

The ```@/src/app``` directory contains the ```page.tsx``` file, which is the main entrypoint.

```layout.tsx``` contains the main metadata, and is used to integrate the ReduxProvider into the rest of the app.

The "modules" directory contains the building-block modules I use for different pages, as well as the "ReduxProvider" module.

The ```@/src``` directory contains the "reducers" directory, for all the redux state-management functions. The "store", which manages the reducers, and "utils", which contains all general functions, are also included here.

The ```@/pages``` directory contains the additional pages that can be routed to. Adding folders and subfiles inside this directory appends them as new route options automagically.

## testing

Currently in a basic state. Testing is done using jest, and is currently component by component. 

TODO: Implement jest puppeteer and router mocks.
