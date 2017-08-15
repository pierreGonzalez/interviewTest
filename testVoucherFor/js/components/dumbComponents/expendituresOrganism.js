import React from 'react';
import Molecule from '../smartComponents/molecule-container';
import uuid from 'uuid';

export default class ExpendituresOrganisme extends React.Component {

  render () {
    let expendituresTitle = "Monthly spending";
    let molecule = this.props.expenditures.map(expenditure => <Molecule key={uuid.v4()} amount={expenditure.amount} from_age={expenditure.from_age} to_age={expenditure.to_age} frequency={expenditure.frequency} name={expenditure.name} />);
    return (
      <div className="col-md-12">
        <div className="col-md-12">
          <p className="organismsTitle">{expendituresTitle}</p>
        </div>
        <div className="col-md-12">
          {molecule}
        </div>
      </div>
    );
  }
}
