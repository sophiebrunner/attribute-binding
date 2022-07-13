Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
  computed: {
    generateId() {
      return this.headline.toLowerCase().split(" ").join("-");
      // return this.headline.toLowerCase().replaceAll(" ", "-");
    },
  },
}).mount("#app");
