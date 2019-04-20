import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { collection } from 'rxfire/firestore';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { isUndefined } from 'util';

@Component({
  selector: "app-moderate",
  templateUrl: "./moderate.component.html",
  styleUrls: ["./moderate.component.scss"]
})
export class ModerateComponent implements OnInit {
  posts = [];
  searchConfig;
  user = {} as any;
  clientConfig;
  
  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {}

  ngOnInit() {

    this.afAuth.authState.subscribe(user =>{
      console.log('user', user);
      this.user = user;
    })

    const tweets$ = collection(this.db.firestore
      .collection("tweets")
      .where("approved", "==", false)
      .where("removed", "==", false));

    const instagrams$ = collection(this.db.firestore
      .collection("instagrams")
      .where("approved", "==", false)
      .where("removed", "==", false));

      combineLatest(tweets$, instagrams$).pipe(
        map(p => {
          const [tweets, instagrams] = p;

          return [
            ...tweets.map(t=> t.data()),
            ...instagrams.map(i => i.data()),
          ];
        })
      ).subscribe(p => this.posts = p);
   
    this.db.firestore
      .doc("configs/searchConfig")
      .onSnapshot(snapshot => {
        this.searchConfig = snapshot.data();
      });

    this.db.firestore
    .doc("configs/client")
    .onSnapshot(snapshot=>{
      this.clientConfig = snapshot.data();
    });

  }

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  updateAutoApprove(){
    
    this.db.doc('configs/searchConfig').update({
      autoApprove: !this.searchConfig.autoApprove
    });
  }
  setApproval(post){

    const collectionType = post.type ==='twitter' ? 'tweets': 'instagrams';

    this.db.doc(`${collectionType}/${post.id}`).update({
      approved: true,
    });
  }
  removePost(post){

    const collectionType = post.type ==='twitter' ? 'tweets': 'instagrams';
    this.db.doc(`${collectionType}/${post.id}`).update({
      removed: true,
      approved: false,
    });
  }
  toggleSpacewalk(){
    this.db.doc(`configs/client`).update({
      startSpacewalk: !this.clientConfig.startSpacewalk,
    });
  }
}
