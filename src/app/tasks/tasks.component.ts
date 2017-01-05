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
      if(this.delarr.find(x=>x==item))
       {
         this.delarr.splice(this.delarr.indexOf(item),1)
       }
       else{
         this.delarr.push(item);
          }

}
i:number=0;

deleteAll(){
   this._taskdata.deleteAll(this.delarr).subscribe(
       
         (data:any)=>{
           for(this.i=0;this.i<this.delarr.length;this.i++)
           {
              if(this.allTasks.find(x=>x==this.delarr[this.i]))
               {
                  this.allTasks.splice(this.allTasks.indexOf(this.delarr[this.i]),1);
                }
           }
           
         },
         function(err){console.log(err);},
         function(){
           this.delarr=[];
           console.log("Complete");
         }
       
     );
}
}
