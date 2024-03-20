import { WidgetTypes } from './widgetTypes';

export const widgetDefaultWidth: { [widgetName in WidgetTypes]: number } = {
  [WidgetTypes.LargeWidget]: 4,
  [WidgetTypes.MediumWidget]: 2,
  [WidgetTypes.SmallWidget]: 1,
  [WidgetTypes.DashboardFavorites]: 4,
};

export const widgetDefaultHeight: { [widgetName in WidgetTypes]: number } = {
  [WidgetTypes.LargeWidget]: 3,
  [WidgetTypes.MediumWidget]: 2,
  [WidgetTypes.SmallWidget]: 1,
  [WidgetTypes.DashboardFavorites]: 3,
};

// these will depend entirely on widget implementation
export const widgetMaxHeight: { [widgetName in WidgetTypes]: number } = {
  [WidgetTypes.LargeWidget]: 6,
  [WidgetTypes.MediumWidget]: 4,
  [WidgetTypes.SmallWidget]: 2,
  [WidgetTypes.DashboardFavorites]: 6,
};

export const widgetMinHeight: { [widgetName in WidgetTypes]: number } = {
  [WidgetTypes.LargeWidget]: 1,
  [WidgetTypes.MediumWidget]: 1,
  [WidgetTypes.SmallWidget]: 1,
  [WidgetTypes.DashboardFavorites]: 1,
};

export const widgetDefaultTitles: { [widgetName in WidgetTypes]: string } = {
  [WidgetTypes.LargeWidget]: 'Large Widget',
  [WidgetTypes.MediumWidget]: 'Medium Widget',
  [WidgetTypes.SmallWidget]: 'Small Widget',
  [WidgetTypes.DashboardFavorites]: 'Favorites Widget',
};
