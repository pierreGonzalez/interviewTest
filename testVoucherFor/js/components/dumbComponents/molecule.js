import React from 'react';



export default class Molecule extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: this.props.key,
      amount: this.props.amount,
      from_age: this.props.from_age,
      to_age: this.props.to_age,
      frequency: this.props.frequency,
      name: this.props.name
    }
  }
  render () {
    let amount = "£"+this.state.amount.toLocaleString("en-IN");
    let {from_age} = this.state;
    let {to_age} = this.state;
    let {name} = this.state;

    return (
      <div className="col-md-12">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="title1" className="moleculeTitle">{name}</label>
            <input type="input1" ref="input1" className="form-control moleculeInput" id="title1" defaultValue={amount}/>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="title2" className="moleculeTitle">From age:</label>
            <input type="input2" ref="input2"  className="form-control moleculeInput" id="title2" defaultValue={from_age} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="title3" className="moleculeTitle">To age:</label>
            <input type="input3" ref="input3" className="form-control moleculeInput" id="title3" defaultValue={to_age} />
          </div>
        </div>
      </div>
    );
  }
}
