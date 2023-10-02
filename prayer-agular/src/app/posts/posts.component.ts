import { Component } from '@angular/core';

import { PrayerService } from '../service/prayer-service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private service: PrayerService) {}

  ngOnInit() {
    console.log("Getting Posts");
    // this.posts.push(new Post(1,1,"test",0,null));
    this.service.getPosts((posts: Post[]) => {
      this.posts = posts;
    });
    console.log("posts", this.posts);
  }

  public onLike(post: Post) {
    post.likes++;
    this.service.like(post.postID, (postID: number) => {
      console.log("liked post " + post.postID);
    });
  }

  onDelete(post: Post) {
    const index = this.posts.indexOf(post);
    this.service.deletePost(post.postID, (postID: number) => {
      console.log("deletd post", post.postID);
    });
    this.posts.splice(index);
  }
}
