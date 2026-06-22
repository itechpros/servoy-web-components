import { Injectable} from '@angular/core';
import download from 'downloadjs';

@Injectable()
export class downloadService {
    constructor() {
    }

	downloadFile(url: string) {
		download(url);
	}
}