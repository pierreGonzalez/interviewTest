
import { CHANGE_SAVING } from '../actions/changeSaving-actions';
import _ from 'lodash';
import { findIndex } from 'lodash'

const savingState = [
    {
      amount: 0,
      from_age: 0,
      to_age: 0,
      name: "Mortgage"
    },{
      amount: 0,
      from_age: 0,
      to_age: 0,
      name: "Bills"
    },{
      amount: 0,
      from_age: 0,
      to_age: 0,
      name: "General spending"
    }
  ];


const savingReducer = (state = savingState, action) => {


  switch (action.type){
    case CHANGE_SAVING:{
      const newExpenditures = [...state];
      const newExpenditure = action.expenditure;
      
      const index = findIndex(newExpenditures,{name: newExpenditure.name});

      newExpenditures[index] = newExpenditure;

      return newExpenditures;
    }
    default:{
      return state;
    }
  }
}

export default savingReducer;
