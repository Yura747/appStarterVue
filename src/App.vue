<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';

export default {
    name: 'App',
        components: {
            Header, Footer
        },
    }
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap');

#app {
    font-family: 'Nunito Sans', sans-serif;
    color: rgb(103, 108, 117);
}

html, body{
    margin: 0;
    padding: 0;
}

body {
    background-image: url('../public/img/Background.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
}

.layout {
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
    padding: 0 8px;
}

.columns-wr {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.column {
    width: 50%;
    height: 100%;
}

.c-title {
    font-size: 35px;
    font-family: "NunitoSans";
    color: #ffffff;
    font-weight: bold;

    &--margin {
        margin: 40px 0;
    }

    &--small {
        font-weight: 300;
    }

    &--black {
        color: #000;
    }
}

.c-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 60px;
}

.c-label {
    display: block;
    margin-bottom: 5px;
}

.c-input {
    border-radius: 6px;
    background: #fff;
    border: none;
    height: 40px;
    margin-right: 15px;
    padding: 9px 15px;
    box-sizing: border-box;

    &::placeholder {
        opacity: 0.5;
    }

    &--bg-gray {
        border: 1px solid rgba(40, 43, 49, 0.16);
        background: #e7e8ea;
    }
}

.no-margin {
    margin: 0;
}

.text-center {
    text-align: center;
}

@media (max-width: 1440px) {
    .layout {
        max-width: 1000px;
    }
}
@media (max-width: 1200px) {
    .layout {
        max-width: 930px;
    }
}
@media (max-width: 960px) {
    .layout {
        max-width: 780px;
    }
    .columns-wr {
        flex-direction: column;
        width: 100%;
    }

    .column {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .c-title {
        &--margin {
            margin: 30px 0;
        }
    }
    .c-subtitle {
        margin-bottom: 20px;
    }
}

@media (max-width: 375px) {
    .layout {
        padding: 0 15px;
    }
}
</style>
