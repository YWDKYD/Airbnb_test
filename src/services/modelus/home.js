import hyRequest from "..";

export function getHomeGoodPriceDate() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}
export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecomendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor",
  });
}
