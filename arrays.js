var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, string) {
    return  [string, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, string) {
  array.unshift(string)
  return array
}
