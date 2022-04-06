<template>
    <div class='navBar'>
        <router-link class='navBar-item' to="/home">
        <div class='icon'><i class='iconfont icon-home'></i></div>
        <div>首页</div>
        </router-link>
        <router-link class='navBar-item' to="/category">
        <div class='icon'><i class='iconfont icon-category'></i></div>
        <div>分类</div>
        </router-link>
        <div class='navBar-item'><img class='logo' src='@/assets/images/logo.png'></div>
        <router-link class='navBar-item' to="/shopcart">
        <div class='icon'><i class='iconfont icon-shopcart'></i></div>
        <div>购物车</div>
        </router-link>
        <router-link class='navBar-item' to="/user">
        <div class='icon'><i class='iconfont icon-user'></i></div>
        <div>我的</div>
        </router-link>
    </div>
    <!-- 一定不能忘记router-view,如果没有就不知道要将跳转的展示内容放在哪里了 -->
    <router-view/>
</template>

<script>
export default ({
    name: 'NavBar'
})
</script>

<style>
@import '@/assets/fonts/iconfont.css';
.navBar{
    background-color: #ebdada5d;
    display: flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: 0 -1px 2px rgb(100,100,100,0.2);
}
.navBar-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
}

.icon{
    margin-top: 4px;
    margin-bottom: 4px;
    vertical-align: middle;
    display: inline-block;
    background-size: 40px;
}
.logo{
    height: 50px;
    width: 50px
}

</style>
