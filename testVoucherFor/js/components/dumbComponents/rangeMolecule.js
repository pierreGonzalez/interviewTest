import React from 'react';
import _ from 'lodash';


export default class RangeMolecule extends React.Component {
  constructor(props){
    super(props);
    this.state={
      amount: 0,
      from_age: this.props.from_age,
      to_age: this.props.to_age,
      name: this.props.name
    }
  }
  componentDidMount(){
    this.refs.input.value = 0;
  }

  onChangeInput(){
    this.setState({
      ...this.state,
      amount: this.refs.input.value
    });
    this.props.changeSaving(this.state);
  }

  render () {
    let amount = "£"+this.state.amount;
    let {name} = this.props;
    let {max} = this.props;
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="titleSpendLess" className="organismsTitle col-md-4">{name}</label>
            <div className="col-md-8">
            <p>{amount}</p>
              <input onChange={this.onChangeInput.bind(this)} ref="input" type="range" min="0" max={max} step="1" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
