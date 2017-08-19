import { connect } from 'react-redux';
import RangeMolecule from '../dumbComponents/rangeMolecule';
import { changeSaving } from '../../actions/changeSaving-actions';
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {
    return {
      name: ownProps.expenditure.name,
      from_age: ownProps.expenditure.from_age,
      to_age: ownProps.expenditure.to_age,
      max: ownProps.expenditure.amount,
      amount: ownProps.expenditure.amount
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
    changeSaving: (expenditure) =>{
      dispatch(changeSaving(expenditure));
    }
  }
};

const rangeMoleculeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RangeMolecule);

export default rangeMoleculeContainer;
