import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";
import { defineBase } from "@angular/core/src/render3";

declare var video: any;
@Component({
  selector: "app-spacewalk",
  templateUrl: "./spacewalk.component.html",
  styleUrls: ["./spacewalk.component.scss"]
})
export class SpacewalkComponent implements OnInit {
  constructor(private router: Router, private db: AngularFirestore) {}

  ngOnInit() {
    video.src =
      "https://res.cloudinary.com/shangyilim/video/upload/v1555750934/Silent_Partner_-_Space_Walk_Youtube_Premiere_Countdown_free_download_60_fps.mp4";
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
