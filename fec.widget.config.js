module.exports = {
  shared: {
    chrome: { singleton: true, version: '*' },
  },
  widgets: [
    {
      // optional: importName: 'DashboardFavorites',
      module: './DashboardFavorites',
      scope: 'chrome',
    },
  ],
};
