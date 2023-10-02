import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PrayerService {
	private readonly posts: Post[] = [];
	private host = "http://localhost:5000";

	constructor(private http: HttpClient) {
	}

	public getPosts(callback: (posts: Post[]) => void): void {
		this.http.get<Post[]>(this.host + "/prayers").
		subscribe((posts: Post[]) => {
			callback(posts);
		});
	}

	public like(postID: number, callback:(postID: number) => void): void {
		this.http.put(this.host + '/pray/' + postID, null).
		subscribe((data) => {
			callback(postID);
		});
	}

	public createPost(post: Post, callback:(post: Post) => void): void {
		this.http.post(this.host + "/prayers", post).
		subscribe((data) => {
			callback(post);
		});
	}

	public deletePost(postID: number, callback:(postID: number) => void): void {
		this.http.delete(this.host + "/prayers/" + postID).
		subscribe((data) => {
			callback(postID);
		});
	}
}
