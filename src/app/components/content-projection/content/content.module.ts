import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelComponent} from './panel.component';
import {AccordionComponent} from './accordion.component';
import {CardComponent} from './card.component';
import {TabComponent} from './tab.component';

@NgModule({
  declarations: [
    AccordionComponent,
    CardComponent,
    PanelComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    CardComponent,
    PanelComponent,
    TabComponent
  ]
})
export class ContentModule {
}
