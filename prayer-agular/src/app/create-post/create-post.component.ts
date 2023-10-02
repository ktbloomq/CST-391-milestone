import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PrayerService } from '../service/prayer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  post: Post = new Post(0,1,"",0,null);
  content: string = "";

  constructor(private service: PrayerService, private router: Router){}

  onSubmit() {
    this.post.content = this.content;
    this.service.createPost(this.post, (post: Post) => {
      console.log("posted", this.post.content);
    });
    this.router.navigate(['/posts']);
  }
}
