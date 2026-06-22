import { onReadyService } from './onReady.service';
import { downloadService } from './download.service';
import { cookiesService } from './cookies.service';
import { browserService } from './browser.service';
import { DOMService } from './DOM.service';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    declarations: [
    ],
    providers: [
		onReadyService,
		downloadService,
		cookiesService,
		browserService,
		DOMService,],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [ 
      ]
})
export class itechutilsModule {}