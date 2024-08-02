import { Component } from '@angular/core';
interface product {
  Pname:string;
  Pimge:string;
  Pcat:string;
  Pprice:number;
  pcode:number;
  }
@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  
productlist:product[] =[
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port2.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port2.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port2.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/port3.png",Pprice:20000 ,pcode:32},
  {Pcat:'mobils',Pname:'OPPO',Pimge:"assets/images/poert1.png",Pprice:20000 ,pcode:32},
]


}
