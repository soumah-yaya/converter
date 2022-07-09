function lengthConverter(id, value) {
  if (value.length === 0) {
    document.getElementById('length').reset();
    return;
  }
  switch (id) {
    case 'feet':
      convertL('feet', value);
      break;
    case 'meters':
      convertL('meters', value);
      break;
    case 'inches':
      convertL('inches', value);
      break;
    case 'cm':
      convertL('cm', value);
      break;
    case 'yards':
      convertL('yards', value);
      break;
    case 'kilometers':
      convertL('kilometers', value);
      break;
    default:
      break;
  }
}
function convertL(id, valNum) {
  const ids = ['feet', 'meters', 'inches', 'cm', 'yards', 'kilometers'];
  ids.splice(ids.indexOf(id), 1);

  ids.forEach((inputid) => {
    let input = document.getElementById(inputid);
    // convert from feet
    if (id === 'feet') {
      if (inputid === 'meters') {
        input.value = (valNum / 3.2808).toFixed(4);
      }
      if (inputid === 'inches') {
        input.value = (valNum * 12).toFixed(4);
      }
      if (inputid === 'cm') {
        input.value = (valNum / 0.032808).toFixed(4);
      }
      if (inputid === 'yards') {
        input.value = (valNum * 0.33333).toFixed(4);
      }
      if (inputid === 'kilometers') {
        input.value = (valNum / 3280.8).toFixed(6);
      }
    }
    // convert from Meters
    if (id === 'meters') {
      if (inputid === 'feet') {
        input.value = (valNum * 3.2808).toFixed(4);
      }
      if (inputid === 'inches') {
        input.value = (valNum * 39.37).toFixed(4);
      }
      if (inputid === 'cm') {
        input.value = (valNum / 0.01).toFixed(4);
      }
      if (inputid === 'yards') {
        input.value = (valNum * 1.0936).toFixed(4);
      }
      if (inputid === 'kilometers') {
        input.value = (valNum / 1000).toFixed(6);
      }
    }
    // convert from Inches
    if (id === 'inches') {
      if (inputid === 'feet') {
        input.value = (valNum * 0.083333).toFixed(4);
      }
      if (inputid === 'meters') {
        input.value = (valNum / 39.37).toFixed(4);
      }
      if (inputid === 'cm') {
        input.value = (valNum / 0.3937).toFixed(4);
      }
      if (inputid === 'yards') {
        input.value = (valNum * 0.027778).toFixed(4);
      }
      if (inputid === 'kilometers') {
        input.value = (valNum / 39370).toFixed(6);
      }
    }
    // convert from cm
    if (id === 'cm') {
      if (inputid === 'feet') {
        input.value = (valNum * 0.032808).toFixed(4);
      }
      if (inputid === 'meters') {
        input.value = (valNum / 100).toFixed(4);
      }
      if (inputid === 'inches') {
        input.value = (valNum * 0.3937).toFixed(4);
      }
      if (inputid === 'yards') {
        input.value = (valNum * 0.010936).toFixed(4);
      }
      if (inputid === 'kilometers') {
        input.value = (valNum / 100000).toFixed(6);
      }
    }
    // convert from yards
    if (id === 'yards') {
      if (inputid === 'feet') {
        input.value = (valNum * 3).toFixed(4);
      }
      if (inputid === 'meters') {
        input.value = (valNum / 1.0936).toFixed(4);
      }
      if (inputid === 'inches') {
        input.value = (valNum * 36).toFixed(4);
      }
      if (inputid === 'cm') {
        input.value = (valNum / 0.010936).toFixed(4);
      }
      if (inputid === 'kilometers') {
        input.value = (valNum / 1093.6).toFixed(6);
      }
    }
    // convert from kilometers
    if (id === 'kilometers') {
      if (inputid === 'feet') {
        input.value = (valNum * 3280.8).toFixed(4);
      }
      if (inputid === 'meters') {
        input.value = (valNum * 1000).toFixed(4);
      }
      if (inputid === 'inches') {
        input.value = (valNum * 39370).toFixed(4);
      }
      if (inputid === 'cm') {
        input.value = (valNum * 100000).toFixed(4);
      }
      if (inputid === 'yards') {
        input.value = (valNum * 1093.6).toFixed(4);
      }
    }
  });
}
