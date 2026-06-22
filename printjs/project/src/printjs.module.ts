import { PrintJSService } from './PrintJS.service';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    declarations: [
    ],
    providers: [
		PrintJSService,],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [ 
      ]
})
export class printjsModule {}