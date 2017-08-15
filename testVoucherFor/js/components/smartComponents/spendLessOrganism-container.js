import { connect } from 'react-redux';
import SpendLessOrganism from '../dumbComponents/spendLessOrganism';

const mapStateToProps = (state,ownProps) => {
    return {
      expenditures: ownProps.expenditures
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const spendLessOrganismContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendLessOrganism);

export default spendLessOrganismContainer;
