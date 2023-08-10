# family-day-website

Repo status: [![Test-build](https://github.com/slacgismo/family-day-website/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/slacgismo/family-day-website/actions/workflows/test.yml)

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

The ```@/pages``` directory is unused. While still compatible, in order to manage layouts and styling in nextjs-13,it is better to add a subfolder with a page.tsx(```route_name/page.tsx```) file to add a new route. 

For custom layouts, wrap the folder name ```(folder_name)```. Add your ```folder_name.module.css``` and ```layout.tsx ``` at this level. Add a subfolder ```(folder_name)/route_name/page.tsx``` to add the route and the page. 

To adjust the background or other global settings from the ```globals.css``` file in the app root, you will need to include the following style block in your ```layout.tsx``` return statement. You will also need the "use client" statement on the first line of your ```layout.tsx```

~~~
"use client"

import styles from "./controller.module.css"

export default function ControllerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.backdrop}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <style jsx global>
        {`
            body {
                background: beige;
                color: black;
            }
        `}
      </style>
      <nav></nav>
 
      {children}
    </section>
  )
}
~~~

## testing

Currently in a basic state. Testing is done using jest, and is currently component by component. 

TODO: Implement jest puppeteer and router mocks.
