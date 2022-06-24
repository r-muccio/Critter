# Critter Project (Twitter Clone)

This web app is a humous clone of the Twitter platform. The front end is built with React.js. The server is built with Node.js and Express.js. No database is used. Instead, the server uses a data file to simulate a database. 

<h2>Home Feed</h2>

The user starts on their Home feed. They can scroll down to see what others are posting. They have the option to post a "meow". Get it? Like posting a tweet :) 
![HomeFeed](https://user-images.githubusercontent.com/91158694/175574880-15e93fea-1efd-4592-90b4-aaee1c714b2d.png)


<h2>Posting a meow</h2>

When typing a meow, a character counter will go yellow when the meow has reached 80% of it allowed characters. Once more than 250 characters is reached, the character counter becomes red and the meow button is disabled until the user shortens their post.
![Cannot post - over limit](https://user-images.githubusercontent.com/91158694/175575925-0ad60498-bf1d-4ad6-8bac-6984dca97c01.png)


<h2>Meow - large view</h2>

Clicking on any tweet brings the user to an enlarged version of that tweet.
![Large version of tweet](https://user-images.githubusercontent.com/91158694/175576375-aff1798e-2732-48b5-bb0b-e701162190f2.png)


<h2>Profile view</h2>

Clicking on any user's name brings you to their profile page. Below their profile picture are their own meows, and any meows they have re-meowed. The current user can also access their profile page from the sidebar.
![Profile](https://user-images.githubusercontent.com/91158694/175577530-11c077f7-5f4b-48ac-97ed-ccaa6e88f43e.png)


<h2>Error page</h2>

The server is set up to simulate failed requests at random intervals. When this occurs, the app does not crash. Instead, the user is brought to an error page, and is encouraged to refresh their browser.
![ErrorPage](https://user-images.githubusercontent.com/91158694/175578687-d73c9dc2-d3e7-4718-8fc4-03a8a66e782e.png)

