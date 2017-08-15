import React from 'react';
import RangeMolecule from '../smartComponents/rangeMolecule-container';

import uuid from 'uuid';

export default class SpendLessOrganism extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thumbsToggle: true
    }
  }
  toggleQuestionArea(){
    this.setState({
      thumbsToggle: false
    });
  }
  questionArea(){
    if(this.state.thumbsToggle){
      return(
        <p>
          <span className="question">Was this helpfull?</span>
          &nbsp;&nbsp;<span className="glyphicon glyphicon-thumbs-up" onClick={this.toggleQuestionArea.bind(this)}></span>&nbsp;
          <span className="glyphicon glyphicon-thumbs-down reverse" onClick={this.toggleQuestionArea.bind(this)}></span>
        </p>
      );
    } else {
      return (<span className="thankYou">Thank you</span>);
    }
  }


  render () {
    let saving="£";
    let rangeMolecule = this.props.expenditures.map(expenditure => <RangeMolecule key={uuid.v4()} amount={expenditure.amount} from_age={expenditure.from_age} to_age={expenditure.to_age}  name={expenditure.name}/>);
    let questionArea = this.questionArea();

    return (
      <div className="col-md-12">
        <div className="col-md-12">
          {rangeMolecule}
        </div>
        <div className="col-md-12">
          <p className="organismsTitle">This means you&apos;re saving <span className="savingAmount">{saving}</span> per month</p>
        </div>
        <div className="col-md-12 findWaysBtnContainer">
          <a href="https://fr.linkedin.com/in/pierre-gonzalez-0a836254" target="_blank">
            <button className="btn findWays">Find ways to save</button>
          </a>
        </div>
        <div className="col-md-12 thumbsUpDownContainer">
          {questionArea}
        </div>
      </div>
    );
  }
}
