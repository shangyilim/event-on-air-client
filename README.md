# EventOnAirClient

Event-on-air is a social media wall that is primarily meant to encourage/show social media engagement during events, especially used to hype the crowd when waiting for events/talks to start. Although there are providers who already does this, they usually costly and you cannot control the update frequency if you're on the free plan.

A demo is available [here](https://event-on-air-ebc25.firebaseapp.com/)

# Features
Automatically pull twitter/instagram feeds with your event hashtag

- ✅ New feeds will always appear in front of the list
- ✅ Moderate posts automatically/manually on monderator screen before showing
- ✅ Ability to adjust number of lanes on the fly, depending on screen resolution.
- ✅ Adjust header and subtitle in real time.
- ✅ Ability to configure hashtag on the fly
- ✅ Ability to configure how fast/slow new posts appear on screen
- ✅ Ability to configure how many posts can be queued before showing.

# Pre-requisites
1. A Firebase project. Sign into Firebase using your Google account, and create a new project in the Firebase console [here](https://console.firebase.google.com/)
2. **Have completed the setup for backend.** If you have not done so, please follow the  Serverless on Firebase Cloud Functions [here](https://github.com/shangyilim/event-on-air)

# Setting up the client
1. Clone this project
2. Install dependencies via npm or yarn
3. Go to the `src/environments/environment.ts` and update your firebase configuration and Facebook App Id. Be sure to update the `environment.prod.ts` as well
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
  },
  facebookAppId: "facebookAppId"
};

```
4. Start the project locally via `npm run start`
5. Navigate to http://localhost:4200/moderate 
6. Login with your Google Account as specified by 



