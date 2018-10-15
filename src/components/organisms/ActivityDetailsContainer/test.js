import React from 'react'
import {shallow} from 'enzyme'

import ActivityDetailsRow from 'components/molecules/ActivityDetailsRow/index'
import ActivityDetailsContainer from './index'

const activity = {
    id: 7833,
    created_at: '2018-04-18T16:59:48.000Z',
    direction: 'outbound',
    from: 'Jonathan Anguelov',
    to: '06 45 13 53 91',
    via: 'NYC Office',
    duration: '60',
    is_archived: false,
    call_type: 'missed'
}
const onClickBackFunc = jest.fn()
const archiveActivityFunc = jest.fn()
const match = {
    params: {
        id: activity.id
    }
}

test("ActivityDetailsContainer displays all activity's properties", () => {
    const cmpt = shallow(<ActivityDetailsContainer activityDetails={activity} handleOnClickBack={onClickBackFunc} archiveActivity={archiveActivityFunc} match={match} /> )

    expect(cmpt.find(ActivityDetailsRow).length).toEqual(9)
})
