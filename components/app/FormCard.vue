<template>
    <Card class="custom-card" margin="b-5">
        <CardBody>
            <h5 class="card-title">{{ title }}</h5>
            <hr />
            <BFormInput type="text" :placeholder="placeholder" />
        </CardBody>
    </Card>
</template>

<script>
    export default {
        name: "FormCard",
        props: {
            title: {
                type: String,
                default: "Name"
            },
            placeholder: {
                type: String,
                default: "Default input"
            }
        }
    };
</script>

<style scoped>
    .custom-card {
        border: 1px solid #000;
        border-radius: 12px;
    }

    .form-control {
        border: none;
    }

    .form-control:focus {
        box-shadow: none;
    }
</style>