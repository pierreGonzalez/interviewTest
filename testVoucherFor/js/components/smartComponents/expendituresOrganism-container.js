import { connect } from 'react-redux';
import ExpendituresOrganism from '../dumbComponents/expendituresOrganism';

const mapStateToProps = (state,ownProps) => {
    return {
      expenditures: ownProps.expenditures
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const expendituresOrganismContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpendituresOrganism);

export default expendituresOrganismContainer;
