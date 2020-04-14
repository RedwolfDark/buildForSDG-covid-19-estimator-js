const formater = (data) => {
  const formatType = data.periodType;
  const inputData = data;

  switch (formatType) {
    case 'days':
      data.timeToElapse = inputData.timeToElapse;
      break;

    case 'weeks':
      data.timeToElapse = inputData.timeToElapse * 7;
      break;
    case 'months':
      data.timeToElapse = inputData.timeToElapse * 30;
      break;
    default:
      break;
  }

  return data;
};

export default formater;
