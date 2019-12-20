import React, { Component } from 'react';

import './PadItem.css';

class PadItem extends Component {
	constructor(props) {
		super(props);
// for the transition class
		this.state = {
			playing: ''
		};
	}
// when component mounts, on keydown handlekeydown works
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	componentWillUnmount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	handleKeydown = (e) => {
// if keycode and keycodes charcode at same then play and display
		if (e.keyCode === this.props.keyTrigger.charCodeAt()) {
			this.audio.play();
			this.audio.currentTime = 0;
			this.props.handleDisplay(this.props.id);

			const { playing } = this.state;

			if (playing === '') {
				this.setState({ playing: playing ? '' : 'playing' });
			}
		}
	};

// plays on click
	handleClick = () => {
		this.audio.play();
		this.audio.currentTime = 0;
		this.props.handleDisplay(this.props.id);

		const { playing } = this.state;

		if (playing === '') {
			this.setState({ playing: playing ? '' : 'playing' });
		}
	};

	transitionEnd = () => {
		this.setState({
			playing: ''
		});
	};

	render() {
		return (
            // for some elements to pass to parent component, you need to call them with props
			<div
				className={`${this.state.playing} drum-pad`}
				onTransitionEnd={this.transitionEnd}
				id={this.props.id}
				keyCode={this.props.keyCode}
				onClick={this.handleClick}
			>
				{this.props.keyTrigger}
				<audio
					ref={(ref) => (this.audio = ref)}
					className="clip"
					src={this.props.url}
					id={this.props.keyTrigger}
				/>
			</div>
		);
	}
}

export default PadItem;
