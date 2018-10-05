## buildit Weather App

Hello! This is the weather app I created for the buildit interview process. It is a fully responsive web app with some neat functionality.

![alt text](./public/responsive.gif)_responsive design_

[Here is the link to the deployed app!](https://buildit-weather-app-dawoonlee.herokuapp.com/)

## Features

Users can search for weather data by zip code or city name.

![alt text](./public/searchbyzip.gif)_searching by zip_

![alt text](./public/searchbycity.gif)_searching by city_

The app allows users to toggle between Imperial and Metric units. Users can also select on a specific day, allowing more data about the day to render out underneath. In responsive mode, the extra data is just rendered out within the single day block.

![alt text](./public/features.gif)_exploring the features_

## How to run the app

I decided to use the create-react-app starter kit to speed up the development process instead of spending time on the boilerplate. You will also need npm and node (version 6 or higher) to be able to run this app.

With that being said, create-react-app comes with some default scripts. To run the app, all you have to do is type npm install (to install the needed node dependencies) and npm run start to run the app in your local server!

## Thought process and trade offs

#### Why React

I decided to use React for this project as I wanted to make a single page web application with a lot of interactability. I did not use Redux as I thought it would be overkill for a simple web app. However, in hindsight, I ended up passing props to children from the parent and updating the parent's state from some children components, making me think using Redux would've been a good idea as it would make state management easier and neater.

#### How I handled the API response data

My thought process when first tackling this project really took form once I saw the return result of the OpenWeatherMap API request. I saw that you could make a request based on zip code, city ID and city name. Since city IDs are not as easily assessible, I decided to only support searching by zip code and city name.

I also saw that the response object returned data for all 5 days but in 3 hour intervals, for a total of 40 objects. For the sake of simplicity, I decided to just store the first three hour interval for each day.

I had the SearchBar component make the request to the API with the helper function I created, and had the SearchBar component pass the weekly data back up to the Weather component to update it's local state. I also created a toggleView function to let the Weather component swap between the search view and data view.

#### The Daily component

I stored the edited weekly weather data into the Weather component's state and mapped over it to produce the 5 card shaped weather tabs. Initially, I was going to make a separate view with for single day weather data, with the help of React Router, but decided against it after looking at some weather websites.

Instead, I created the Daily component, and passed in the index of the currently selected day from the Weather component, along with the weather data for the day, allowing the Daily component to render out more specific weather information. This choice saved me some time coming up with more routes and components, but made my Weather component look a bit messier since so much is happening inside of it. In smaller screens, the Daily component set to 'display: none' and instead, the specific weather information is rendered in each of the day's cards.

#### Toggling between Celsius and Farenheit

This was one of the first features I wanted to implement into the web app. I had two approaches in mind. One of the approaches was to store the temperatures in a separate array and converting the temperature when the toggle button was pressed. The other option, which is currently being used, was to just make a new API call for the specified measuring system.

I chose the latter option because I did not like the idea of decoupling the data for each day by taking the temperature out and storing it elsewhere. The downside to the approach I took are the extra GET requests, which could take longer than converting the data I already had, and grabbing repeated data I just had when retoggling back to the previous system. However, the load time for grabbing new data was almost instant, and being the solution that requires less code makes me think I made the right choice for this project.

#### Styling and Responsive View

Originally, I wanted to use React Bootstrap or Semantic UI for the pre-made, responsive Components they offered. However, I couldn't find the components I was looking for, and ended up only using the stylish buttons and pre-styled form inputs from React Bootstrap. Instead, I added Media Queries for mutliple viewport widths to make my web app responsive.

## What I would want to add/improve

#### Weather picture based on condition

If I had more time or a better idea of how to address the issue, I would've loved to implement a better solution for rendering out the appropriate weather picture. In the Weather component, I hard coded which picture should be displayed, starting on line 87. I noticed that the weather data included a description of the weather, such as 'light rain' or 'scattered clouds' and also included a more generic description such as 'Rain' or 'Clouds'.

I was thinking that I could just do an indexOf search for key words, such as 'drizzle' or 'light rain' or 'thunderstorm' but the amount of possibilities were too many and I ultimately decided to hard code 3 options with the default being the sunny day picture. I also noticed that the weather response data included an icon id, so I looked for a collection of icons on the OpenWeatherMap site, but could not find any.

#### API restrictions

Because I am using the free version, I was not able to access certain features OpenWeatherMap provided, such as the 16 day forecast. I really wanted to implement a feature to grab data for the next week but was not able to because of the API restrictions. I would have liked to experiment with different weather API's to see if the feature would be feasible.

In addition, I know it's not good practice to leave your API key in public, but since others would not be able to see the data without their own API key, I hard coded the key into my code.

#### Testing specs

Although I am familiar with certain testing frameworks such as Mocha and Jasmine, I was not too familiar with testing React components. Also due to my time constraints, I was not able to do enough research to learn about testing them. I had read into the basics and installed certain modules (enzyme, chai) but considering my limited time, and testing being a bonus, I unfortunately decided to leave it out. However, if I had more time, I would love to thoroughly implement tests for my web app. I only have one test currently, which tests the API call and the response object. You can view the test by typing in npm test in your terminal.

#### CSS stylesheet

I realized after finishing the project that my class names are not as clear as I wanted them to be. I also think spliting up the style sheet into different files would've led to a more neat and readable format.
