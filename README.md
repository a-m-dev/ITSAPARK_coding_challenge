## **ITSAPARK** coding challenge

This Repo is a simple React Project for ITSAPARK Coding challenge! This project has been containerized with Docker and there is a docker-compose.yml file in the root directory to boot up the client side service!

There is only One Service involved in this project, and it is been called `itsapark_challenge`.

Also in addition of the dockerization, I've deployed this project on Heroku and you can check this project live at: https://itsapark-coding-challenge.herokuapp.com/

## The Motivation

First of all before every thing, I thought that this project is looking to be simple and I can do this in a short amount of time, but after that i thought that since i have 3 days for this challenge, how can I improve it and make it better. So I gathered my thoughts on this challenge and provided 3 solutions.

1. First is the regular O(n) solution that every body would do.
2. Second solution is with worker, where i use a worker to calcuate the solution in other thread.
3. Third way is a bit algoritmic way to handle the large scale numbers like trizilions and much large scale numbers that i have to use `BigInt` datatype to support them.

But generally, after working 3 days separately on this mini project, I can declare that that was much fun rather than a challenge :)

## The Project Description

The client side is developer with react, I developed my entire project in modular way, in which every component has a clear folder structure for itself, which most of the time includes these files:

1. Component File itself
2. A Manager file to manage the logic of the component
3. A Sass file for styling
4. A Test file
5. `__snapshots__` folder for snapshot tests
6. An `index.js` barrel file

In my project, I followed the concept of Shared Components and Containers and as you can see I have a `components` directory which i put all my shared components like `<NumsRangeForm />` and layout ones like `<Header />`, `<Footer />` and so on.

I used `react-router-dom` to create 3 simple route for each solution and provide the related container for that route.

Also, Since I used Sass as styling preprocessor, I have a `globalStyles` directory to put all of my shared sass variables, mixins, extendables.

---

## How to run project

There are two ways to run this project, docker or the casual way:

#### casual Way

1. clone the project
2. run `npm install`
3. open the project on port `http://localhost:3000`

#### docker way

you need to install `docker` and `docker-compose` for this.

1. clone the project
2. run `docker-compose up -d`

**NOTE**: please note that if you go the docker way, you need to open `http://localhost:3010` ; b/c i mapping it to 3010 in compose file in order to avoid port confliction when checking something on local and builded container!

### one more thing, It's already deployed on Heroku:

Yes, with many thanks to services like Heroku, you can check it live at: https://itsapark-coding-challenge.herokuapp.com/

---

## what I might do in the next steps:

There is a list of things to do as a next step:

1. I might make it **responsive**!
2. I might use **typescript** for static type checking
3. I have to use **cypress** in order to have e2e tests in client side

Hope you Best!  
Ahmad (@a_m_dev)
