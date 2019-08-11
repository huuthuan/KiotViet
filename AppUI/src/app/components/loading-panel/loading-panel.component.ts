import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-loading-panel',
	templateUrl: './loading-panel.component.html',
	styleUrls: ['./loading-panel.component.scss']
})
export class LoadingPanelComponent implements OnInit {
	@Input('loading_text') loading_text: string = 'Loading';

	constructor() {
	}

	ngOnInit() {
	}

}
