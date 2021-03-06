import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivityService} from "../../../service/activity.service";
import {locale} from "../../../common/locale";
declare var swal:any;
@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.css']
})
export class ActivityManagementComponent implements OnInit {

  constructor(
    private activityService:ActivityService
  ) { }

  activityForm:FormGroup;

  localeArr: Array<any> = locale;

  myFile:File; /* property of File type */
  fileChange(files: any){
    console.log(files);

    this.myFile = files[0];
  }

  ngOnInit() {
    this.activityForm = new FormGroup({
      name:new FormControl('',
        Validators.required
      ),
      summary:new FormControl('',
        Validators.required
      ),
      cover:new FormControl(''),
      content:new FormControl('',
        Validators.required
      ),
      endTime:new FormControl('',
        Validators.required
      ),
      locale:new FormControl('',[
        Validators.required
      ])
    })
  }

  private prepare(){
    let form = new FormData();
    form.append('name',this.activityForm.get('name').value);
    form.append('summary',this.activityForm.get('summary').value);
    form.append('cover',this.myFile);
    form.append('content',this.activityForm.get('content').value);
    form.append('locale',this.activityForm.get('locale').value);
    form.append('endTime',this.activityForm.get('endTime').value);
    return form
  }

  createActivity(data){
    const formModel = this.prepare();
    this.activityService.createActivity(formModel)
      .subscribe(data=>{
        swal(
          '添加成功',
          '',
          'success'
        );
        this.activityForm.reset();
      },error=>{
        swal(
          '添加失败',
          '',
          'error'
        );
      })
  }

}
