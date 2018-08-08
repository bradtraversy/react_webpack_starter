import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { compose } from "redux";
import { IGlobalStore } from "../reducers";
import { ICommonAction } from "../interfaces/IReducers";
import App from "./";

// interface IOwnProps {
// }
interface IStateProps {
    data: string[];
}
interface IDispatchProps {
    fetchData: ICommonAction;
}

export type IApp = IStateProps & IDispatchProps;

const mapStateToProps: MapStateToProps<IStateProps, {}, IGlobalStore> = ({main}) => ({
    data: main.data,
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
    fetchData,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(App);
