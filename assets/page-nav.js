function handlePageNav(linkURL, linkHandle) {
  if (history.state && history.state.handle) {
    const prevLinkHandle = history.state.handle;
    const inactiveButton = document.getElementById(`page-nav__button--${prevLinkHandle}`);
    inactiveButton.classList.remove("page-nav__button--active");
  }

  const activeButton = document.getElementById(`page-nav__button--${linkHandle}`);
  activeButton.classList.add("page-nav__button--active");

  const nextState = { handle: linkHandle };
  const unused = "";
  const nextURL = linkURL;

  window.history.replaceState(nextState, unused, nextURL);

  window.dispatchEvent(new CustomEvent("page-nav:change"));
}