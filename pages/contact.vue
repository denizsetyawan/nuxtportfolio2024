<script lang="ts">
    export default {
        setup() {
            const cards = reactive([{
                    title: "Name",
                    placeholder: "Enter your name"
                },
                {
                    title: "Email address",
                    placeholder: "Enter your email"
                },
                {
                    title: "Message",
                    placeholder: "Enter your message"
                }
            ]);

            return {
                cards
            };
        }
    }
</script>

<template>
    <div>
        <Container>
            <h3>Get in touch</h3>

            <Row margin="y-5">
                <Col col="md-6">
                <AppFormCard v-for="card in cards" :key="card.title" :title="card.title"
                    :placeholder="card.placeholder" />

                <b-button button="primary" padding="x-5 y-3">
                    Send
                </b-button>
                </Col>
                <Col col="md-6">
                <AppParallax />
                </Col>
            </Row>
        </Container>
    </div>
</template>

<style scoped>
    h3 {
        font-weight: 700;
    }

    .btn-primary {
        background-color: #69C6AC;
        font-weight: 700;
        border-color: #000;
        border-radius: 9px;
    }
</style>