import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


declare var video: any;
@Component({
  selector: "app-start-show",
  templateUrl: "./start-show.component.html",
  styleUrls: ["./start-show.component.scss"]
})
export class StartShowComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(){
    video.src = 'https://res.cloudinary.com/shangyilim/video/upload/v1555750934/Silent_Partner_-_Space_Walk_Youtube_Premiere_Countdown_free_download_60_fps.mp4';
    video.muted = true;
    video.play().then(_ => {
        video.muted = false;
      // If preloaded video URL was already cached, playback started immediately.
    });
    video.addEventListener('ended', ()=>{
            this.router.navigate(['/start-show']);
    })
  }

}
