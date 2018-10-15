import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InboundCall from 'components/elements/CallIcons/InboundCall.jsx';
import OutboundCall from 'components/elements/CallIcons/OutboundCall.jsx';

storiesOf('CallIcons', module)
    .add('with inbound icon', () => (
        <InboundCall />
    ))
    .add('with outbound icon', () => (
        <OutboundCall />
    ))
