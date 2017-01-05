import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Task } from './task';
import  'rxjs/Rx';
@Injectable()
export class TaskdataService {

  constructor(private _http:Http) { }
private url:string="https://rkdemotask.herokuapp.com/Tasks/";
getAllTask(){
return this._http.get(this.url)
.map((res:Response)=>res.json());
}
addTask(item:Task)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url,body,req)
  .map((res:Response)=>res.json());

}
editTask(item:Task)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.put(this.url+item.Id,body,req)
  .map((res:Response)=>res.json());
}
deleteTask(Id:string){

  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url+Id,req);
}
deleteAll(item:Task[]){
  let body=JSON.stringify(item);
 let headers=new Headers({'Content-Type':'application/json'});
 let requestoption=new RequestOptions({headers:headers});
 return this._http.post(this.url+0,body,requestoption).map((res:Response)=>res.json());
}
}
