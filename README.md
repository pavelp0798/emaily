# 📧 Email survey service for startups!

**STACK: NodeJS (back end), React (front end), Redux (state management), MongoDB (database), Heroku (deployment)**

1. Register and Login using Passport.js and Google Plus Authentication Strategy (Google API)
1. Buy credits to create email campaignes and surveys (Using Stripe API)
1. Once you have credits (checking with middleware), you'll be able to create a survey.
1. You can preview the survey you've created before sending (state handleing Redux & Redux Form)
1. You can send the survey (sendgrid API)
1. Once the survey has been sent, when the user clicks on either 'yes' or 'not', sendgrid will send that response to our backend (through the set up webhook and this works even in localhost since we use localtunnel)
1. Our backend updates the DB and that is reflected in our front end since the update modifies the state of our Redux store.
