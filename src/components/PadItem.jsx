import React, { Component } from 'react';

import './PadItem.css';

class PadItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playing: ''
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	componentWillUnmount() {
		document.addEventListener('keydown', this.handleKeydown);
	}

	handleKeydown = (e) => {
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

	playingScale = () => {};

	handleClick = () => {
		this.audio.play();
		this.audio.currentTime = 0;
		this.props.handleDisplay(this.props.id);

		const { playing } = this.state;

		if (playing === '') {
			this.setState({ playing: playing ? '' : 'playing' });
		}
	};

	animationEnd = () => {
		this.setState({
			playing: ''
		});
	};

	render() {
		return (
			<div
				className={`${this.state.playing} drum-pad`}
				onTransitionEnd={this.animationEnd}
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
