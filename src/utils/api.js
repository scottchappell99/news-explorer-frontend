const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.explorenews.my.to"
    : "http://localhost:3002";

export function request(url, options) {
  return fetch(url, options).then(parseRequest);
}

function parseRequest(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getArticles(token) {
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function saveArticle(
  { keyword, title, content, publishedAt, source, url, urlToImage },
  token
) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: keyword,
      title: title,
      text: content,
      date: publishedAt,
      source: source.name,
      link: url,
      image: urlToImage,
    }),
  });
}

export function unsaveArticle({ _id }, token) {
  return request(`${baseUrl}/articles/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
