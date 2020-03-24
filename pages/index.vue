<template>
<section class="container">
  <body class="all">
    <div class="year">
      <ul>
        <li class="chooseYear">
          <router-link to="/">2020</router-link>
        </li>
        <li>
          <router-link to="/2019">2019</router-link>
        </li>
      </ul>
    </div>
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