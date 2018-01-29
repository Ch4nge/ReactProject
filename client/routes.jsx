import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ResolutionsDetail from './resolutions/ResolutionsDetail.jsx';
import About from '../About.jsx';
import DPage from '../DPage.jsx';
import GMap from '../GMap.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })
    }
});

FlowRouter.route('/about', {
    action() {
        mount(MainLayout, {
            content: (<About />)
        })
    }
});

FlowRouter.route('/dpage', {
    action() {
        mount(MainLayout, {
            content: (<DPage />)
        })
    }
});

FlowRouter.route('/map', {
    action() {
        mount(MainLayout, {
            content: (<GMap />)
        })
    }
});

FlowRouter.route('/resolutions/:id', {
    action(params) {
        mount(MainLayout, {
            content: (<ResolutionsDetail id={params.id} />)
        })
    }
});