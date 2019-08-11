import {Pipe, PipeTransform} from '@angular/core';

import {isArray, join} from 'lodash';

@Pipe({
	name: 'join'
})
export class JoinPipe implements PipeTransform {

	transform(input: any, character: string = ''): any {
		if (!isArray(input)) {
			return input;
		}
		return join(input, character);
	}
}
