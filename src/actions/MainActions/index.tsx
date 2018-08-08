import { startFetchingData, fetchDataSuccess, fetchDataError } from "./MainCreators";
import { ICommonAction } from "../../interfaces/IReducers";

export const fetchData: ICommonAction = () => (dispatch) => {
    dispatch(startFetchingData());

    setTimeout(() => {
        dispatch(fetchDataSuccess(["test"]));
    }, 2000);

    // dispatch(fetchDataError());
};
