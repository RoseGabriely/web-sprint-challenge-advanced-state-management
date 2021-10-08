import React from "react";
import Smurf from "./Smurf";
import axios from "axios";
import { connect } from "react-redux";

const SmurfList = (props) => {
  //   axios.get("http://localhost:3333/smurfs").then((res) => {
  //     console.log(res.data);
  //   });

  if (props.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.smurfsArr.map((smurf) => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfsArr: state.smurfsArr,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
