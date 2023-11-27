const SEND_METHOD = 'POST';

const getData = (url, onSuccess, onFail) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};

const sendData = (url, onSuccess, onFail, body) => {
  fetch(url, {
    method: SEND_METHOD,
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
