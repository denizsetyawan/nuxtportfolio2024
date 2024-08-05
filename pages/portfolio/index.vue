<script>
  export default {
    setup() {

      const portfolios = ref([]);
      const getPortfolio = async () => {
        const res = await queryContent('/portfolios').findOne();
        portfolios.value = res.body;
      }

      onMounted(() => {
        getPortfolio();
      });

      const handleMouseMove = (e) => {
        const containers = document.querySelectorAll('.image-container');
        containers.forEach(container => {
          const cursorText = container.querySelector('.cursor-text');
          const rect = container.getBoundingClientRect();
          const posX = e.clientX - rect.left;
          const posY = e.clientY - rect.top;
          cursorText.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
        });
      };

      onMounted(() => {
        document.addEventListener('mousemove', handleMouseMove);
      });

      onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMove);
      });

      return {
        portfolios
      };
    }
  };
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3" v-for="(portfolio, index) in portfolios" :key="index">
        <NuxtLink :to="`/portfolio/${portfolio.slug}`">
          <div class="card image-container"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000">
            <img :src="portfolio.image" class="card-img-top" alt="Image">
            <div class="card-body text-center">
              <h5 class="card-title text-uppercase">{{ portfolio.title }}</h5>
            </div>
            <div class="cursor-text">
              {{ portfolio.title }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .image-container {
    position: relative;
    display: inline-block;
  }

  .image-container img {
    display: block;
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.5s;
  }

  .image-container:hover img {
    filter: grayscale(0%);
    cursor: pointer;
  }

  .cursor-text {
    position: absolute;
    top: -20px;
    left: -20px;
    pointer-events: none;
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(45deg, #69C6AC, #fff, #000);
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0;
    transition: opacity 0.3s, transform 0.1s;
  }

  .image-container:hover .cursor-text {
    opacity: 1;
  }

  .col-md-3 {
    align-content: center;
  }

  .col-md-3 .card {
    margin-bottom: 1rem !important;
    border: none;
  }

  .col-md-3 .card .card-title {
    font-weight: 700;
  }
</style>