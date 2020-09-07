import React from 'react';

const Results = (props) => {
	let tipTotal = parseFloat(props.tipTotal);
	let billTotal = parseFloat(props.billTotal
		);
	if (isNaN(billTotal)) {
		billTotal = '';
	}
	let partyCount = props.partyCount;
	return (
		<ul className="results flex-col">
			<li className="cost-pp flex-col">
				<span>You owe</span>
				<span>$ {props.costPerPerson.toFixed(1)}</span>
			</li>
			<li className="col-2">
				<span>Bill</span>
				<span>$ </span><span>{(billTotal / partyCount).toFixed(1)}</span>
			</li>
			<li className="col-2">
				<span>Tip  </span>
				<span>$ </span><span>{(tipTotal / partyCount).toFixed(1)}</span>
			</li>
		</ul>
	)
}

export default Results;