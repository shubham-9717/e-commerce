import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-application-listing',
  templateUrl: './generic-application-listing.component.html',
  styleUrls: ['./generic-application-listing.component.css']
})
export class GenericApplicationListingComponent implements OnInit {

  @Input() columnArr: any = [];
  @Input() gridArr: any = [];
  @Input() view: string = 'list';
  @Input() rowArr: any = [];
  @Input() dataArr: any = [];
  @Input() isCart:boolean = false;
  @Input() search:string = "";
  @Output() callbackFunc = new EventEmitter();

  buttonStyle={"background-color": "green"};


  listNamrArr:any = []
  gridNamrArr:any = [];
  constructor() { }

  ngOnInit(): void {
    this.calculateList();
    this.calculateGrid();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.columnArr){
      this.columnArr = changes.columnArr.currentValue;
      this.calculateList();
      this.calculateGrid();

    }
    // if(changes && changes.isCart){
    //   this.isCart = changes.isCart.currentValue;
    //   if(this.isCart){
    //     this.buttonStyle={"background-color": "red"};
    //   }
    //   else{
    //     this.buttonStyle={"background-color": "green"};
    //   }
    // }
  }

  calculateList() {
    this.listNamrArr = [];
    for (let i = 0; i < this.columnArr.length; i++) {
      let arr = this.columnArr[i].split("#");
      let obj: any = { CML_TITLE: "", style: { width: "" }, key: "",type:"text" };
      if(arr[0] != "property"){
        obj.CML_TITLE = arr[0];
      }
      obj.style.width = arr[1] + "%";
      obj.key = arr[2];
      obj.type = arr[3];
      this.listNamrArr.push(obj);
  
    }
  }

  calculateGrid() {
    this.gridNamrArr = [];
    for (let i = 0; i < this.gridArr.length; i++) {
      let arr = this.gridArr[i].split("#");
      let obj: any = { CML_TITLE: "", style: { width: "" }, key: "",type:"text" };
      obj.style.width = arr[1] + "%";
      obj.key = arr[2];
      obj.type = arr[3];
        this.gridNamrArr.push(obj);
    }
  }

  callback(obj,iIndex,key){
    let iObj:any = {data:obj,iIndex:iIndex,key:key}
    this.callbackFunc.emit(iObj);
  }

  increase(iObj){
    if(iObj.qty == 1){
      return;
    }
    iObj.qty--;
  }

  decrease(iObj){
    iObj.qty++;
  }

}
