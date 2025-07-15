(function() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
    allow_symbol_change: true,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: true,
    hotlist: false,
    interval: "W",
    locale: "en",
    save_image: true,
    style: "2",
    symbol: "NASDAQ:NVDA",
    theme: "light",
    timezone: "Europe/Rome",
    backgroundColor: "#ffffff",
    gridColor: "rgba(46, 46, 46, 0)",
    watchlist: [],
    withdateranges: false,
    compareSymbols: [
      {symbol: "NYSE:ORCL", position: "SameScale"},
      {symbol: "NASDAQ:ADBE", position: "SameScale"},
      {symbol: "XETR:BMW", position: "SameScale"},
      {symbol: "NYSE:KO", position: "SameScale"},
      {symbol: "NYSE:MCD", position: "SameScale"}
    ],
    studies: [],
    autosize: true
  });

  document.querySelector('.tradingview-widget-container__widget').appendChild(script);
})();
