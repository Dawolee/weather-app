Wanted to add view next week but can't access more than 5 days since I'm using a free account.

Was going to add a new view/template for single day view but decided to just add it to the bottom of the Weather component and let it re-render selected day info. Less components and routes but makes me wonder why I chose React (other than the state view change and currentDay change)

Used create-react-app. might need Node v 6 or higher

Was going to hide my API key in a secrets file but then you would not be able to test the API when trying to run on your computer

Made a new API request for toggling Celsius to Farenheit since didn't want to keep track of temp and days separately and convert the temp. Less efficient with HTTP requests but saves code time, time complexity (although not sure how the API request would factor in there. Not sure if it would matter since event loop and JS async).

Was going to allow searching by city name but handling country code (ISO 3166) was annoying. Could have a drop down list of cities but would take too much time to look up codes imo. Same thing with City ID

Redux might've been useful but i was rarely sending information down children and up, other than the search bar

hardcoded some default images for weather condition.

## Code-Bono!

The perfect platform to match eager and well-meaning developers with great organizations in need of tech talent on a project-based basis. Code Bono is a platform that connects nonprofit organizations with software developers looking to contribute their skills through pro bono work. Code Bono is a web application built using React, Redux, Express, Socket.io, and GitHub API Integration.

## Features

When signing up, a user can opt to sign up, as either a developer or an organization as depicted below.

![alt text](./public/responsive.gif)_as a developer_

![alt text](./public/readmePics/org-signup.png)_as an organization_

Developers can browse proposals posted by nonprofits and form teams by selecting a project that interests them. Once a team is formed for a project, users gain access to a shared collaboration space which includes GitHub Project Board integration and realtime video and text chat capabilities.
