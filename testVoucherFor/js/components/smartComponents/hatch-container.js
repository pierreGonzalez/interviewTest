import { connect } from 'react-redux';
import Hatch from '../dumbComponents/hatch';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const hatchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hatch);

export default hatchContainer;
