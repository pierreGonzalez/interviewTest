
export const INIT_DATA = "INIT_DATA";
const initDataValue = {
  incomes:[
    {
      amount: 45300,
      from_age: 30,
      to_age: 67,
      frequency: "annual",
      name: "Annual salary"
    }
  ],
  expenditures:[
    {
      amount: 1199,
      from_age: 30,
      to_age: 65,
      frequency: "monthly",
      name: "Mortgage"
    },{
      amount: 1199,
      from_age: 30,
      to_age: 65,
      frequency: "monthly",
      name: "Bills"
    },{
      amount: 1199,
      from_age: 30,
      to_age: 65,
      frequency: "monthly",
      name: "General spending"
    }
  ]
};
export const initData = () => {
   return (dispatch) => {
    dispatch({
      type: INIT_DATA,
      value: initDataValue
    });
  }
};
