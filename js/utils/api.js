const getData = (url, onSuccess, onFail) => {
  fetch(url)
    .then((response) => response.json())
    .then((result) => onSuccess(result))
    .catch(() => onFail());
};

const sendData = (url, onSuccess, onFail, body) => {
  fetch(url, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => onFail());
};

export {getData, sendData};
