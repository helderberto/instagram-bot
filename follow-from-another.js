(() => {
  const MAX_FOLLOW_BY_EXECUTION = 40;
  const CLASS_BTN_FOLLOW = '.sqdOP:not(._8A5w5)';

  const btns = Array.from(document.querySelectorAll(CLASS_BTN_FOLLOW));
  let count = 1;

  const checkReachedLimit = value => value < MAX_FOLLOW_BY_EXECUTION;

  function* follow() {
    while(checkReachedLimit(count)) {
      btns.shift().click();
      yield count++;
    }
  }

  const followInterval = setInterval(() => {
    const { value, done } = follow().next();

    if (done) {
      clearInterval(followInterval);
      console.log(`🚫 You have reached the limit of ${MAX_FOLLOW_BY_EXECUTION} followers for this run.`);
      return;
    }

    console.log(`✅ You are following ${value} users.`);
  }, 4000);
})();
