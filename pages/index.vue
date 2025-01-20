<script lang="ts">
export default {
    setup() {
        const { $gsap } = useNuxtApp()

        onMounted(() => {
            $gsap.to('.section-1 .title', {
                duration: 4,
                text: "Hey, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus deserunt animi temporibus atque ipsa!",
                ease: "none",
            })

            $gsap.to('.section-1 .subtitle', {
                delay: 4,
                duration: 4,
                text: "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                ease: "none",
            })
        })

        return {}
    }
}
</script>

<template>
    <div>
        <Container class="section-1">
            <Row justify-content="around">
                <Col col="md-5" margin="t-3">
                    <Card class="d-flex flex-column" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500">
                        <CardBody class="d-flex flex-column flex-grow-1">
                            <CardTitle margin="x-3" font-weight="bold" class="title"></CardTitle>
                            <CardText margin="x-3 t-3" class="flex-grow-1 subtitle">
                            </CardText>
                            <Row margin="b-4" class="justify-content-center">
                                <Col xs="auto" class="mb-2 mb-sm-0">
                                <b-a button="outline-dark" rounded="circle" size="sm">
                                    <Icon name="mdi:github" />
                                </b-a>
                                </Col>
                                <Col xs="auto" class="mb-2 mb-sm-0">
                                <b-a button="outline-dark" rounded="circle" size="sm">
                                    <Icon name="mdi:linkedin" />
                                </b-a>
                                </Col>
                                <Col xs="auto" class="mb-2 mb-sm-0">
                                <b-a button="outline-dark" rounded="circle" size="sm">
                                    <Icon name="mdi:instagram" />
                                </b-a>
                                </Col>
                                <Col xs="auto" class="mb-2 mb-sm-0">
                                <b-a button="outline-dark" rounded="circle" size="sm">
                                    <Icon name="mdi:envelope" />
                                </b-a>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col col="md-5" margin="t-3">
                    <Card class="card-img h-100" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                    </Card>
                </Col>
            </Row>
        </Container>

        <!-- <Container class="section-2" margin="y-5">
            <Row justify-content="around">
                <Col col="md-5" margin="t-3">
                    <div class="project-card">
                        <div class="card-content">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="card-button">
                                <button class="circle-button">
                                    <span class="arrow">↗</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col col="md-5" margin="t-3">
                    <div class="project-card">
                        <div class="card-content">
                            <h3>Project Name</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="card-button">
                                <button class="circle-button">
                                    <span class="arrow">↗</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> -->

        <Container class="section-3" margin="y-5">
            <Row class="justify-content-center">
                <Col col="md-11">
                <Card data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1300">
                    <CardBody margin="x-5">
                        <CardTitle>Want to work together?</CardTitle>
                        <CardText>Feel free to reach out for collaborations or just a friendly hello <br>
                            hello@dnz.my.id</CardText>
                        <Row margin="b-4">
                            <Col xs="12" sm="auto" class="mb-2 mb-sm-0 d-flex justify-content-start">
                            <b-a href="/contact" button="dark" rounded="pill" class="d-flex align-items-center">
                                Contact
                            </b-a>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
</template>

<style scoped>
    .section-1 .card {
        border: 1px solid #000;
        min-height: 590px;
    }

    .section-1 .card .card-title {
        font-size: 2rem;
    }

    .section-1 .card .iconify {
        font-size: x-large;
    }

    .section-1 .card .btn-outline-dark {
        padding: 6px 10px;
    }

    .section-1 .card-img {
        background: url('https://ik.imagekit.io/xdt41sehmiw/dnz_my_id/img78987298_XaVs8UM1p.png') no-repeat center center;
    }

    .section-2 .project-card {
        min-height: 590px;
        border: 1px solid #000;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background: url('https://i.pinimg.com/564x/ac/db/9b/acdb9be3bcf1d7a6ec71bc6d7ea56fa1.jpg') no-repeat center center;
        background-size: cover;
    }

    .section-2 .card-content {
        position: absolute;
        bottom: 16px;
        left: 16px;
        color: #fff;
    }

    .section-2 .card-content h3 {
        margin: 0;
        font-size: 1.5em;
    }

    .section-2 .card-content p {
        margin: 0;
        font-size: 0.9em;
    }

    .section-2 .card-button {
        position: absolute;
        top: 0px;
        right: -100%;
    }

    .section-2 .circle-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #000;
        color: #000;
        font-size: 1em;
        cursor: pointer;
    }

    .section-2 .circle-button .arrow {
        font-size: 1.2em;
    }

    .section-3 .card {
        border: 1px solid #000;
        box-shadow: 9px 9px 0px #000000;
        border-radius: 20px;
    }

    .section-3 .card-title {
        font-weight: 700;
    }
</style>