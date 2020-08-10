import React from 'react';
import {Switch, Route} from 'react-router-dom';
import router from './router';
import Dashboard  from './components/Dashboard/Dasboard';
import AddInventory from './components/AddInventory/AddInventory';

    export default(
        <Switch>
          <Route exact path='/' component={Dashboard}/>,
          <Route path='/AddInventory' component={AddInventory}/>,
        </Switch>
      );
 
      