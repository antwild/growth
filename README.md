Hi!

Please see my completed task for Growth Engineering.

## Getting started

Directions for running on localhost as follows:

## The tasks

I've broken down the test into four parts - the <strong>component</strong>, the <strong>web page</strong>, the overall <strong>design</strong> and a few <strong>extra touches</strong>. 

##### The component

Firstly, I've created the component along with it's css in the folder "ConnectorSteps" in the component folder. The connector steps dynamically render the logo and name of the service that the user is querying and also has an animation that visually describes the transfer of data and the order that steps are processed in.

Two elements in the component are animated by setting their individual states and having this alter their css up until they reach the max required length. The second element is not animated until the first has completed to accurately describe the data flow within Tray.

##### The web page

I've then created a dynamic web page that follows a new route, "connectors/integrations". I've used the route "integrations" to assist with SEO, as combined with the services, the URL would read something along the lines of "/integrations/hubspot-asana".

This page utilises the already provided components (with some adjustments to <strong>Connector Hero</strong>), as well as my newly created <strong>Connector Steps</strong> component. This page renders based on the URL provided by the user, where a combination of services and how they can work together via Tray.io are presented based on any two services (in any order) from a selection.

This page can be reached by entering the URL:

> http://localhost:3000/connectors/integrations/{service1-service2}

So for example:

> http://localhost:3000/connectors/integrations/firebase-slack

You can run this with any combination of:

* Salesforce 
* Asana 
* Shopify 
* Firebase 
* Zoom 
* Microsoft Power BI (enter as powerbi)
* Microsoft Teams (enter as microsoftteams)
* Hubspot 
* Slack 
* Monday

The text displayed on the page is also partly rendered based on the service page the user has requested.

##### Design

I've designed the web page to look like a Tray.io page, so utilising colours from the live page, background designs, font and div sizes etc where possible. One item I had trouble using was the font "Akkurat" and so settled for a similar font. As the brief said to not spend a huge amount of time, I've left off some items that I would have liked to recreate such as the nav bar, but I have added a few additional touches.

##### Extra touches

In addition to the dynamic aspects of the page, I've also added an extra two buttons on the page, that again, render dynamically. These buttons "Learn more about our {service} connector" take the user to the Tray.io documentation page for that service.

I've also added a "{service 1} and {service 2} Solutions" section, which makes use of the checkmark-circle.svg found on the provided marketing page that I downloaded and inserted into this project.

#### What else?

- As this route is dynamically created, for a non technical user to add any service they would just need to add the object to the data.json file using the same "name", "slug", "logo" key/value pairs all other services are using.

- Tests for this web page would include:

* Testing the different combinations of services for the slug, which should render the correct page in the correct order - eg. "monday-shopify" should render service one as Monday.com and service two as Shopify.

* Testing what happens if a slug does not match a service in the data.json file.

- With more time, I'd like to implement that the manual trigger in the component to be interactive, that would trigger the animation on click, with an explanation appearing as the bar runs.

I'd also like to GET the operations reference for each connector and implement that into this page for a prospect to browse.