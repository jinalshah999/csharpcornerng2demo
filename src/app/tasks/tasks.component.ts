import { ChangeDetectionStrategy,Input, Component, OnInit } from '@angular/core';
import { TaskdataService } from '../shared/taskdata.service';
import { Task } from '../shared/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   @Input('data') meals: string[] = [];
    page: number = 1;
allTasks:Task[]=[];
  constructor(private _taskdata:TaskdataService) {
    
   }

  ngOnInit() {
    this._taskdata.getAllTask().subscribe(
      (data:Task[])=>{
          this.allTasks=data;          
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('badhu pati gayu');
      }
    );

  }
deleteStatus(item:Task){
  this._taskdata.deleteTask(item.Id)
  .subscribe(
    (data:any)=>{
      this.allTasks.splice(this.allTasks.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      alert('deleted successfully');
    }
  );
}

updateStatus(item:Task){
  this._taskdata.editTask(item)
  .subscribe(
    (data:any)=>{
      if(item.Status=="done")
      {
        item.Status='pending';
      }
      else
      {
          item.Status='done';
      }
    },
    function(error){
      console.log(error);
    },
    function(){
      alert('Edited successfully');
    }
  );
}
delarr:Task[]=[];
checkbox(item:Task){
this.delarr.push(item);

}
i:number=0;
str:string='';
checking(){
  this.str='';
  for(this.i=0;this.i<this.delarr.length;this.i++){
    this.str+=this.delarr[this.i].Id;
  }
  alert(this.str);
}
}
