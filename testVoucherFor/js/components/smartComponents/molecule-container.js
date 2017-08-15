import { connect } from 'react-redux';
import Molecule from '../dumbComponents/molecule';

const mapStateToProps = (state,ownProps) => {
    return {
      amount: ownProps.amount,
      from_age: ownProps.from_age,
      to_age: ownProps.to_age,
      frequency: ownProps.frequency,
      name: ownProps.name
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const MoleculeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Molecule);

export default MoleculeContainer;
