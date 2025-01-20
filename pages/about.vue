<script lang="ts">
export default {
    setup() {
        const { $gsap } = useNuxtApp()

        onMounted(() => {
            $gsap.to('.title', {
                duration: 4,
                text: "Hello, I'm Deniz, a web developer with 3 years of experience,",
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
                    <p>who enjoys exploring and solving problems in both Front-end and Back-end worlds. I am passionate about learning new things and continuously improving my skills. Throughout my career, I have successfully developed and maintained several web applications, ensuring high performance and user satisfaction. I thrive in collaborative environments and enjoy working with diverse teams to create innovative solutions. My goal is to leverage my expertise to build impactful and efficient web applications while keeping up with the latest industry trends and technologies.</p>
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