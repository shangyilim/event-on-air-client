import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";

import { environment } from "../../environments/environment";

declare var video: any;
@Component({
  selector: "app-spacewalk",
  templateUrl: "./spacewalk.component.html",
  styleUrls: ["./spacewalk.component.scss"]
})
export class SpacewalkComponent implements OnInit {
  constructor(private router: Router, private db: AngularFirestore) {}

  ngOnInit() {
    video.src = environment.spacewalkLink;
    video.muted = true;
    video.play().then(_ => {
      video.muted = false;
      // If preloaded video URL was already cached, playback started immediately.
    });
    video.addEventListener("ended", () => {
      this.router.navigate(["/start-show"]);
    });

    this.db.firestore.doc("configs/client").onSnapshot(snapshot => {
      const data = snapshot.data();

      if (!data.startSpacewalk) {
        this.router.navigate(["/"]);
      }
    });
  }
}
