<script lang="ts">
export default {
    setup() {
        const { $gsap } = useNuxtApp()

        onMounted(() => {
            $gsap.to('.title', {
                duration: 4,
                text: "Hey, I'm Deniz, a web developer with 3 years of experience.",
                ease: "none",
            });
        })

        return {
            
        }
    }
}
</script>

<template>
    <div>
        <Container
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
        >
            <Row margin="y-5">
                <Col col="md-6">
                    <h1 class="title"></h1>
                </Col>
                <Col col="md-6"></Col>
            </Row>
            <Row margin="b-5">
                <Col col="md-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio non repellendus libero quibusdam quas tempora illo quasi, in totam inventore mollitia deserunt adipisci odio quod placeat ipsum earum accusantium!</p>
                </Col>
            </Row>
        </Container>
    </div>
</template>

<style scoped>
    h1 {
        font-weight: 700;
    }
</style>