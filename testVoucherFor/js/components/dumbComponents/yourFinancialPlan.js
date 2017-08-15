import React from 'react';
import IncomesOrganism from '../smartComponents/incomesOrganism-container';
import ExpendituresOrganism from '../smartComponents/expendituresOrganism-container';
import SpendLessOrganism from '../smartComponents/spendLessOrganism-container';

export default class YourFinacialPlan extends React.Component {

  componentDidMount(){
    this.props.initData();
  }
  sumSaving(){
    let sumExpense=0;
    let simIncomes=0;
    let total=0;
    this.props.incomes.forEach((income)=>{

      simIncomes += Number.parseInt(income.amount);
    });
    this.props.expendituresForSaving.forEach((expense)=>{
      sumExpense += Number.parseInt(expense.amount);
    });

    total = Number.parseInt((simIncomes/12)-sumExpense);
    return total;
  }

  render () {
    let savingResult = this.sumSaving();
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
              <SpendLessOrganism expenditures={this.props.expenditures}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
