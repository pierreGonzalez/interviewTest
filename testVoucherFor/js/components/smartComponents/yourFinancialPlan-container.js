import { connect } from 'react-redux';
import { initData } from '../../actions/initData-actions';
import { displaySaving } from '../../actions/changeSaving-actions';
import YourFinancialPlan from '../dumbComponents/yourFinancialPlan';

const mapStateToProps = (state) => {
  return {
    incomes: state.initDataReducer.incomes,
    expenditures: state.initDataReducer.expenditures,
    expendituresForSaving: state.savingReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    initData: () =>{
      dispatch(initData());
    },
    displaySaving:(saving)=>{
      dispatch(displaySaving(saving));
    }
  }
};

const yourFinancialPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(YourFinancialPlan);

export default yourFinancialPlanContainer;
