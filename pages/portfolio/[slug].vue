<script>
  export default {
    setup() {

      const {
        slug
      } = useRoute().params;
      const portfolio = ref({});
      let portfolio_images = ref([]);
      const getPortfolio = async () => {
        const res = await queryContent('portfolios/' + slug).findOne();
        portfolio.value = res.body[0];
        portfolio_images.value = portfolio.value.images
      }

      onMounted(() => {
        getPortfolio();
      });

      const stackArray = computed(() => {
        return portfolio.value.stack ? portfolio.value.stack.split(', ') : [];
      });

      const visibleRef = ref(false);
      const indexRef = ref(0);

      const showImg = (index) => {
        indexRef.value = index;
        visibleRef.value = true;
      };
      const onHide = () => (visibleRef.value = false);

      const evenImages = computed(() => {
        return portfolio_images.value.filter((_, index) => index % 2 === 0);
      });

      const oddImages = computed(() => {
        return portfolio_images.value.filter((_, index) => index % 2 !== 0);
      });

      const realImages = [
        'https://picsum.photos/id/1/800/600',
        'https://picsum.photos/id/2/800/601',
      ]

      return {
        portfolio,
        slug,
        stackArray,
        showImg,
        onHide,
        visibleRef,
        indexRef,
        evenImages,
        oddImages,
        realImages,
        portfolio_images
      };
    }
  };
</script>

<template>
  <div class="container my-5">
    <img class="thumbnail img-fluid" :src="portfolio.image" alt="Image">

    <Carousel :items-to-show="2.5" :wrap-around="true">
      <Slide
        v-for="(src, index) in portfolio.images"
        :key="index"
        @click="() => showImg(index)"
      >
        <img
          class="img-fluid my-2"
          :src="src"
          alt="Image"
          style="width: 100%; max-height: 200px; object-fit: cover"
        />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="portfolio.images"
      :index="indexRef"
      @hide="onHide"
    />

    <h1 class="text-uppercase fw-bold mt-5">{{ portfolio.title }}</h1>
    <div class="row">
      <div class="col-md-9">
        <p>{{ portfolio.description }}</p>
      </div>
      <div class="col-md-3">
        <p class="fw-bold">STACK :
          <span class="badge p-2 mx-1 my-1 bg-dark" v-for="tech in stackArray" :key="tech">{{ tech }}</span>
        </p>
        <p class="fw-bold">WEBSITE : <a class="text-decoration-none text-dark" :href="portfolio.website"
            target="_blank">{{ portfolio.title }}</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .thumbnail {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    object-position: center;
    margin-bottom: 50px;
    border-radius: 16px;
  }

</style>