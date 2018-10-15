import React from 'react'
import {shallow} from 'enzyme'

import ActivityListItem from 'components/molecules/ActivityListItem'
import DailyActivityList from './index'

const date = 'April 19, 2018'
const dailyActivities = [
    {
        id: 7833,
        created_at: '2018-04-18T16:59:48.000Z',
        direction: 'outbound',
        from: 'Jonathan Anguelov',
        to: '06 45 13 53 91',
        via: 'NYC Office',
        duration: '60',
        is_archived: false,
        call_type: 'missed'
    }, {
        id: 7832,
        created_at: '2018-04-18T16:53:22.000Z',
        direction: 'inbound',
        from: '06 19 18 23 92',
        to: 'Jonathan Anguelov',
        via: 'Support FR',
        duration: '180',
        is_archived: false,
        call_type: 'answered'
    }, {
        id: 7831,
        created_at: '2018-04-18T16:42:55.000Z',
        direction: 'inbound',
        from: '06 34 45 74 34',
        to: 'Xavier Durand',
        via: 'Support FR',
        duration: '180',
        is_archived: false,
        call_type: 'answered'
    }, {
        id: 7830,
        created_at: '2018-04-18T16:23:43.000Z',
        direction: 'inbound',
        from: '+33 6 34 45 74 34',
        to: null,
        via: 'Support FR',
        duration: '120',
        is_archived: false,
        call_type: 'voicemail'
    }, {
        id: 7829,
        created_at: '2018-04-18T15:43:32.000Z',
        direction: 'inbound',
        from: '+33 6 34 45 74 34',
        to: 'Olivier Pailhes',
        via: 'Spain Hotline',
        duration: '300',
        is_archived: false,
        call_type: 'answered'
    }
]
const onClickFunc = jest.fn()

test("DailyActivityList's title is the given date", () => {
    const cmpt = shallow(<DailyActivityList date={date} activities={dailyActivities} handleOnClick={onClickFunc} />)

    expect(cmpt.find('h2').at(0).text()).toEqual(date)
})

test('DailyActivityList displays an ActivityListItem for each given activity', () => {
    const cmpt = shallow(<DailyActivityList date={date} activities={dailyActivities} handleOnClick={onClickFunc} />)

    expect(cmpt.find(ActivityListItem).length).toEqual(dailyActivities.length)
})
