import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { IonicModule } from 'ionic-angular';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [MenuComponent,
    ExpandableComponent],
	imports: [
		IonicModule
	],
	exports: [MenuComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
