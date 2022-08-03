<template>
    <div id="adminMaster" class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
        <router-view></router-view>
        <aside class="control-sidebar control-sidebar-dark"></aside>
        <Footer></Footer>
    </div>
</template>
<script>
import Dashboard from './Dashboard.vue';
import Footer from './inc/Footer.vue'
import Header from './inc/Header.vue'
import Sidebar from './inc/Sidebar.vue'
export default{
    components:{
        Dashboard,Footer,Header,Sidebar
    }
}
</script>