import { connect } from 'react-redux';
import IncomesOrganism from '../dumbComponents/incomesOrganism';

const mapStateToProps = (state,ownProps) => {
    return {
      incomes: ownProps.incomes
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const incomesOrganismContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomesOrganism);

export default incomesOrganismContainer;
