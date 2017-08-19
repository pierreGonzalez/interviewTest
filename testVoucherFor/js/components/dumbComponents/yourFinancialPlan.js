import React from 'react';
import IncomesOrganism from '../smartComponents/incomesOrganism-container';
import ExpendituresOrganism from '../smartComponents/expendituresOrganism-container';
import SpendLessOrganism from '../smartComponents/spendLessOrganism-container';

export default class YourFinacialPlan extends React.Component {
  constructor(props){
    super(props);
    this.state={
      saving: 0
    }
  }

  componentDidMount(){
    this.props.initData();
  }
  sumSaving(){
    let sumIncomes = this.props.incomes.reduce((sum,income)=>{
      return (sum +  Number.parseInt(income.amount));
    },0);

    let sumExpenses = this.props.expendituresForSaving.reduce((sum,expenditure)=>{
      return (sum +  Number.parseInt(expenditure.amount));
    },0);

    let total = Number.parseInt((sumIncomes/12)-sumExpenses);

    return total;
  }
  componentWillReceiveProps(){
      let total = this.sumSaving();
      this.setState({saving: total});
  }

  render () {
    let savingResult = this.state.saving;
    return (
      <div className="col-md-12">
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">YOUR INCOME & SPEND</div>
            <div className="panel-body">
              <IncomesOrganism incomes={this.props.incomes} />
              <ExpendituresOrganism expenditures={this.props.expenditures} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">SPEND LESS : £ {savingResult}</div>
            <div className="panel-body">
              <p className="spendLessTitle">Try reducing your monthly spending to see how your forecast could improve!</p>
              <SpendLessOrganism expenditures={this.props.expenditures} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
