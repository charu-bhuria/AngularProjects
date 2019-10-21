import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstname = 'Charu';
  keyDown;
  lastname: string;
   status: boolean;
  posts: object[];
  user = {
email: '',
password: ''
  };

  constructor(){
    console.log('constuctor........')
    this.lastname= 'Bhuria';
    this.getUserStatus();
    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'}
    ];
  }

  displayFirstName(){
    return this.firstname;
  }
  getUserStatus(){
    this.status=true;
  }
  buttonclick(){
    alert('testbutton');
  }
  mouseover(){
    alert('Just movse hover processs');
  }
  keydowing( data ){
    this.keyDown = data;
    //alert('keydowing test');
  }
  onSubmit(theForm: NgForm) {
    this.user.email = theForm.value.email;
    this.user.password = theForm.value.password;
   console.log(this.user);
   //this.http.get('/post', this.user)
  }

  }
