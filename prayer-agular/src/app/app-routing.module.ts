import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'create', component: CreatePostComponent },
  { path: 'posts', component: PostsComponent},
  { path: '',   redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
