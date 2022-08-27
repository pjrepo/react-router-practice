import React from "react";

const Dashboard = (props) => {
  const { user } = props;
  return (
    <React.Fragment>
      <h4>Hello,{user?.name}</h4>
    </React.Fragment>
  );
};

export default Dashboard;
