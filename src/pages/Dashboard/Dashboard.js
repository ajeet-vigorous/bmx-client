import React from 'react';
import { connect } from 'react-redux';



import "./Dashboard.css";




class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notification: false,
      activeTab: 1,
    }
  }

 

  render() {
   


    return (

      <>
        <h1>Welcome To Dash Board</h1>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(Dashboard);
