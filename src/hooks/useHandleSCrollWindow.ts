export default function useHandleScrollWindow() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: `smooth`,
  });
}
