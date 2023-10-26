<script setup lang="ts">
import { Site } from "@/variables"
</script>

<template>
    <div class="floatGoal">
        <h3>{{ Site.name }}</h3>
        <p>{{ Site.salesText }}</p>


        <div id="mc_embed_shell">

            <div id="mc_embed_signup">
                <form
                    action="https://hartmag.us21.list-manage.com/subscribe/post?u=4c6a61b84bc373c09d9189b6f&amp;id=9717664514&amp;f_id=00b8e2e6f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                    target="_self" novalidate="">
                    <div id="mc_embed_signup_scroll">
                        <div class="mc-field-group">
                            <input type="email" name="EMAIL" class="required email" placeholder="Email" id="mce-EMAIL"
                                required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                        </div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display: none;"></div>
                            <div class="response" id="mce-success-response" style="display: none;"></div>
                        </div>
                        <div aria-hidden="true" style="position: absolute; left: -5000px;">
                            /* real people should not fill this in and expect good things - do not remove this or risk form
                            bot signups */
                            <input type="text" name="b_4c6a61b84bc373c09d9189b6f_9717664514" tabindex="-1" value="">
                        </div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button"
                                    value="Subscribe">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>




        <!--<span>{{ Site.salesAction }}</span> -->
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
    border-radius: var(--primary-border-radius);
    margin-top: 20%;
    color: var(--primary-font-color);
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

.email {
    cursor: text !important;
}

@media (max-width: 1125px) {
    .floatGoal {
        display: none;
    }
}
</style>
