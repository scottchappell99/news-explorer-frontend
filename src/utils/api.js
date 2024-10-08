export function request(url, options) {
  return fetch(url, options).then(parseRequest);
}

function parseRequest(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function saveArticle(article) {
  return new Promise((res) => {
    res({
      _id: "0912adsiguodspug",
      content: article.content,
      description: article.description,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
        id: article.source.id,
      },
      title: article.title,
      urlToImage: article.urlToImage,
      isSaved: true,
    });
  });
}

export function unsaveArticle(article) {
  return new Promise((res) => {
    res({
      _id: "0912adsiguodspug",
      content: article.content,
      description: article.description,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
        id: article.source.id,
      },
      title: article.title,
      urlToImage: article.urlToImage,
      isSaved: false,
    });
  });
}
