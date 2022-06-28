const underlineMotion = {
  rest: { width: 0, duration: 0, type: 'tween' },
  hover: {
    width: '100%',
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 200,
    },
  },
}

export default underlineMotion
