import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActivityListItem from 'components/molecules/ActivityListItem';

const activity = {
    id: 7833,
    created_at: "2018-04-18T16:59:48.000Z",
    direction: "inbound",
    from: "Jonathan Anguelov",
    to: "06 45 13 53 91",
    call_type: "missed"
}
const outboundActivity = Object.assign({}, activity, {direction: 'outbound'})
const unknownTargetActivity = Object.assign({}, activity, {to: null})
const handleOnClick = (id) => { return alert(`click on ${id}`)}

storiesOf('ActivityListItem', module)
    .add('with inbound call', () => (
        <ActivityListItem {...activity} handleOnClick={handleOnClick} />
    ))
    .add('with outbound call', () => (
        <ActivityListItem {...outboundActivity} handleOnClick={handleOnClick} />
    ))
    .add('with unknown target', () => (
        <ActivityListItem {...unknownTargetActivity} handleOnClick={handleOnClick} />
    ))
