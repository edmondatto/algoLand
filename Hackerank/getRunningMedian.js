/**
 * Returns an array of running medians
 * @param {number[]} inputArray - An array of numbers
 * @return {number[]}
 */
function getRunningMedians(inputArray) {
  let medians = []
  const higherHalf = new MinHeap()
  const lowerHalf = new MaxHeap()

  for (let i = 0; i < inputArray.length; i++) {
    addNumber(inputArray[i], lowerHalf, higherHalf)
    rebalanceHeaps(lowerHalf, higherHalf)
    medians[i] = getMedian(lowerHalf, higherHalf)
  }
  return medians
}

/**
 * Adds a number to either the lowerHalf or higherHalf heap
 * @param {number} number - An array of numbers
 * @param {MaxHeap} lowerHalf - A heap of the lower half of numbers
 * @param {MinHeap} higherHalf - A heap of the higher half of numbers
 */
function addNumber(number, lowerHalf, higherHalf) {
  if (lowerHalf.size() === 0 || number < lowerHalf.peek()) {
    lowerHalf.add(number)
  } else {
    higherHalf.add(number)
  }
}

/**
 * Re-balances two heaps to ensure the sizes do not differ by more than 1
 * @param {MaxHeap|MinHeap} heap1 - A heap
 * @param {MinHeap|MaxHeap} heap2 - A heap
 */
function rebalanceHeaps(heap1, heap2) {
  if (Math.abs(heap1.size() - heap2.size()) > 1) {
    getSmallerHeap(heap1, heap2).add(getBiggerHeap(heap1, heap2).poll())
  }
}

/**
 * Returns a median value given two heaps
 * @param {MaxHeap} lowerHalf - A heap of the lower half of numbers
 * @param {MinHeap} higherHalf - A heap of the higher half of numbers
 */
function getMedian(lowerHalf, higherHalf) {
  if (lowerHalf.size() === higherHalf.size()) {
    return (lowerHalf.peek() + higherHalf.peek()) / 2
  }
  return getBiggerHeap(lowerHalf, higherHalf).peek()
}

/**
 * Given two heaps, it returns the one with the bigger size
 * @param {MaxHeap|MinHeap} heap1 - A heap
 * @param {MinHeap|MaxHeap} heap2 - A heap
 */
function getBiggerHeap(heap1, heap2) {
  return heap1.size() > heap2.size() ? heap1 : heap2
}

/**
 * Given two heaps, it returns the one with the smaller size
 * @param {MaxHeap|MinHeap} heap1 - A heap
 * @param {MinHeap|MaxHeap} heap2 - A heap
 */
function getSmallerHeap(heap1, heap2) {
  return heap1.size() < heap2.size() ? heap1 : heap2
}