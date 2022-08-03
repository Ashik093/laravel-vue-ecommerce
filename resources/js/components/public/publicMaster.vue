<template>
    <div id="publicMaster">
        <PublicHeader></PublicHeader>
        <router-view></router-view>
        <PublicFooter></PublicFooter>
    </div>
</template>
<script>
import PublicHeader from "./inc/PublicHeader.vue";
import PublicFooter from "./inc/PublicFooter.vue";
import Home from "./Home.vue";
export default {
    name: "public-master",
    components: {
        PublicHeader,
        PublicFooter,
        Home,
    },
};
</script>
