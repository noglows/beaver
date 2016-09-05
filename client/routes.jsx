import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import Start from './game/Start.jsx';

FlowRouter.route('/',{
  name:"home",
  action(){
    mount(MainLayout, {
      content:(<Start />),
    });
  }
})
