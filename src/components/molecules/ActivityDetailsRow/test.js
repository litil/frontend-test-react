import React from 'react'
import { shallow } from 'enzyme'

import ActivityDetailsRow from './index'

test('ActivityDetailsRow displays the given label and value', () => {
    const label = 'my_label'
    const value = 'my_value'
    const cmpt = shallow(<ActivityDetailsRow label={label} value={value} />)

    expect(cmpt.find('span').at(0).text()).toEqual(`${label}:`)
    expect(cmpt.find('span').at(1).text()).toEqual(value)
})
