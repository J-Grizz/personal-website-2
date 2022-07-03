const routeTransition = {
  initial: { height: 0 },
  animate: {
    height: '100%',
  },
  exit: {
    y: window.innerHeight,
    transition: { duration: 0.05 },
  },
}

export default routeTransition
