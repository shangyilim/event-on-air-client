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
6. Login with your Google Account as specified in the email you have entered in Firestore `admin` collection.
7. If you have setup your admin user correctly in [this guide](https://github.com/shangyilim/event-on-air), you should see the following screen:
![moderate screen](https://res.cloudinary.com/shangyilim/image/upload/v1555250789/moderate.png)
8. If you have facebook logged in, please log out and log in again.
9. Check Firestore to ensure the `userAccessToken` is automatically filled in like the screen below:
![fb config screen](https://res.cloudinary.com/shangyilim/image/upload/v1555251164/fbconfig.png)

# Deploy the client
1. Set Firebase project
```
firebase use project-id
```
2. Build for production
```
npm run build
```
3. Deploy to Firebase Hosting
```
firebase deploy
```

# Run a test!
We will need to trigger a call to get twitter posts.
1. Go to https://console.cloud.google.com/cloudpubsub/topicList?project=PROJECT_ID. Make sure to change **PROJECT_ID** with your Firebase project. If you have setup your backend correctly you should see the 2 topics appearing in page.
![gcp](https://res.cloudinary.com/shangyilim/image/upload/v1555253016/gcp.png)

2. Click on `pull-twitter-api` topic. Click publish message. Enter any description you like and click publish






