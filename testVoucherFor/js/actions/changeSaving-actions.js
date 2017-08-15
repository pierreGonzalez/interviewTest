
export const CHANGE_SAVING = "CHANGE_SAVING";

export const changeSaving = (expenditure) => {
   return (dispatch) => {
    dispatch({
      type: CHANGE_SAVING,
      expenditure
    });
  }
};
