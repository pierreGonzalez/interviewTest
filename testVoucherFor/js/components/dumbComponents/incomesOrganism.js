import React from 'react';
import Molecule from '../smartComponents/molecule-container';
import uuid from 'uuid';

export default class IncomesOrganism extends React.Component {

  render () {
    let incomesTitle = "Annual incomes";
    let molecule = this.props.incomes.map(income => <Molecule key={uuid.v4()} amount={income.amount} from_age={income.from_age} to_age={income.to_age} frequency={income.frequency} name={income.name} />);
    return (
      <div className="col-md-12">
        <div className="col-md-12">
          <p className="organismsTitle">{incomesTitle}</p>
        </div>
        <div className="col-md-12">
          {molecule}
        </div>
      </div>
    );
  }
}
