import React, { useState } from 'react';
import { Route, Switch, withRouter, } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import changepassword from '../../pages/ChangePassword/changepassword';



function Layout(props) {

  return (
    <div className="overflow-hidden h-screen"  >
      <div className="overflow-hidden">
        
        <div className="flex h-screen overflow-hidden ">
          <div className="w-full overflow-y-auto bg-[#f3f3f4] h-[calc(100%-4rem)] pt-0.5 ">
            <Switch>
              
              <Route path="/app/dashboard/:gameId?/:seriesId?" component={withRouter(Dashboard)} />
          
              <Route path="/app/changepassword" component={withRouter(changepassword)} />
            
            </Switch>
          </div>
        </div>
      
      </div>

    </div>
  );
}

export default withRouter(Layout);
