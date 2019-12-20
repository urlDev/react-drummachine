import React, { Component } from 'react';
import PadItem from './PadItem';
import bank from './../data/data';

import './DrumPad.css';

class DrumPad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: ''
		};
	}

	handleDisplay = (display) => {
		this.setState({
			display: display
		});
	};

	render() {
		return (
			<div id="drum-machine">
				<div id="display">{this.state.display}</div>
				<div className="drums">
					{bank.map((d) => (
						<PadItem
                        // coming from paditem(data) but we also called them there as props
							id={d.id}
							keyTrigger={d.keyTrigger}
							keyCode={d.keyCode}
							url={d.url}
							handleDisplay={this.handleDisplay}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default DrumPad;
