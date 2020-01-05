// Write your solution in this file!


function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...obj};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.key = value;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = driver;
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}


const driver = {};