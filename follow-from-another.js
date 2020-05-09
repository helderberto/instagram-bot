(() => {
  const MAX_FOLLOW_BY_EXECUTION = 40;
  const CLASS_BTN_FOLLOW = '.sqdOP:not(._8A5w5)';
  const CLASS_HAS_FOLLOWED = '_8A5w5';

  const btns = document.querySelectorAll(CLASS_BTN_FOLLOW);
  let count = 0;

  const checkFollowed = btn => btn.classList.contains(CLASS_HAS_FOLLOWED);

  const checkReachedLimit = count => count >= MAX_FOLLOW_BY_EXECUTION;

  btns.forEach((btn, i) => {
    const followTimeout = setTimeout(() => {
      if (checkReachedLimit(count)) {
        clearTimeout(followTimeout);
        console.log(`🚫 You have reached the limit of ${MAX_FOLLOW_BY_EXECUTION} followers for this run.`);
        return;
      }

      if (!checkFollowed(btn)) {
        btn.click();
        count++;

        console.log(`✅ You are following ${count} users.`);
        return;
      }

      console.log('💫 You are already following this user.');
    }, i * 4000);
  });
})();
