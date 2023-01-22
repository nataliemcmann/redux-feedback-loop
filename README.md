## Feedback Survey

Here's a survey intended to gather the mood, understanding and sense of support of people who have participated in a learning event, like a class or training. 

## Technology

- PostgresSQL and Postico
- React
- Express
- Node
- React Router
- Redux
- Material UI (https://mui.com/)

## Installation

1. Make sure Postgres SQL and Postico are installed. Using Postico, create a database named `prime_feedback`.
2. Run the queries from data.sql to set up the database in Postico.
3. Open your text editor of choice and run an `npm install` in your terminal
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. Upon running `npm run client`, a new browser tab will open for you!

## Usage

Upon opening the survey, the user will be asked to provide feedback on their general mood or feelings during the day. They can input 1 - 5, 1 being generally unhappy, 3 being ambivalent, and 5 being generally happy. Once they input a number, they will be able to click next, which will take them to the next question.

![feelings](screenshots/feeling.png)

The next question evaluates their level of understanding on a scale of 1-5. Again, 1 is poor and 5 is the best. Once they have selected a number, they can click next and continue to the next question.

![understanding](screenshots/understanding.png)

The final required question asks how they would rate their feeling of support on a scale of 1 - 5. 1 is unsupported and 5 is well-supported. 

![support](screenshots/support.png)

After support, the user is given the option to elaborate on their experience with a comment. 

![comments](screenshots/comment.png)

When they hit next, they will be taken to a review page where they can review their feedback as a whole. If they want to go back to page to change their feedback, they can click the pencil icon. Once they return back to the review page, they can hit submit.

![review](screenshots/review.png)

 If the data is successfully posted to the database, the user will be taken to the success page. 

![success](screenshots/success.png)

Finally, the owner of the training event can go to http://localhost:3000/?#/admin to view the survey results. 

![admin](screenshots/admin_view.png)

## Technologies
-Javascript -CSS -HTML

## Acknowledgement
Thanks to Prime Digital Academy who equipped me with the skills to make this application a reality.

## General Plan

If you're interested in how I built this app in a two-day sprint, read on!

## How to complete base mode

I think base mode can be done with a main reducer, which will contain data that looks like an array containing a single object:
    ```js
    {
        feeling, 
        understanding,
        support,
        comments
    }
    ```

There's probably a way to do it where you access the property of each state, but for now, I may add four more reducers for each page, then combine them into one object to post to the database. So 5 reducers in total will live in index.js.

Page 1: How are you feeling?
    - needs to dispatch data to a feelings reducer
    - next button/dispatch disabled if no value (validation)
    - next button sends person on to next page

Page 2: Understanding
    - needs to dispatch data to an understandings reducer
    - next button/dispatch disabled if no value (validation)
    - next button sends person on to next page

Page 3: Support
    - needs to dispatch data to an support reducer
    - next button/dispatch disabled if no value (validation)
    - next button sends person on to next page

Page 4: Comments
    - needs to dispatch data to an comment reducer
    - next button sends person on to next page (input not required)

Page 5: Review Feedback
    -display all entered feedback (does not need to be editable for base mode)
    -submit should post object containing all data to the server
    -submit should send user to submission success page

Page 6: Submission Success

## Stretch Goals

I added an admin page first, because I was not using a GET route in base mode, just a post route. The admin page displays all feedback that was sent to the database. 

Next steps are to style a little with material UI and allow users to edit their responses in the review page (add a pencil icon that will take them back to that page so they can change their response).