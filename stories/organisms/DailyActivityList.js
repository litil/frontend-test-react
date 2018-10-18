import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DailyActivityList from 'components/organisms/DailyActivityList';

const dailyActivities = [
  {
    "id": 7833,
    "created_at": "2018-04-18T16:59:48.000Z",
    "direction": "outbound",
    "from": "Jonathan Anguelov",
    "to": "06 45 13 53 91",
    "via": "NYC Office",
    "duration": "60",
    "is_archived": false,
    "call_type": "missed"
  },
  {
    "id": 7832,
    "created_at": "2018-04-18T16:53:22.000Z",
    "direction": "inbound",
    "from": "06 19 18 23 92",
    "to": "Jonathan Anguelov",
    "via": "Support FR",
    "duration": "180",
    "is_archived": false,
    "call_type": "answered"
  },
  {
    "id": 7831,
    "created_at": "2018-04-18T16:42:55.000Z",
    "direction": "inbound",
    "from": "06 34 45 74 34",
    "to": "Xavier Durand",
    "via": "Support FR",
    "duration": "180",
    "is_archived": false,
    "call_type": "answered"
  }
]

const handleOnClick = (id) => { return alert(`click on ${id}`)}

storiesOf('DailyActivityList', module)
    .add('with several activities', () => (
        <DailyActivityList
            date={"Sept, 21st 2018"}
            activities={dailyActivities}
            handleOnClick={handleOnClick} />
    ))
