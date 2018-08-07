import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

 
  servers=[{name:"gaurav",age:23},];
  
   constructor(private serverService:ServerService,private router:Router,private route:ActivatedRoute) { }
 
   ngOnInit() {
   
this.serverService.getServers().subscribe(res=>{
  console.log(res)
})  
 }
 ngOnDestroy(){}
 
   gotouser(){
     this.router.navigate(['/user'],{relativeTo:this.route});
   }
   addServer(){
     this.serverService.storeServers(this.servers)
     .subscribe(
       (response)=>(console.log(response)),
       (error)=>(console.log(error))
     );
   }
   getServer(){
     this.serverService.getServers()
     .subscribe(
       (servers:any[])=>
         console.log(servers)
       ,
       (error)=>(console.log(error))
     );
   }
 }