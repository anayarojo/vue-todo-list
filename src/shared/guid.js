function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export default {
  get() {
    return 'ss-s-s-s-sss'.replace(/s/g, s4);
  },
};