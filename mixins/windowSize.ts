interface Size {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = {
  data(): Size {
    return {
        width: 0,
        height: 0
    }
  },
  watch: {
    width(newWidth, oldWidth) {
      this.setWindowSize()
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.setWindowSize)
      this.setWindowSize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWindowSize)
  },
  methods: {
    setWindowSize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }
}

