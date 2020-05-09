<template>
<section class="container">
  <div>
    <transition name="page">
      <nuxt />
    </transition>
  </div>
  <body class="all">
    <router-link to="/works/200423">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/FV7YiZEtLCJn5G1p03YqVo34wZ-YMrUWaVvAQgnC82nzU0DJeUXcGLhUQTPqKgcmO9mHKDigO2mZRZ3Wg1xfe05asawq98wb7zpz_36-X9ZROTBykEs_I2gZn8Qh0A-ca5Xyb9lZF1E=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>Optimize Heartbeat by Music</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/works/200418">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/1bmmevq6zXlreMCcBV9IbMaL1qm_-uCN1reOcQVly0-AoCJFKp7JlPBbFiJ6U7W0AoBoejQHI4Nk6KBhaIysqk3v6ewC0Yxya86gnWJFYVwNIvinULjtUb32tM3_YfkHU2PkWn90E5Q=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>visual system for x-Music Online vol.0.0</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/works/200215">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/fbKxieZgo7jvN7PGrn-zJZ8ZodGeRxD0txJPogqg8LHtAKNadIhtUYFt9ud7CXasoUlgPZX6dfoliYYdjp3ZcdF8WF538QLI0QoJyGLg6LxC05tTs9y3bGeGPlDFQ75kllFxQ0vjEPI=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>visual system for Algorave Tokyo</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/works/200117">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/2SdUua1t9uqJIEq7gI5KWXn4exLleO1vXCEivR9EychlPxvjaXSJec_1SDhT2RjT9B5zesCHck8uCZ95wM2z58S1gjxCVCJjbuIbzlLk6B9ereHRaHMfX1lPs_Sh7A8ivKEHpwlKdkw=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>
              Computer Music2 final work
              <br />"draw2sound"
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </body>
</section>
</template>

<script>
</script>

<style lang="scss" scoped>
.chooseYear a {
  background: linear-gradient(-90deg, #e73c7e, #0e5aff, #23a6d5, #23d5ab);
  background-size: 600% 600%;
  animation: gradientBG 4s ease infinite;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 0px;
}
</style>