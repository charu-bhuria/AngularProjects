import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // user = {
  //   email: '',
  //   password: ''
  //     };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  // onSubmit(theForm: NgForm) {
  //   this.user.email = theForm.value.email;
  //   this.user.password = theForm.value.password;
  //  console.log(this.user);
   
  // }
  onSubmit(form: NgForm) {
    this.http.post('https://jsonplaceholder.typicode.com/posts',{
      userId: Math.random(),
      id: Math.random(),
      title: form.value.title
    }).subscribe(res =>{
console.log(res);
//alert(res.title);
    }, error =>{
console.log('Something Went Wrong');
    });
   }
}
