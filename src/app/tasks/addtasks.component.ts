import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdataService } from '../shared/taskdata.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styles: []
})
export class AddtasksComponent implements OnInit {
status:string[]=[
  'done',
  'pending'
];
model = {Id:'',Title:'',Status:'pending'};
  constructor(private _taskdata:TaskdataService,private _router:Router) { }

  ngOnInit() {
  }
taskSubmit()
{
this._taskdata.addTask(this.model)
.subscribe(
(data:any)=>{
  console.log(data);
this._router.navigate(['/allTask']);
},
function(error){
  console.log(error);
},
function(){
  console.log('patyu');

}
);
}
}
