import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MemberService } from '../shared/member.service';
import { Member } from '../shared/member.model';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
    this.resetform();
    this.getMemberListData();
  }

  resetform(form?: NgForm){
  

    this.memberService.selectedMember = {
      _id:'',
      FirstName: '',
      LastName: '',
      ContactNo: '',
      EmailId: '',
      Password: '',
      Gender: '',
      Status: ''
    }

    if(form) {
      form.reset();
    }
  }

  getMemberListData() {
    this.memberService.getMemberList().subscribe((res) => {
      this.memberService.Members = res as Member[];
    });
  }

  onSubmit(form: NgForm) {
    form.value.Status='Y';
    if (form.value._id=='' || form.value._id==null) {
      this.memberService.postMember(form.value).subscribe((res) => {
        this.resetform(form);
        console.log(res);
        this.getMemberListData();
      })
    }

    else{
      this.memberService.putMember(form.value).subscribe((res) => {
        this.resetform(form);
        this.getMemberListData();
      });
    }
  }

  onEdit(M:Member) {
    this.memberService.selectedMember = M;
  }

  onDelete(_id:string, form: NgForm) {
    this.memberService.deleteMember(_id).subscribe((res) => {
      this.resetform(form);
      this.getMemberListData();
    })
  }

}
