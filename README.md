# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


## Database Set Up

-name server `prime_feedback`


## General Plan

I think base mode can be done with a main reducer, activeFeedback which will contain data that looks like an array containing a single object:
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