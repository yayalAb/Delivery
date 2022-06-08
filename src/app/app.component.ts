import { Component,  ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

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
  id!:number;
  constructor(private router:Router){

  }

  public data: Object[] = [
      {
          nodeId: '01', nodeText: 'Products', iconCss: 'icon-microchip icon', url:'/feature/product/product/list'
      },
         {
          nodeId: '02', nodeText:  'Vehicle', iconCss: '.e-font icon', url:'/feature/vehicle/vehicle/list'
         },
         {
            nodeId: '03', nodeText:  'Drivers', iconCss: '.e-font icon', url:'/feature/driver/driver/list'
           },
           {
            nodeId: '04', nodeText:  'Order', iconCss: '.e-font icon', url:'/feature/delivery/delivery/list'
           } 
  ];
  public field:Object ={ dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', iconCss: 'iconCss'};

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


// console.log("data : ",data)
// console.log("index 0  : ",data[0]['url'] )
// console.log("index count  : ",data[this.count]['url'] )
// this.count++;


//   {
    //       nodeId: '02', nodeText: 'Deployment', iconCss: 'e-icons e-fon',
    //   },
    //   {
    //       nodeId: '03', nodeText: 'Quick Start', iconCss: 'icon-docs-icon',
    //   },
    //   {
    //       nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
    //       nodeChild: [
    //           { nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
    //       ]
    //   },
    //   {
    //       nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
    //       nodeChild: [
    //           { nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon' },
    //           { nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon' }
    //       ]
    //   },
    //   {
    //       nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
    //   },
    //   {
    //       nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
    //   },
    //   {
    //       nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
    //   },
    //   {
    //       nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
    //   },
    //   {
    //       nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
    //   }
