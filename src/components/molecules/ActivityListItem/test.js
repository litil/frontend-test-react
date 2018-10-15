import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import ActivityListitem from './index.jsx';
import InboundCall from '../../elements/CallIcons/InboundCall.jsx';
import OutboundCall from '../../elements/CallIcons/OutboundCall.jsx';
import UnknownCall from '../../elements/CallIcons/UnknownCall.jsx';

const activity = {
    id: 7833,
    created_at: "2018-04-18T16:59:48.000Z",
    direction: "inbound",
    from: "Jonathan Anguelov",
    to: "06 45 13 53 91",
    call_type: "missed"
}

test('ActivityListitem displays an InboundCall component if direction=inbound', () => {
    // @see https://airbnb.io/enzyme/docs/api/shallow.html
    const cmpt = shallow(<ActivityListitem {...activity}/>);

    expect(cmpt.find(InboundCall).length).toEqual(1);
    expect(cmpt.find(OutboundCall).length).toEqual(0);
    expect(cmpt.find(UnknownCall).length).toEqual(0);
});

test('ActivityListitem displays an OutboundCall component if direction=outbound', () => {
    const outboundActivity = Object.assign(activity, {direction: 'outbound'})
    const cmpt = shallow(<ActivityListitem {...activity}/>);

    expect(cmpt.find(InboundCall).length).toEqual(0);
    expect(cmpt.find(OutboundCall).length).toEqual(1);
    expect(cmpt.find(UnknownCall).length).toEqual(0);
});

test('ActivityListitem displays the target number if defined', () => {
    const cmpt = shallow(<ActivityListitem {...activity}/>);

    expect(cmpt.find('.activityItem-target').at(0).text()).toContain(activity.to);
});

test('ActivityListitem displays unknown target if no target is given', () => {
    const unknownTargetActivity = Object.assign(activity, {to: null})

    const cmpt = shallow(<ActivityListitem {...unknownTargetActivity}/>);

    expect(cmpt.find('.activityItem-target').at(0).text()).toContain('unknown target');
});

test('ActivityListitem displays the phone call time', () => {
    const outboundActivity = Object.assign(activity, {to: null})
    const expectedTime = moment(activity.created_at).format('hh:mm A')

    const cmpt = shallow(<ActivityListitem {...activity}/>);

    expect(cmpt.find('.activityItem-time').at(0).text()).toEqual(expectedTime);
});
