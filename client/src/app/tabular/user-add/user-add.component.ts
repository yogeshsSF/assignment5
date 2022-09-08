import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {Role} from '../../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Output () updatedData = new EventEmitter();
  addUserForm: FormGroup;
  addButtonClicked = false;
  role = Role;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      'firstName': new FormControl(null,[Validators.required]),
      'middleName':new FormControl(null),
      'lastName':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phoneNumber':new FormControl(null,[Validators.required]),
      'role':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'address':new FormControl(null,[Validators.required]),
      'createdDate':new FormControl(null)
    })
  }

  onSubmit(){
    if(this.addUserForm.status === "INVALID"){
      this.addButtonClicked = true;
      return;
    }
    // else if(this.addUserForm.get('role')){
      
    // }
    else{
      this.addButtonClicked = false;
      this.addUserForm.patchValue({
        'createdDate': new Date()
      })
      this.userService.addUser(this.addUserForm.value).subscribe(responseData=>{
        this.addUserForm.reset();
        this.updatedData.emit();
      })
    }
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}|null {
    if (control.value in this.role) {
      return null;
    }
    else{
      return {'roleIsForbidden': true};
    }
  }

}
