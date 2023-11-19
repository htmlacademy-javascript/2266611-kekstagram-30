const REMOVE_TIMEOUT = 5000;

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const renderMessage = () => {
  const messageTemplate = dataError.cloneNode(true);
  document.body.append(messageTemplate);

  setTimeout(() => {
    messageTemplate.remove();
  }, REMOVE_TIMEOUT);
};

export {renderMessage};
