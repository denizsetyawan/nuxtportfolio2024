<template>
    <div class="parallax-container">
        <div class="parallax-image" ref="parallaxImage"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const scrolled = window.pageYOffset;
                this.$refs.parallaxImage.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    }
</script>

<style scoped>
    .parallax-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
        border-radius: 20px;
    }

    @media (max-width: 767px) {
        .parallax-container {
            display: none;
        }
    }

    .parallax-image {
        border-radius: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-image: url('https://ik.imagekit.io/xdt41sehmiw/dnz-albums/IMG_20231023_183946_4HvoZ36jb.jpg');
        will-change: transform;
    }
</style>