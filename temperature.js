function temperatureConverter(id, value) {
  if (value.length === 0) {
    document.getElementById('temperature').reset();
    return;
  }
  switch (id) {
    case 'fahrenheit':
      convertT('fahrenheit', value);
      break;
    case 'celsius':
      convertT('celsius', value);
      break;
    case 'kelvin':
      convertT('kelvin', value);
      break;
    default:
      break;
  }
}
function convertT(id, valNum) {
  const ids = ['fahrenheit', 'celsius', 'kelvin'];
  ids.splice(ids.indexOf(id), 1);
  ids.forEach((inputid) => {
    let input = document.getElementById(inputid);
    // convert from pound
    if (id === 'fahrenheit') {
      if (inputid === 'celsius') {
        input.value = ((valNum - 32) / 1.8).toFixed(4);
      }
      if (inputid === 'kelvin') {
        input.value = ((valNum - 32) / 1.8 + 273.15).toFixed(4);
      }
    }
    // convert from celsius
    if (id === 'celsius') {
      if (inputid === 'fahrenheit') {
        input.value = (valNum * 1.8 + 32).toFixed(4);
      }
      if (inputid === 'kelvin') {
        input.value = (parseFloat(valNum) + 273.15).toFixed(4);
      }
    }
    // convert from kelvin
    if (id === 'kelvin') {
      if (inputid === 'fahrenheit') {
        input.value = ((valNum - 273.15) * 1.8 + 32).toFixed(4);
      }
      if (inputid === 'celsius') {
        input.value = (valNum - 273.15).toFixed(4);
      }
    }
  });
}
