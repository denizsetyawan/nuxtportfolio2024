<script lang="ts">
    export default {
        setup() {

            const { $gsap } = useNuxtApp()

            onMounted(() => {
                $gsap.from('.skill-badge', {
                    duration: 1,
                    opacity: 0,
                    y: 50,
                    stagger: 0.1,
                    ease: "power2.out"
                });

                $gsap.utils.toArray('.timeline-row').forEach((row: any, index: number) => {
                    const side = index % 2 === 0 ? 'left' : 'right';
                    const xOffset = side === 'left' ? -100 : 100;

                    $gsap.fromTo(row, {
                        opacity: 0,
                        x: xOffset,
                        y: 50
                    }, {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: row,
                            start: 'top 80%',
                            end: 'bottom 60%',
                            toggleActions: 'play none none reverse',
                            markers: false
                        },
                        stagger: 0.3
                    });
                });
            })

            const timelineData = reactive([{
                    title: "Fullstack Developer",
                    company: "Lorem ipsum",
                    period: "2024 - Present"
                },
                {
                    title: "Frontend Developer",
                    company: "Dolor sit amet",
                    period: "2022 - 2024"
                },
                {
                    title: "Backend Developer",
                    company: "Consectetur adipiscing",
                    period: "2020 - 2022"
                },
                {
                    title: "Intern",
                    company: "Elit sed do",
                    period: "2019 - 2020"
                }
            ]);

            const skills = reactive(["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB", "Vue", "Nuxt", "Bootstrap", "Node JS", "Express JS", "Laravel", "Wordpress"]);

            return {
                timelineData,
                skills
            };
        }
    };
</script>

<template>
    <Container>
        <Row class="main-content" margin="b-5">
            <Col col="md-6">
                <div class="timeline-container">
                    <div class="timeline"></div>
                    <Container>
                        <Row v-for="(item, index) in timelineData" :key="index" class="my-5 timeline-row">
                            <Col v-if="index % 2 === 0" col="md-6" class="timeline-left">
                                <Card class="mb-4 timeline-card">
                                    <CardBody>
                                        <h6 class="role">{{ item.title }}</h6>
                                        <b-p class="font-italic">{{ item.company }}</b-p>
                                        <b-p class="font-weight-bold text-danger">{{ item.period }}</b-p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col v-if="index % 2 === 0" col="md-6">
                            </Col>
                            <Col v-if="index % 2 !== 0" col="md-6">
                            </Col>
                            <Col v-if="index % 2 !== 0" col="md-6" class="timeline-right">
                                <Card class="mb-4 timeline-card">
                                    <CardBody>
                                        <h6 class="role">{{ item.title }}</h6>
                                        <b-p class="font-italic">{{ item.company }}</b-p>
                                        <b-p class="font-weight-bold text-danger">{{ item.period }}</b-p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Col>
            <Col col="md-6">
                <b-p headings="5" font-weight="bold">
                    Skills
                </b-p>

                <Badge
                    v-for="(skill, index) in skills"
                    :key="index"
                    background-color="dark"
                    margin="x-1 y-1"
                    padding="2"
                    class="skill-badge"
                >
                    {{ skill }}
                </Badge>
            </Col>
        </Row>

        <Row margin="y-5">
            <b-p headings="5" font-weight="bold">
                My Projects
            </b-p>

            <Container class="section-2" margin="y-5">
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
            </Container>
        </Row>
    </Container>
</template>

<style scoped>
    .main-content {
        --bs-gutter-x: 0;
    }

    .role {
        font-weight: bold;
    }

    .timeline-container {
        position: relative;
        width: 100%;
    }

    .timeline {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 4px;
        background: #000;
        margin-left: -2px;
    }

    .timeline-row {
        position: relative;
        margin: 0 auto !important;
    }

    .timeline-left {
        display: flex;
        justify-content: flex-end;
    }

    .timeline-right {
        display: flex;
        justify-content: flex-start;
    }

    .timeline-card {
        width: 80%;
        display: flex;
        flex-direction: column;
        height: 150px;
        border: 1px solid #000;
        border-radius: 15px;
        box-shadow: 9px 9px 0px #000000;
    }

    .timeline-card .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
</style>