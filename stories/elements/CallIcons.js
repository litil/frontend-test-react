import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InboundCall from '../../src/components/elements/CallIcons/InboundCall.jsx';
import OutboundCall from '../../src/components/elements/CallIcons/OutboundCall.jsx';

storiesOf('CallIcons', module)
    .add('with inbound icon', () => (
        <InboundCall />
    ))
    .add('with outbound icon', () => (
        <OutboundCall />
    ))
