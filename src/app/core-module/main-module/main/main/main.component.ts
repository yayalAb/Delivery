import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/app/core-module/auth-module/guard/guard.guard';
import { ServiceService } from 'src/app/core-module/Service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('sidebarTreeviewInstance')
  public sidebarTreeviewInstance!: SidebarComponent;
  @ViewChild('treeviewInstance')
  public treeviewInstance!: TreeViewComponent;
  public width: string = '290px';
  public enableDock: boolean = true;
  public dockSize:string ="44px";
  public mediaQuery: string = ('(min-width: 600px)');
  public target: string = '.main-content';
  public data!: Object[];
  public authUser!:Object[];
  public authUserCust!:Object[];
  user!:Observable<any>;
  @Input()
  role:any;

  @Input()
  id:any;
 public treeSettings={loadOnDemand:true};
  constructor(private router:Router,
    private serv:ServiceService,
    private rout:AuthGuard){  }
  ngOnInit(){ 
    this.id=localStorage.getItem('token');
    this.role=localStorage.getItem('role');
  }


  @Output()
  logou1= new EventEmitter<FormGroup>();
  
   data1!:Object[];
   dataSource(){
        this.data= [
            {
                nodeId: '01', nodeText:  'User Accounts', iconCss: 'icon-th icon', url:'/feature/account'
              },

             {
                nodeId: '02', nodeText: 'Products', iconCss: 'icon-microchip icon', 
                   nodeChild: [
                    { nodeId: '02-01', nodeText: 'All Products', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
                    { nodeId: '02-02', nodeText: 'Expired Products', iconCss: 'icon-th icon',url:'/feature/product/product/list/expire' },
                    { nodeId: '02-03', nodeText: 'Finshed Products', iconCss: 'icon-th icon',url:'/feature/product/product/list/finshed' },
                    { nodeId: '02-04', nodeText: 'Near to Finsh Products', iconCss: 'icon-th icon',url:'/feature/product/product/list/NearFinsh' },
                    { nodeId: '02-05', nodeText: 'Near to Expire Products', iconCss: 'icon-th icon',url:'/feature/product/product/list/NearExpire' },
                    ]
             },
            //  {
            //     nodeId: '03', nodeText: 'Vehicle', iconCss: 'icon-microchip icon', 
            //        nodeChild: [
            //         { nodeId: '03-01', nodeText: 'All Products', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
            //         { nodeId: '03-02', nodeText: 'Expaireded Products', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
            //         { nodeId: '03-03', nodeText: 'Finshed Products', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
            //         { nodeId: '03-04', nodeText: 'Near to Finsh Product', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
            //         { nodeId: '03-05', nodeText: 'Near to Expaired Product', iconCss: 'icon-th icon',url:'/feature/product/product/list' },
            //         ]
            //  },

            {
            nodeId: '04', nodeText:  'Vehicle', iconCss: 'icon-th icon', url:'/feature/vehicle/vehicle/list'
            },
              
        ];

        this.authUser =[
            {
                nodeId: '05', nodeText:  'Drivers', iconCss: '.e-font icon', url:'/feature/driver/driver/list'
            },
            {
                nodeId: '06', nodeText:  'Order', iconCss: '.e-font icon', url:'/feature/delivery/delivery/list'
            } 
        ];



        this.authUserCust =[
            {
                nodeId: '07', nodeText:  'Drivers cust', iconCss: '.e-font icon', url:'/feature/driver/driver/list'
            },
            {
                nodeId: '08', nodeText:  'Order Cast', iconCss: '.e-font icon', url:'/feature/delivery/delivery/list'
            } 
        ];
            // if(this.rout.isLoggedIn()){
                // for( let a of this.authUser ){
                    // this.data.push(a);
                // }
            // }
            this.ngOnInit();
            //used to push adim link into sidebar object
           if(this.role==="Admin"){
            for(let a of this.authUser){
                this.data.push(a);
                console.log("pushed Admin");
            }
           } 
           //used to push Customer link into sidebar object
           if(this.role==="Customer"){
            for(let a of this.authUserCust){
                this.data.push(a);
                console.log("pushed Customer");
            }
           }
        return this.data;
  }
  
  public field:Object ={dataSource:this.dataSource(), id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss'};

  public onCreated(args: any) {
       this.sidebarTreeviewInstance.element.style.visibility = '';
  }
  public onClose(args: any) {
      this.treeviewInstance.collapseAll();
  }
  openClick() {
      if(this.sidebarTreeviewInstance.isOpen)
      {
          this.sidebarTreeviewInstance.hide();
          this.treeviewInstance.collapseAll();
      }
      else {
          this.sidebarTreeviewInstance.show();
          this.treeviewInstance.expandAll();
      }  
  }
  RouteHandler(event:any){
      const data=this.treeviewInstance.getTreeData(event.node)
      const url=data[0]['url'];
      this.router.navigate([url]); 

  }
  onLogout(){
    console.log("Logout");
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token'); 
    this.router.navigate(['/'])
  }
  onlogin(){
    console.log("login Emited");
  }  
}
