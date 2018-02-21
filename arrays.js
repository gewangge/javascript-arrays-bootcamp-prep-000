var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, string) {
    array.unshift(string)
    return array
}

function destructivelyAddElementToBeginningOfArray (array, string) {
  return  [string, ...array]
}
