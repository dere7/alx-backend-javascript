function get(url) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      if (req.status === 200) resolve(req.response);
      else reject(Error(req.statusText));
    };

    req.onerror = () => reject(Error('Network Error'))

    req.send();
  });
}

function getJSON(url) {
  return get(url).then(JSON.parse);
}
