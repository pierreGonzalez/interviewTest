
import { INIT_DATA } from '../actions/initData-actions';

const initialeState = {
  incomes:[
    {
      amount: 0,
      from_age: 0,
      to_age: 0,
      frequency: "",
      name: ""
    }
  ],
  expenditures:[
    {
      amount: 0,
      from_age: 0,
      to_age: 0,
      frequency: "",
      name: ""
    },{
      amount: 0,
      from_age: 0,
      to_age: 0,
      frequency: "",
      name: ""
    },{
      amount: 0,
      from_age: 0,
      to_age: 0,
      frequency: "",
      name: ""
    }
  ]
};

const initDataReducer = (state = initialeState,action) => {
  switch (action.type){
    case INIT_DATA:{
      return action.value;
    }
    default:{
      return state;
    }
  }
}

export default initDataReducer;
