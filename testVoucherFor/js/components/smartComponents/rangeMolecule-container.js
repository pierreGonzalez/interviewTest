import { connect } from 'react-redux';
import RangeMolecule from '../dumbComponents/rangeMolecule';
import { changeSaving } from '../../actions/changeSaving-actions';
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {
    return {
      name: ownProps.name,
      from_age: ownProps.from_age,
      to_age: ownProps.to_age,
      max: ownProps.amount,
      amount: ownProps.amount
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
