import { Injectable} from '@angular/core';
import Cookies from 'js-cookie';

@Injectable()
export class cookiesService {
    constructor() {
    }

	setCookie(name: string, value: object, expires: number = 365) {
 		Cookies.set(name, value, { expires });
	}
	
	getCookie(name: string) {
		return Cookies.get(name);
	}
} 