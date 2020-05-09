(() => {
  const MAX_FOLLOW_BY_EXECUTION = 40;
  const CLASS_BTN_FOLLOW = '.sqdOP:not(._8A5w5)';

  const btns = document.querySelectorAll(CLASS_BTN_FOLLOW);
  let i = 0;

  const checkReachedLimit = count => count >= MAX_FOLLOW_BY_EXECUTION;

  const followInterval = setInterval(() => {
    if (checkReachedLimit(i)) {
      clearInterval(followInterval);
      console.log(`🚫 You have reached the limit of ${MAX_FOLLOW_BY_EXECUTION} followers for this run.`);
      return;
    }

    const btn = btns[i];
    btn.click();
    i++;

    console.log(`✅ You are following ${i} users.`);
  }, 4000);
})();
