# 💻 Project & Portfolio II

# Project Name: WDP2 Portfolio Project

### Jacob Ols

🆔 &nbsp; 0004707323

📪 &nbsp; jdols@student.fullsail.edu

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>
![Class Name](https://img.shields.io/badge/Class-Project%20and%20Portfolio%20II-orange?logo=react)

<br>

## 📢 &nbsp; Milestone Check-Ins

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a succinct update on how things are going.  
Use the prompts below as a guide on what to write about.  
For each Milestone #2-4, you should use all 4 icons.

⚙️ Overview - What I worked on this past week
<br>
🌵 Challenges - What problems did I have & how I'm addressing them
<br>
🏆 Accomplishments - What is something I "leveled up" on this week
<br>
🔮 Next Steps - What I plan to prioritize and do next

<br>

### Milestone 1

For this milestone you will have created a wireframe prototype in Figma.  
Post your link here, so you have easy access to it.

- Figma Link:: https://www.figma.com/file/zXuSETBBH9pb1TA3PupQGG/My-Anime-Academia?type=design&node-id=75%3A272&mode=design&t=bRAiOptGSeml1w9W-1

<br>

### Milestone 2

⚙️ Overview - Write overview here.
<br>
🌵 Challenges - Write challenges here.
<br>
🏆 Accomplishments - Write Accomplishments here.
<br>
🔮 Next Steps - Write your next steps here.

<br>

Please discuss the following:
This week I created the shell of My Anime Academia. I created the home, forms, profile, and stash pages. Each page has been minorly styled to depict what page they are going to be. <br>
This weeks biggest challenge was laying out the project and keeping my pages and components organized while trying to link everything together. I also struggled a bit using the nextUi react library for components for my webpage. <br>
I feel accomplished being able to use the github issues and projects list to keep track of each part of my web page as I was building and styling each part of it. I also feel accomplished being able to use react router and it working on my first go with it. I struggled quite a bit in the past using react router. <br>

The next steps for my webpage is to build the back-end using NodeJS and Express and create a mongodb database. I will also be connecting my API to my front end to display animes on the stash page as well as the discovery page. I will create three databases using MongoDB. One of the databases will be used to store user profile information, while one of the other will take the ID and store it from the json data returned from the API and then the webpage will use that ID to fetch the data from the API again in the stash page. The last database will be used to store the data for the discussion form page.

#### Page #1

- Home
- The home page will act as a discover page. Users will be able to search for and discovery new animes and add the ones they are interested in into their stash.

#### Page #2

- Profile
- The profile page will store user information. Their first name, last name, email, favorite anime, and favorite anime genre.

#### Page #3

- Forms
- The forms page will act as a discussion form for users to be able to connect to other users, discuss topics they are interested in, and discover more information about new anime's they are interested in.

#### Page #4

- Stash
- The stash page is used to store the users "stash" of animes they are interested in. They can add new anime's to their stash from the home page. The users can remove the anime's from their stash list when they are done watching them with the remove button as well. The search feature can be used to find anime's the user has added to their stash.

#### Remember that creating a project board, issues, and milestones is 50% of your grade!

If you are having trouble, contact your instructor ASAP, you might need to be part of the ePortoflio group to have better access.

<br>

### Milestone 3

⚙️ Overview - This week I created and connected my back-end to my front-end of my web application. Use MongoDB I created two databses, One to hold forms for my disussion page, and one to hold the ID for the users anime's they will add to their stash. I use the jikan API to fetch the data for the anime's viewed by the user. The stash page fetches the anime's by ID and display's the data to the stash page.
<br>
🌵 Challenges - Write challenges here.
My biggest challenge this week was iterating through my array of ID's from my mongoDB to display each of the anime's in the array. I faced challenges using useEffect, and useState to store the information from the API and mongoDB.
<br>
🏆 Accomplishments - Write Accomplishments here.
I feel very accomplished with how my web applications looks so far, and that it has functionality behind it. I am proud of being able to problem solve and fix bugs and issues throughout this week.
<br>
🔮 Next Steps - Write your next steps here.
My next step is to finish styling my web page. I also plan to continue working on functionality for some more features for my web applcation.

<br>

Please discuss the following:

#### API

- Link to the API that is used in your code
  Jikan Anime API: https://jikan.moe/
- Reason you chose the API
  I chose this API because it was free to use with the use of a key. This anime API had the largest database for anime shows, and movies.
  Using this API was easy, and very userfriendly. Their documentation was easy to read and use as well.
- Where in your code did you use it?
  I used this api in two places. On my home page I utilized this API two times. Once for my intial get request to fill the page with
  list of Anime shows and movies for the user to discover. The second was for when the user uses the search bar feature. Both of the uses are for get request.

I also used this API on my stash page. For my stash page my mongo server stored the ID number of the anime and then used a GET request by ID to find the anime show or movie and display it on the stash page.

#### 1st Library

- Link to the library
  Axios:: https://axios-http.com/docs/intro
- Link to library tutorial that you made already.
  MS Stream tutorial Video:: https://fullsailedu-my.sharepoint.com/:v:/g/personal/jdols_student_fullsail_edu/Eec9VU4ukKFArIW-uvlRqicB-akKReAT3Ib_OxNZkiVhGw?e=MCTmp3&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D
- Reason you chose this library.
  I chose axios to use it to fetch the API. I felt most confident in using axios to make my API calls, and handle my set state functions in those api calls.
- Where in your code is it used?
  I used Axios on my home page, forms page to make all my API and mongodb server calls for my get request and post request.

#### 2nd Library

- Link to the library
  Next UI:: https://nextui.org/
- Reason you chose this library.
  I chose this library for the components I used in my web application. I enjoy the design of each of the components I used from them.
- Where in your code is it used?
  The code from this library was used in my card component, search bar component, buttons, Home page, stash page, and my profile page.

#### Persistent Data

- Discuss if you have used MongoDB or Local Storage.
  I used two MongoDB to store my data for my post and get request. For my forms and my stash page as well as on my home page when post the ID of the anime to my mongo server.
- How was it used in your code?
- Where in your code is it used?
  The forms mongodb was used to post new discussion post as well as get ones already created. I used a post method on my home page to store the ID of the anime being added to the users stash. I used it again on my stash page to get that ID and iterate through the array of ID's and make an API call for each of those ID's stored and display the anime data from the API to the stash page. All of the logic for my mongodb is on my server side of the web application.

<br>

### Milestone 4

⚙️ Overview - This week I finished styling each one of my pages. Each page needed padding, colors, and text updated and finished. I did not need to make layout changes.
<br>
🌵 Challenges - My challenge this week was trying to create a remove button on my stash page. Unfortantly I was unable to complete this challenge but will still be working toward creating a functional remove button from my stash page.
<br>
🏆 Accomplishments - My accomplishments this week include include finishing each of my pages styling, creating my fetch method for my stash page and make it work as it should. I learned a lot and grew as a developer using the MERN stack. I am more comfortable and confident working with react and problem solving as I ran in to quite a bit of issues while creating my stash page.
<br>
🔮 Next Steps - My next steps is to continue to work on and finish this web application to its full potential. I plan to create an edit button and comment button on my forms page, a remove button on my stash page, as well as create an info popup display for the anime to display information such as rating, description, and genre.

<br>

Please discuss the following:

#### Changes

- Discuss any changes or updates that you have made to your site since Milestone #3.
  I made changes to background color, padding, and other styling to components and pages for my web application. I will continue to work on improving all aspects to my page.

#### Styling

- Discuss the process you used to style your page.
  I styled each page as I worked on them throughout the month. With this weeks milestone I mainly focused on cleaning up any styling I did not like, and any issues I was having with my code.

#### Link To Overview Video

- Once it is created, put the link to your overview video of your site here.
  Link to video Presentation: https://fullsailedu-my.sharepoint.com/:v:/g/personal/jdols_student_fullsail_edu/EamphVJijblNiW9N4w95YuUBrIcfMUQmLMQXe1m3JqWCjw?e=yZtS9c&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

<br>
<br>
<hr/>

# Project Overview

### Your project will use the MERN Tech Stack and must include the following:

- A Git Repo, with a master, dev, and milestone branches
- Readme File that explains your project and tracks your milestones
- A React Front End
- React Routing with _at least_ 4 different views/pages
  - Dashboard/Main
  - User/Settings
  - Search
  - Detail Page
- Node/Express Backend
- A Mongo DB Element OR Local Storage for persistent data
- Connect to at least 1 free API
- The project must use at least 2 different libraries, not including React itself
  - One of these libraries you will create a tutorial for in Exercise 01
- It should look visually appealing and must be easy for the end-user to use and understand. You may use Tailwind or any other front-end library/framework.

**Milestone #1 (Due: Monday of Week 2)**

- Decide on your topic and theme for your project.
  - Check out the Free API sites for some ideas of an API that you can utilize
    - [Apipheny](https://apipheny.io/free-api/)
    - [Mixed Analytics](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)
    - [I Am Sajan](https://iamsajan.com/free-api-without-an-api-key/)
- Functional Spec that explains the scope of the work and the deadlines that must be met.
- Create a Wireframe Prototype in Figma that will help non-tech people understand your idea.
  - Keep in mind that a lot of your bosses will need only high-level concepts and will not be concerned with the actual code. The code is your job.

**Milestone #2 **(Due: Monday of Week 3)\*\*\*\*

- Create your Git Repo using the provided link, which will clone over a blank repo.
- Start to code your project.
  - I will not give you a step-by-step guide for this.
  - At this point, you must use your skills and build it out yourself.
- Along the way, if you get stuck, you may reach out to the lab assistants, but remember this is YOUR portfolio project, and troubleshooting your own code is a part of this process.
- By Milestone #2, I am going to be checking that you have a React app that can compile without error and that you have your navigation up and running.

**Milestone #3 **(Due: Monday of Week 4)\*\*\*\*

- By this point, you should have a functional prototype of your project. It might not look pretty yet, but that is what the final week is for.
- Your Git Repo should have a number of significant commits pushed to it.

**Milestone #4 **(Due: Sunday of Week 4)\*\*\*\*

- Your completed project will be due.
- You must create a (3 to 10) minute long video that goes through your project, what you did this month, and the technologies that you used to get it working.
  - Remember it is your job to sell your work and really show it off.
# my-anime-academia
