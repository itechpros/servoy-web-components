import { Component, Input, SimpleChanges, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ServoyBaseComponent } from '@servoy/public';

type ScrollingMode = 'yes' | 'no' | 'auto';

@Component({
    selector: 'iframe-iframe',
    templateUrl: './iframe.html',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class Iframe extends ServoyBaseComponent<HTMLDivElement>{
	private _url: string;
	
	public safeUrl: SafeResourceUrl;

    @Input()
    set url(value: string) {
		this._url = value;
		this.safeUrl = value
			? this.sanitizer.bypassSecurityTrustResourceUrl(value)
			: null;
	}
	
	get url(): string {
		return this._url;
	}
	
    @Input() frameBorder: boolean = false;
    @Input() scrolling: ScrollingMode = "auto";

    constructor(protected readonly renderer: Renderer2, protected cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) {
         super(renderer, cdRef);
    }
    
    svyOnInit() {
        super.svyOnInit();
    }
    
    svyOnChanges( changes: SimpleChanges ) {
        super.svyOnChanges(changes);
    }
    
}