import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'e-commerce';
  cartArray:any = [];
  isCartOpen:boolean = false;
  dataArr1:any = [];
  view = 'grid';
  columnArr = ["property#10#CML_IMAGE_PATH#image","Name#30#CML_TITLE#text","Description#30#CML_DESC#text","Price#10#CML_COST#text","property#10#Add to cart#button","property#10#qty#count"];
  gridArr = ["property#100#CML_IMAGE_PATH#image","Name#100#CML_TITLE#text","Description#100#CML_DESC#text","Price#50#CML_COST#text","property#100#Add to cart#button","property#100#qty#count"];
  dataArr =[{
    CML_IMAGE_PATH:"./../assets/images/dagital7.jpeg",
    CML_TITLE:"LED bulb",
    CML_DESC:"Very bright and durable",
    CML_COST:200,
    qty:1

  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"LED Fan",
    CML_DESC:"Very bright and durable",
    CML_COST:300,
    qty:1

  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"Smart Tv",
    CML_DESC:"Very bright and durable",
    CML_COST:500,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"LED Fan",
    CML_DESC:"Very bright and durable",
    CML_COST:250,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"Smart Tv",
    CML_DESC:"Very bright and durable",
    CML_COST:1000,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"LED Fan",
    CML_DESC:"Very bright and durable",
    CML_COST:2000,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"Smart Tv",
    CML_DESC:"Very bright and durable",
    CML_COST:1500,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"LED Fan",
    CML_DESC:"Very bright and durable",
    CML_COST:100,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"Smart Tv",
    CML_DESC:"Very bright and durable",
    CML_COST:200,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"LED Fan",
    CML_DESC:"Very bright and durable",
    CML_COST:700,
    qty:1
  },
  {
    CML_IMAGE_PATH:"./../assets/images/e-com-logo.jpg",
    CML_TITLE:"Smart Tv",
    CML_DESC:"Very bright and durable",
    CML_COST:200,
    qty:1
  }
];

ngOnInit(): void {
 this.dataArr1 = this.dataArr;
}

callbackFunc(iObj){
  if(iObj.key == 'Add to cart'){
    this.cartArray.push(iObj.data)
    new window.Notification("Added successfully");
  }
  else if(iObj.key == 'remove'){
    this.cartArray.splice(iObj.iIndex,1);
    new window.Notification("Removed successfully");
  }
}

toggle(){
  this.isCartOpen = !this.isCartOpen;
  if(this.isCartOpen){
    this.dataArr1 = this.cartArray;
    this.columnArr = [];
    this.gridArr = ["property#100#CML_IMAGE_PATH#image","Name#100#CML_TITLE#text","Description#100#CML_DESC#text","Price#50#CML_COST#text","property#100#remove#button","property#100#qty#count"];
    this.columnArr = ["property#10#CML_IMAGE_PATH#image","Name#30#CML_TITLE#text","Description#30#CML_DESC#text","Price#10#CML_COST#text","property#10#remove#button","property#10#qty#count"];
  }
  else{
    this.dataArr1 = this.dataArr
    this.columnArr = [];
   this.gridArr = ["property#100#CML_IMAGE_PATH#image","Name#100#CML_TITLE#text","Description#100#CML_DESC#text","Price#50#CML_COST#text","property#100#Add to cart#button","property#100#qty#count"];
    this.columnArr = ["property#10#CML_IMAGE_PATH#image","Name#30#CML_TITLE#text","Description#30#CML_DESC#text","Price#10#CML_COST#text","property#10#Add to cart#button","property#10#qty#count"];
  }
}

evnt(iEvent){
  iEvent.stopPropagation();
}


changeView(iEvent){
  iEvent.stopPropagation();
  if(this.view == 'list'){
    this.view = 'grid';
  }
  else {
    this.view = 'list';
  }
}


}
