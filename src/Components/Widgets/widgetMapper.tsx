import React from 'react';
import { ScalprumComponent } from '@scalprum/react-core';
import LargeWidget from './LargeWidget';
import { WidgetTypes } from './widgetTypes';
import MediumWidget from './MediumWidget';
import SmallWidget from './SmallWidget';

const DashboardFavoritesWidget = <ScalprumComponent scope="chrome" module="./DashboardFavorites" />;
const widgetMapper: {
  [widgetName in WidgetTypes]: React.ComponentType<React.PropsWithChildren<object>> | JSX.Element;
} = {
  [WidgetTypes.LargeWidget]: LargeWidget,
  [WidgetTypes.MediumWidget]: MediumWidget,
  [WidgetTypes.SmallWidget]: SmallWidget,
  [WidgetTypes.DashboardFavorites]: DashboardFavoritesWidget,
};

export default widgetMapper;
