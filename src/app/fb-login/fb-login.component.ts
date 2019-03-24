import { Component, OnInit, EventEmitter, NgZone, OnDestroy } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

declare var FB: any;
@Component({
  selector: "app-fb-login",
  templateUrl: "./fb-login.component.html",
  styleUrls: ["./fb-login.component.scss"]
})
export class FbLoginComponent implements OnInit {
  isLoggedIn = false;

  loggedInEmitter = new EventEmitter<string>();
  
  constructor( protected ngZone: NgZone, protected httpClient: HttpClient, protected db: AngularFirestore ) {
  }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: "660226181061060",
        cookie: true,
        xfbml: true,
        version: "v3.2"
      });

      FB.AppEvents.logPageView();
    };

    ((d, s, id) => {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = ()=> {
        FB.getLoginStatus((response)=>{
          if(response.status === 'connected'){
            this.ngZone.run(()=>{
              this.loggedInEmitter.emit(response.authResponse.accessToken);
            });
          }
       });
      }
    })(document, "script", "facebook-jssdk");

   
    this.loggedInEmitter.subscribe(accessToken=>{
      this.isLoggedIn = true;
      this.db.firestore.doc('configs/fbConfig').update({
        userAccessToken: accessToken,
      });
    })
  }

  login() {
    FB.login(response => {
      if (response.authResponse) {
        console.log('response.authRespone', response.authResponse);
       this.loggedInEmitter.emit(response.authRespone.access_token);
  
      } else {
        console.log("User login failed");
      }
    }, {scope: 'instagram_basic,manage_pages'});
  }
  logout() {
    FB.logout();
  }

  getFacebookPages(){
  }

  ngOnDestroy(){
    this.loggedInEmitter.unsubscribe();
  }

 
}
