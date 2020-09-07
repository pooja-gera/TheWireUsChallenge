import React from 'react';
import { Component } from 'react';

const tipPercentages = ['5%', '10%', '15%' , '20%'];

class Inputs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
			keyInput: ''
		};
	}

	handleStyleChange(i) {
		if(this.state.active === i) {
			return 'selected-tipPerc';
		} else {
			return '';
		}
	}

	handleTipSelect(i) {
		this.setState({ active: i });
		this.props.getTipPercentage(i)
	}

	render() {
		return (
			<div className="inputs flex-row">
				<div className="bill-total flex-col">
					<span>Bill Total</span>
					<input type="text" defaultValue={this.props.billTotal} onKeyPress={(e) => this.handleKeyPress(e)}  disabled />
				</div>
				<div className="guest-count flex-row">
					<div onClick={() => this.props.getPartyCount('minus')}>
						<i className="icon ion-md-remove"></i>
					</div>
					<div>
						<span>{this.props.partyCount} </span>
						<i className="icon ion-md-person"></i>
					</div>
					<div onClick={() => this.props.getPartyCount('add')}>
						<i className="icon ion-md-add"></i>
					</div>
				</div>
				<div className="tip-percent flex-col">
					<ul>
						{
							tipPercentages.map((el, i) => (
								<li className={this.handleStyleChange(i)} key={el} onClick={() => this.handleTipSelect(i)}>
									{el}
								</li>
							))
						}
					</ul>
				</div>
				<div className="tip-total flex-col">
					<span>Tip Total </span>
					<span>$ {this.props.tipTotal.toFixed(2)}</span>	
				</div>	
			</div>
		)

	}
}
export default Inputs;