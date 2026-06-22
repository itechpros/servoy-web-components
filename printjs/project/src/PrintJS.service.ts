import { Injectable} from '@angular/core';
import printJS from 'print-js';

@Injectable()
export class PrintJSService {
    constructor() {
    }

	print(printable: string, type: string) {
		printJS(printable, (type || 'pdf') as printJS.PrintTypes); 
	}
	
	printJS(json: object) {
        printJS(json as printJS.Configuration);
	}
} 