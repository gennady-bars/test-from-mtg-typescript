import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FileContents from "../FileContents/FileContents";
import { getContents } from "../../redux/actions/filesActions";
import styles from './DropDowns.module.css'
import { RootStateType } from "../../redux/reducers/rootReducer";

type OwnProps = {
  url: string,
  match: any
}

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnProps

class DropDowns extends Component<Props> {
  componentDidMount() {
    this.props.getContents(this.props.match.params.file);
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.match.params.file !== prevProps.match.params.file)
      this.props.getContents(this.props.match.params.file);
  }

  render() {

    const { url, files, activeFile, loading, error } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <button className={styles["show-btn"]}>
            {(activeFile && `Выбран ${activeFile.name}`) || "Выбери файл"}
          </button>
          <div className={styles["dropdown-child"]}>
            {files.map((file) => (
              <Link to={`${url}/${file.name}`} key={file.id}>
                {file.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles["show-btn"]}>
            Содержимое файла {activeFile && activeFile.name}
          </button>

          <FileContents {...{ activeFile, loading, error }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    files: state.files.files,
    activeFile: state.files.activeFile.file,
    loading: state.files.activeFile.loading,
    error: state.files.activeFile.error,
  };
};
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = { getContents: typeof getContents }

// @ts-ignore
export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, RootStateType>(mapStateToProps, { getContents })(DropDowns);
