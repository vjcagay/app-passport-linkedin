#Sample PassportJS Linkedin app
This is a sample app that uses [PassportJS](https://github.com/jaredhanson/passport) with [Linkedin Strategy](https://github.com/jaredhanson/passport-linkedin) in the authentication process. After authentication the app can access the user's Linkedin profile.

After cloning, run the following commands to install its dependencies:

```npm install```, ```bower install```

Type ```npm start``` to run the app.

###Important
With Linkedin's policy change in API availability ([Developer Program Transition Guide](https://developer.linkedin.com/support/developer-program-transition)), you can only access a user's full Linkedin profile if your app has been explicitly approved by Linkedin. Since this is only a sample app, it can only access a limited set of information (e.g. Work History shows only the most current one if the accessed account has multiple entries).
