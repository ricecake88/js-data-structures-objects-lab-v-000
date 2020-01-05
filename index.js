// Write your solution in this file!


function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver};
  newObj[key] = value;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.key = value;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  console.log(newDriver);
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  return driver;
}


const driver = {};