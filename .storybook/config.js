import { configure } from '@storybook/react';

// @see https://storybook.js.org/basics/guide-react/``
function loadStories() {
  require('../stories/elements/CallIcons.js');
  require('../stories/molecules/ActivityListItem.js');
  require('../stories/organisms/DailyActivityList.js');
}

configure(loadStories, module);
