<script setup lang="ts">
import { Site } from "@/variables"
</script>

<template>
    <div class="backlink">
        <a :href="Site.goal">
            {{ Site.salesText }} <span class="btn">{{ Site.salesAction }}</span></a>
    </div>
</template>

<style scoped>
.shareicon {
    margin-bottom: -6px;
    width: 40px;
    filter: brightness(2.1);
}

a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
}

.btn {
    background: #fff;
    color: var(--primary-color);
    padding: 5px 12px;
    border-radius: 5px;
    margin-left: 5px;
}

.backlink {
    background: var(--primary-background-color);
    padding: 13px;
    border-radius: var(--primary-border-radius);
    padding-top: 12px;
    margin-top: 10px;
}
</style>
