<script setup lang="ts">
import { Site } from "@/variables"
</script>

<template>
    <div class="floatGoal">
        <h3>RED Paragon</h3>
        <p>{{ Site.salesText }}</p>

        <a href="https://paragon.red/contact">{{ Site.salesAction }}</a>
    </div>
</template>

<style scoped>
.floatGoal {
    position: fixed;
    top: 0;
    right: 0;
    text-decoration: none;
    width: calc((100% - 900px)/2);
    background: var(--primary-background-color);
    z-index: 1;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-radius: var(--primary-border-radius);
    margin-top: 20%;
    color: #fff;
    padding: 18px;
    max-width: 300px;
    overflow: hidden;
    padding-top: 0;
}

.floatGoal input {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--primary-font-color);
    background-color: var(--secondary-background-color);
    margin-top: 10px;
    display: block;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    border-radius: var(--primary-border-radius);

    width: 100%;
}

p {
    margin-top: 3px;
}

h3 {
    margin-bottom: 5px !important;
}

a {
    background: #fff;
    color: var(--primary-color);
    padding: 5px 12px;
    white-space: nowrap;
    border-radius: 5px;
    text-decoration: none !important;
}

.email {
    cursor: text !important;
}


@media (max-width: 1105px) {
    .floatGoal {
        display: none;
    }
}
</style>
