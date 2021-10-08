import React, { useState } from "react";
import { connect } from "react-redux";
import { setError, addSmurf } from "../actions";

const AddForm = (props) => {
  const [state, setState] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === "") {
      props.setError("Please include a name");
    } else if (state.position === "") {
      props.setError("Please include a position");
    } else if (state.nickname === "") {
      props.setError("Please include a nickname");
    }
    props.addSmurf(state);
  };

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {props.error && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {props.error}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};
export default connect(mapStateToProps, { setError, addSmurf })(AddForm);
