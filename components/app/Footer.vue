<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer>
        <Row no-gutters class="align-items-center">
            <Col col="md-10">
                <h1 class="text-white">Got project to <br> work with?</h1>
            </Col>
            <Col col="md-2">
                <div class="d-flex justify-content-center">
                    <div class="button-container">
                        <a href="/contact" class="circle-button">
                            Contact <br>me!
                            <span class="arrow">→</span>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
        <Row justify-content="between">
            <Col col="md-4" margin="t-5">
                <NavLink href="/" display="inline" margin="e-3">Home</NavLink>
                <NavLink href="/about" display="inline" margin="e-3">About</NavLink>
                <NavLink href="/works" display="inline" margin="e-3">Works</NavLink>
            </Col>
            <Col col="md-4" margin="t-5" class="socials">
                <NavLink target="_blank" href="https://github.com/denizsetyawan" display="inline" margin="e-5"><Icon name="mdi:github" /></NavLink>
                <NavLink target="_blank" href="https://www.linkedin.com/in/denis-setiawan/" display="inline" margin="e-5"><Icon name="mdi:linkedin" /></NavLink>
                <NavLink target="_blank" href="https://www.instagram.com/dnzsetyawan/" display="inline" margin="e-5"><Icon name="mdi:instagram" /></NavLink>
            </Col>
        </Row>
        <Row>
            <Col col="md-12" margin="t-5">
                <p class="text-secondary">© {{ year }} Deniz Setyawan. All rights reserved.</p>
            </Col>
        </Row>
    </footer>
</template>

<style scoped>
    footer {
        width: 100% !important;
        background: #000;
        overflow-x: hidden;
        padding: 4rem;
        padding-bottom: 5px;
    }

    footer h1 {
        font-size: 6rem;
        margin-bottom: 0;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
        font-size: 1.2em;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .circle-button .arrow {
        font-size: 1em;
        position: absolute;
        bottom: 10px;
    }

    .circle-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-link {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 500;
    }

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .socials .iconify {
        font-size: xx-large;
    }
</style>