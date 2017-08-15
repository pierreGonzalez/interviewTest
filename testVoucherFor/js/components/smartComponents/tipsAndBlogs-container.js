import { connect } from 'react-redux';
import TipAndBlogs from '../dumbComponents/tipsAndBlogs';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
  }
};

const tipAndBlogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipAndBlogs);

export default tipAndBlogsContainer;
