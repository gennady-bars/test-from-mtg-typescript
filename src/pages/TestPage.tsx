import React, { Component } from "react";
import { Switch, Route, Redirect, match } from "react-router-dom";
import { connect } from "react-redux";
import styles from  "./TestPage.module.css";
import DropDowns from "../components/DropDowns";
import { getFiles } from "../redux/actions/filesActions";
import { RootStateType } from "../redux/reducers/rootReducer";

type Props = {
  loading: boolean, 
  error: any, 
  match: match,
  getFiles: typeof getFiles
}

class TestPage extends Component<Props> {
  componentDidMount() {
    this.props.getFiles();
  }
  render() {
    const {loading, error, match} = this.props
    const { url, path } = match;

    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1>Что-то пошло не так... Ошибка: {error}</h1>
    }
    return (
      <div className={styles.TestPage}>
        <h1>Тестовое Задание (DropDowns)</h1>

        <Switch>
          <Route
            path={`${path}/:file?`}
            render={(routeProps) => (
              <DropDowns url={url} {...routeProps} />
            )}
          />
          <Redirect to={`${path}`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    loading: state.files.loading,
    error: state.files.error,
  };
};
// @ts-ignore
export default connect(mapStateToProps, { getFiles })(TestPage);
