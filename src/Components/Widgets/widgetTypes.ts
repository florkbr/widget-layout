export enum WidgetTypes {
  LargeWidget = 'LargeWidget',
  MediumWidget = 'MediumWidget',
  SmallWidget = 'SmallWidget',
  DashboardFavorites = 'DashboardFavorites',
}

export function isWidgetType(type: string): type is WidgetTypes {
  return Object.values(WidgetTypes).includes(type as WidgetTypes);
}
