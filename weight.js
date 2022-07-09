function weightConverter(id, value) {
  if (value.length === 0) {
    document.getElementById('form-weight').reset();
    return;
  }
  switch (id) {
    case 'pound':
      convert('pound', value);
      break;
    case 'kilograms':
      convert('kilograms', value);
      break;
    case 'ounces':
      convert('ounces', value);
      break;
    case 'grams':
      convert('grams', value);
      break;
    default:
      break;
  }
}
function convert(id, valNum) {
  const ids = ['pound', 'kilograms', 'ounces', 'grams'];
  ids.splice(ids.indexOf(id), 1);

  ids.forEach((inputid) => {
    let input = document.getElementById(inputid);
    // convert from pound
    if (id === 'pound') {
      if (inputid === 'kilograms') {
        input.value = (valNum / 2.2046).toFixed(4);
      }
      if (inputid === 'ounces') {
        input.value = valNum * 16;
      }
      if (inputid === 'grams') {
        input.value = (valNum / 0.0022046).toFixed(4);
      }
    }
    // convert from kilograms
    if (id === 'kilograms') {
      if (inputid === 'pound') {
        input.value = (valNum * 2.2046).toFixed(4);
      }
      if (inputid === 'ounces') {
        input.value = (valNum * 35.274).toFixed(4);
      }
      if (inputid === 'grams') {
        input.value = valNum * 1000;
      }
    }
    // convert from Ounces
    if (id === 'ounces') {
      if (inputid === 'pound') {
        input.value = (valNum * 0.0625).toFixed(4);
      }
      if (inputid === 'kilograms') {
        input.value = (valNum / 35.274).toFixed(4);
      }
      if (inputid === 'grams') {
        input.value = (valNum / 0.035274).toFixed(4);
      }
    }
    // convert from grams
    if (id === 'grams') {
      if (inputid === 'pound') {
        input.value = (valNum * 0.0022046).toFixed(4);
      }
      if (inputid === 'kilograms') {
        input.value = (valNum / 1000).toFixed(4);
      }
      if (inputid === 'ounces') {
        input.value = (valNum * 0.035274).toFixed(4);
      }
    }
  });
}
