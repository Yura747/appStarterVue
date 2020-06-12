<template>
    <div class="home">
        <section class="first-section">
            <div class="layout">
                <div class="columns-wr">
                    <div class="column first-section__info">
                        <div class="app-icon">
                            <img class="icon" src="icons/AppIcon.png" alt="AppIcon">
                        </div>
                        <h2 class="c-title c-title--margin">
                            AppStarter. <span class="c-title--small">Best landing page for web and mobile apps</span>
                        </h2>
                        <div class="c-button__wr">
                            <Button class="c-button--orange">Download Now</Button>
                            <Button class="c-button--white">Watch Video</Button>
                        </div>
                    </div>
                    <div class="column first-section__banner">
                        <img class="first-section__banner-image" src="img/Tablet.png" alt="intro-tablet">
                    </div>
                </div>
            </div>
        </section>
        <section class="section-pricing-table">
            <div class="pricing-table" id="pricing">
                <div class="layout">
                    <div class="columns-wr">
                        <div class="column pricing-table__description">
                            <div class="pricing-table__description-content-block">
                                <h2 class="c-title c-title--black">
                                    Choose <span class="c-title--small">your plan</span>
                                </h2>
                                <p class="pricing-table__description-text">
                                    This sounded nonsense to Alice, so she said <br>
                                    nothing, but set off at once toward the Red Queen. <br>
                                    To her surprise, she lost sight of her in a moment, <br>
                                    and found herself walking.
                                </p>
                                <div class="pricing-table__selector-block">
                                    <label class="pricing-table__selector-label" for="licences">
                                        Select the number of licenses:
                                    </label>
                                    <select class="pricing-table__selector" name="licenses" id="licenses">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div class="pricing-table__promocode">
                                    <form class="pricing-table__promocode-form" @submit.prevent="Promocode()">
                                        <label for="promocode" class="c-label pricing-table__promocode-label">Enter the promo code:</label>
                                        <input type="text" class="c-input pricing-table__promocode-input" placeholder="Promo code">
                                        <Button class="c-button c-button--blue pricing-table__promocode-btn">Apply</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="column pricing-table__plans">
                            <div class="pricing-table__plans-inner">
                                <div class="c-card c-card--proff">
                                    <div class="c-card__line c-card__line--proff">
                                        <h5 class="c-card__line-title c-card__line-title--white">Professional</h5>
                                    </div>
                                    <div class="c-card__inner">
                                        <h4 class="c-card__price c-card__price--proff">10$</h4>
                                        <ul class="c-card__list c-card__list--proff">
                                            <li class="c-card__list-item c-card__list-item--white">Hundreds of elements</li>
                                            <li class="c-card__list-item c-card__list-item--white">Style guide</li>
                                            <li class="c-card__list-item c-card__list-item--white">160 icons included</li>
                                            <li class="c-card__list-item c-card__list-item--white">Sketch files</li>
                                            <li class="c-card__list-item c-card__list-item--white">Commercial licence</li>
                                        </ul>
                                        <Button class="c-button c-button--orange">
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                                <div class="c-card c-card--starter">
                                    <div class="c-card__line c-card__line--starter">
                                        <h5 class="c-card__line-title">starter</h5>
                                    </div>
                                    <div class="c-card__inner">
                                        <h4 class="c-card__price c-card__price--starter">FREE</h4>
                                        <ul class="c-card__list c-card__list--starter">
                                            <li class="c-card__list-item c-card__list-item--grey">Hundreds of elements</li>
                                            <li class="c-card__list-item c-card__list-item--grey">Style guide</li>
                                            <li class="c-card__list-item c-card__list-item--grey">30 icons included</li>
                                            <li class="c-card__list-item c-card__list-item--grey">Personal licence</li>
                                        </ul>
                                        <Button class="c-button c-button--green">
                                            Get Free
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-why-use why-use">
            <div class="layout">
                <h2 class="c-title c-title--margin text-center">
                    Why
                    <span class="c-title--small">do we use it?</span>
                </h2>
                <p class="c-subtitle text-center">
                    This sounded nonsense to Alice, so she said nothing, but set off at once toward <br>
                    the Red Queen. To her surprise, she lost sight of her in a moment.
                </p>
                <div class="why-use__timers-block">
                    <TimerComponent />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Button from '../components/Button/index.vue';
import TimerComponent from '../components/TimerComponent/index.vue';

@Component({ components: { Button, TimerComponent } })

export default class Home extends Vue {

    Promocode() {
        // some code here..
    }
}
</script>


