<template>
    <div class="nav">
        <div class="nav__log">
            <img src="../assets/logo.png" alt />
        </div>
        <img src="./rocket.png" alt class="rocket" />
        <div class="nav__item__wrapper">
            <div class="nav__item" @click="goZl">专栏</div>
            <div class="nav__item" @click="goGt">github</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goZl() {
            window.open('https://juejin.im/user/5ad6946f51882555894a53d1/posts');
        },
        goGt() {
            window.open('https://github.com/Z6T/nature-ui');
        }
    },
}
</script>

<style lang="less">
.nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 200px;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    .nav__log {
        height: 100%;
        img {
            height: 100%;
        }
    }
    .nav__item__wrapper {
        display: flex;
        animation: toLeftmove 1s ease-in 1;
        position: relative;
        .nav__item {
            padding: 0 4px;
            padding: 0 10px;
            font-size: 16px;
            line-height: 60px;
            color: #3399cc;
            // border-bottom: 3px solid #3399cc;
            cursor: pointer;
            &:hover {
                background-color: #7dabc1;
                color: white;
            }
        }
    }
}

.rocket {
    position: relative;
    left: -3330px;
    height: 100%;
    transform: rotate(45deg);
    animation: rocketMove 10s ease-in 1s 1;
}

@media screen and (max-width: 1300px) {
    .nav {
        padding: 0 100px;
    }
}

@keyframes toLeftmove {
    from {
        left: 400px;
        background-color: #7dabc1;
        color: white;
    }
    to {
        left: 0px;
        background-color: #fff;
        color: #7dabc1;
    }
}
@keyframes rocketMove {
    from {
        left: 330px;
    }
    to {
        left: -1400px;
        display: none;
    }
}
</style>
