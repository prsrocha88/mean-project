import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  /*
  newPost = 'NO CONTENT';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
  }
  */

  /*
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
  */

 enteredTitle = '';
 enteredContent = '';
 @Output() postCreated = new EventEmitter<Post>();

 onAddPost(form: NgForm) {
   if (form.invalid) {
     return;
   }
   const post: Post = {
     title: form.value.title,
     content: form.value.content
   };
   this.postCreated.emit(post);
 }
}
