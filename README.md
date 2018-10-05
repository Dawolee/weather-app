Wanted to add view next week but can't access more than 5 days since I'm using a free account.

Was going to add a new view/template for single day view but decided to just add it to the bottom of the Weather component and let it re-render selected day info. Less components and routes but makes me wonder why I chose React (other than the state view change and currentDay change)

Used create-react-app. might need Node v 6 or higher

Was going to hide my API key in a secrets file but then you would not be able to test the API when trying to run on your computer

Made a new API request for toggling Celsius to Farenheit since didn't want to keep track of temp and days separately and convert the temp. Less efficient with HTTP requests but saves code time, time complexity (although not sure how the API request would factor in there. Not sure if it would matter since event loop and JS async).

Was going to allow searching by city name but handling country code (ISO 3166) was annoying. Could have a drop down list of cities but would take too much time to look up codes imo. Same thing with City ID

Redux might've been useful but i was rarely sending information down children and up, other than the search bar

hardcoded some default images for weather condition.

## buildit Weather App

Hello! This is the weather app I created for the buildit interview process. It is a fully responsive web app with some neat functionality.

![alt text](./public/responsive.gif)_responsive design_

## Features

Users can search for weather data by zipcode or city name.

![alt text](./public/searchbyzip.gif)_searching by zip_

![alt text](./public/searchbycity.gif)_searching by city_

The app allows users to toggle between Imperial and Metric units. Users can also select on a specific day, allowing more data about the day to render out underneath. In responsive mode, the extra data is just rendered out within the single day block.

![alt text](./public/features.gif)_exploring the features_

## How to run the app

I decided to use the create-react-app starter kit to speed up the development process instead of spending time on the boilerplate. You will also need npm and node to be able to this app.

With that being said, create-react-app comes with some default scripts. To run the app, all you have to do is type npm run start and the app will start to run on a local server!

## Thought process and trade offs

## What I would want to add
