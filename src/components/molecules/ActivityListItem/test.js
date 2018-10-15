import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import InboundCall from 'components/elements/CallIcons/InboundCall'
import OutboundCall from 'components/elements/CallIcons/OutboundCall'
import UnknownCall from 'components/elements/CallIcons/UnknownCall'
import ActivityListitem from './index'

const activity = {
    id: 7833,
    created_at: '2018-04-18T16:59:48.000Z',
    direction: 'inbound',
    from: 'Jonathan Anguelov',
    to: '06 45 13 53 91',
    call_type: 'missed',
}
const onClickFunc = jest.fn()

test('ActivityListitem displays an InboundCall component if direction=inbound', () => {
    // @see https://airbnb.io/enzyme/docs/api/shallow.html
    const cmpt = shallow(<ActivityListitem {...activity} handleOnClick={onClickFunc} />)

    expect(cmpt.find(InboundCall).length).toEqual(1)
    expect(cmpt.find(OutboundCall).length).toEqual(0)
    expect(cmpt.find(UnknownCall).length).toEqual(0)
})

test('ActivityListitem displays an OutboundCall component if direction=outbound', () => {
    const outboundActivity = Object.assign(activity, { direction: 'outbound' })
    const cmpt = shallow(<ActivityListitem {...outboundActivity} handleOnClick={onClickFunc} />)

    expect(cmpt.find(InboundCall).length).toEqual(0)
    expect(cmpt.find(OutboundCall).length).toEqual(1)
    expect(cmpt.find(UnknownCall).length).toEqual(0)
})

test('ActivityListitem displays the target number if defined', () => {
    const cmpt = shallow(<ActivityListitem {...activity} handleOnClick={onClickFunc} />)

    expect(cmpt.find('.activityItem-target').at(0).text()).toContain(activity.to)
})

test('ActivityListitem displays unknown target if no target is given', () => {
    const unknownTargetActivity = Object.assign(activity, { to: null })
    const cmpt = shallow(<ActivityListitem {...unknownTargetActivity} handleOnClick={onClickFunc} />)

    expect(cmpt.find('.activityItem-target').at(0).text()).toContain('unknown target')
})

test('ActivityListitem displays the phone call time', () => {
    const expectedTime = moment(activity.created_at).format('hh:mm A')
    const cmpt = shallow(<ActivityListitem {...activity} handleOnClick={onClickFunc} />)

    expect(cmpt.find('.activityItem-time').at(0).text()).toEqual(expectedTime)
})
