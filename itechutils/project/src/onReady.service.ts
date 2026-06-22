import { Injectable, Input } from '@angular/core';
import { ServoyApi } from '@servoy/public';

@Injectable()
export class onReadyService {
	@Input() onReadyCallback: () => void;

    constructor() {
    }

	onReady(elementSelector: string) {
		const callback = () => {
			this.onReadyCallback?.();
	    };
	
	    if (!elementSelector) {
	        if (document.readyState === 'loading') {
	            document.addEventListener('DOMContentLoaded', callback, { once: true });
	        } else {
				callback();
	        }
	        return;
	    }
	
	    const element = document.querySelector(elementSelector);
	
	    if (element) {
			callback();
	    }
	}
} 