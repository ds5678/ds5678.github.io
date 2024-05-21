async function getJSON(url) {
  const response = await fetch(url);
  return await response.json();
}

const app = Vue.createApp({
  data() {
    return {
      articleIndex: -1
    }
  },
  methods: {
    exitArticle() {
      this.articleIndex = -1;
    },
  },
  async created() {
  }
});