<style lang="scss">
    .first-section {
        margin-top: 40px;

        &__info {
            margin-bottom: 100px;
        }

        &__banner {
            margin-bottom: -130px;
            text-align: center;
        }

        &__banner-image {
            width: 480px;
            height: 718px;
        }
    }

    .pricing-table {
        background-color: #f8f9fa;
        border-top: 1px solid #e7e8ea;
        padding: 148px 0 120px 0;

        &__description-text {
            font-size: 16px;
            text-align: left;
            margin-top: 40px;
            margin-bottom: 0;
        }

        &__plans {
            width: 60%;
        }

        &__plans-description {
            width: 40%;
        }

        &__plans-inner {
            height: 100%;
            display: flex;
            align-items: center;
        }

        &__selector-block {
            padding-top: 20px;
            padding-bottom: 23px;
        }

        &__selector {
            background-color: white;
            border: none;
            border-radius: 6px;
            display: inline-block;
            width: 90px;
            padding: 9px 15px;
            font-size: 14px;
            margin: 0;
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: linear-gradient(45deg, transparent 50%, #b9bdc3 50%), linear-gradient(135deg, #b9bdc3 50%, transparent 50%);
            background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0;
            background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
            background-repeat: no-repeat;
        }
    }

    .why-use {
        padding: 113px 0;

        &__timers-block {
            background-color: #fff;
            border-radius: 12px;
            padding: 40px 0;
            text-align: center;
            max-width: 770px;
            margin: 0 auto;
        }
    }

    .c-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 12px;
        padding: 50px 0 60px 0;
        width: 350px;
        position: relative;

        &__inner {
            width: 100%;
            padding: 0 50px;
            box-sizing: border-box;

            .c-button {
                width: 100%;
            }
        }

        &--proff {
            box-shadow: 0px 6px 12px 0px rgba(40, 43, 49, 0.08);
            background-image: url('../../public/img/Background.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            z-index: 1;
        }

        &--starter {
            background-color: #ffffff;
            box-shadow: 0px 1px 3px 0px rgba(32, 33, 39, 0.12);
            margin-left: -15px;
            z-index: 0;
        }

        &__line {
            padding: 10px 0;
            width: 100%;
            text-align: center;

            &--proff {
                background-color: rgba(248, 249, 250, 0.071);
                box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.3),
                      inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3);
            }

            &--starter {
                background-color: #f8f9fa;
                box-shadow: 0px 1px 0px 0px rgba(231, 232, 234, 0.004), inset 0px 1px 0px 0px rgba(231, 232, 234, 0.004);
                border-top: 1px solid #e7e8ea;
                border-bottom: 1px solid #e7e8ea;
            }
        }

        &__line-title {
            text-transform: uppercase;
            text-align: center;
            font-weight: 900;
            font-size: 11px;
            margin: 0;

            &--white {
                color: #ffffff;
            }
        }

        &__list {
            margin-top: 0;
            margin-bottom: 20px;
        }

        &__list-item {
            font-size: 15px;
            text-align: left;
            position: relative;
            padding-bottom: 10px;

            &--white {
                color: #ffffff;
                list-style-image: url('../../public/icons/success-icon-white.png');
            }

            &--grey {
                list-style-image: url('../../public/icons/success-icon-grey.png');
            }
        }

        &__price {
            margin: 35px 0;
            text-align: center;

            &--proff {
                color: #ffffff;
                font-size: 60px;
            }

            &--starter {
                font-size: 40px;
                color: #282b31;
            }
        }
    }

    @media (max-width: 1200px) {
        .first-section {
            &__banner-image {
                width: 380px;
                height: 618px;
            }
        }
    }
    @media (max-width: 960px) {
        .first-section {
            &__info {
                text-align: center;
                margin-top: 65px;
            }

            &__banner-image {
                width: 480px;
                height: 718px;
            }
        }

        .pricing-table {
            padding: 120px 0 70px 0;

            &__plans-inner {
                flex-direction: column;
            }

            &__description-text {
                text-align: center;
            }

            .c-card {
                margin: 50px 0 0 0;
            }
        }

        .why-use {
            padding: 80px 0;
        }
    }
    @media (max-width: 800px) {
        .first-section {
            &__banner-image {
                height: 80%;
                width: 80%;
            }
        }
    }
    @media (max-width: 600px) {
        .first-section {
            margin-top: 10px;
        }

        .why-use {
            padding: 30px 0;

            &__timers-block {
                padding: 15px 0;
            }
        }
    }
    @media (max-width: 360px) {
        .first-section {
            &__banner-image {
                height: 538px;
                width: 300px;
            }
        }
    }
    @media (max-width: 320px) {
        .first-section {
            &__banner-image {
                height: 400px;
                width: 280px;
            }
        }
    }
</style>

