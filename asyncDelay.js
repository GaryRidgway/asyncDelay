/**
 * Delay an `action` for `time`
 * and then run the `action` asynchronously to other JavaScript.
 *
 * @param {number} time // Measured in milliseconds (1000ms = 1s).
 * @param {function} action
 */
function asyncDelay(time, action) {

  // Create a promise that will delay.
  const delay = (delayInMs) => {
    return new Promise(resolve => setTimeout(resolve, delayInMs));
  }

  // Make the promise, wait for it to complete, then run the `action`.
  const asyncDelayedAction = async () => {
    let delayRes = await delay(time);
    action();
  }

  // Finally, call the function that puts it all together.
  asyncDelayedAction();
}