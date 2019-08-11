import notify from 'devextreme/ui/notify';

import {REGEX_NONE_PANEL_REDIRECTION_PAGES} from './consts';

export class Utils {
	static getRandom(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static createGuid(): string {
		return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	static notifySuccess(message: string) {
		notify(message, 'success', 4000);
	}

	static notifyError(message: string) {
		notify(message, 'error', 4000);
	}

	static notifyWarning(message: string) {
		notify(message, 'warning', 4000);
	}

	static isNoneRedirectionPage(path: string): boolean {
		let result = false;
		for (let i = 0; i < REGEX_NONE_PANEL_REDIRECTION_PAGES.length; i++) {
			if (REGEX_NONE_PANEL_REDIRECTION_PAGES[i].test(path)) {
				result = true;
			}
		}
		return result;
	}
}
