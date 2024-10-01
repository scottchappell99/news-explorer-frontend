import { fromDate, toDate } from "./constants";
import { request } from "./api";

export const getNews = (keyword, newsAPIKey) => {
  return request(
    `https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${newsAPIKey}`
  );
};

export const filterNews = (data) => {
  if (data.status !== "ok") {
    return Promise.reject(
      "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
    );
  } else if (data.totalResults === 0) {
    return Promise.reject("Sorry, but nothing matched your search terms.");
  } else {
    const filteredNews = data.articles.filter(
      (news) => news.title !== "[Removed]"
    );
    return filteredNews;
  }
};
