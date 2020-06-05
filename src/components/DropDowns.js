import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FileContents from "./FileContents";
import { getContents } from "../redux/actions/filesActions";

class DropDowns extends Component {
  componentDidMount() {
    this.props.getContents(this.props.match.params.file);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.file !== prevProps.match.params.file)
      this.props.getContents(this.props.match.params.file);
  }

  render() {
    
    const { url, files, activeFile, loading, error } = this.props;

    return (
      <div className="container">
        <div className="dropdown">
          <button className="show-btn">
            {(activeFile && `Выбран ${activeFile.name}`) || "Выбери файл"}
          </button>
          <div className="dropdown-child">
            {files.map((file) => (
              <Link to={`${url}/${file.name}`} key={file.id}>
                {file.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button className="show-btn">
            Содержимое файла {activeFile && activeFile.name}
          </button>

          <FileContents {...{activeFile, loading, error}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.files.files,
    activeFile: state.files.activeFile.file,
    loading: state.files.activeFile.loading,
    error: state.files.activeFile.error,
  };
};

export default connect(mapStateToProps, { getContents })(DropDowns);
