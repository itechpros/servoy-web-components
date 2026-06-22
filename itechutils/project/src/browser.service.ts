import { Injectable} from '@angular/core';
import { UAParser, IBrowser, IDevice, IEngine, IOS, ICPU, IResult } from 'ua-parser-js';

@Injectable()
export class browserService {
	private _ua: UAParser = new UAParser();
	
    constructor() {
    }

	getBrowser(): IBrowser {
		return this._ua.getBrowser();
	}
	
	getDevice(): IDevice {
		return this._ua.getDevice()
  	}
  	
  	getEngine(): IEngine {
		return this._ua.getEngine();
	}
	
	getOS(): IOS {
		return this._ua.getOS();
	}
	
	getCPU(): ICPU {
		return this._ua.getCPU();
	}
	
	getResult(): IResult {
		return this._ua.getResult();
	}
	
	getUA(): string {
		return this._ua.getUA();
	}
	
	setUA(uastring: string) {
		this._ua.setUA(uastring);
	}
} 