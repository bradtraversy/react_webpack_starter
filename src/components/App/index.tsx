import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { compose } from "redux";

import { IGlobalStore } from "../../reducers/index";
import { IActionCreator } from "../../interfaces/IReducers";

import { fetchData } from "../../actions/MainActions";

import App from "./App";

// interface IOwnProps {}

interface IStateProps {
    data: string[];
}
interface IDispatchProps {
    fetchData: IActionCreator;
}

export type IApp = IStateProps & IDispatchProps;
// export type IApp = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps: MapStateToProps<IStateProps, {}, IGlobalStore> = ({main}) => ({
    data: main.data,
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = {
    fetchData,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(App);
