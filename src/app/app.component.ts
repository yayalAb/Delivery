import { Component,  ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { AuthGuard } from './core-module/auth-module/guard/guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DicApp';
  @ViewChild('sidebarTreeviewInstance')
  public sidebarTreeviewInstance!: SidebarComponent;
  @ViewChild('treeviewInstance')
  public treeviewInstance!: TreeViewComponent;
  public width: string = '290px';
  public enableDock: boolean = true;
  public dockSize:string ="44px";
  public mediaQuery: string = ('(min-width: 600px)');
  public target: string = '.main-content';
  id:any="";
  public data!: Object[];
  public authUser!:Object[];
  constructor(private router:Router, private rout:AuthGuard){  }
  ngOnInit(): void { 
  }

  

  dataSource(){
      
  this.data= [
    {
        nodeId: '01', nodeText: 'Products', iconCss: 'icon-microchip icon', url:'/feature/product/product/list'
    },
     {
      nodeId: '02', nodeText:  'Vehicle', iconCss: '.e-font icon', url:'/feature/vehicle/vehicle/list'
     }    
];

this.authUser =[
    {
        nodeId: '03', nodeText:  'Drivers', iconCss: '.e-font icon', url:'/feature/driver/driver/list'
       },
       {
        nodeId: '04', nodeText:  'Order', iconCss: '.e-font icon', url:'/feature/delivery/delivery/list'
       } 
  ];
    if(this.rout.isLoggedIn()){
        for( let a of this.authUser ){
            this.data.push(a)
        }
    }
  return this.data;
  }

  

  
  public field:Object ={ dataSource: this.dataSource(), id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss'};

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
      console.log(url)
      this.router.navigate([url])
  }
}
