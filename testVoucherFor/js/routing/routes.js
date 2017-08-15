import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from '../layout';
import Hatch from '../components/smartComponents/hatch-container';
import YourFinancialPlan from '../components/smartComponents/yourFinancialPlan-container';
import TipsAndBlogs from '../components/smartComponents/tipsAndBlogs-container';


export default(
  <Route path='/' component={Layout}>
    <IndexRoute component={Hatch} />
    <Route path='/hatch' component={Hatch}/>
    <Route path='/yourFinancialPlan' component={YourFinancialPlan}/>
    <Route path='/tipsAndBlogs' component={TipsAndBlogs}/>
  </Route>
);
