<template>
<section class="container">
  <body class="all">
    <div class="year">
      <ul>
        <li>
          <router-link to="/">2020</router-link>
        </li>
        <li>
          <router-link to="/2019">2019</router-link>
        </li>
      </ul>
    </div>
    <div class="category">
      <ul>
        <li class="chooseCategory">
          <router-link to="/visual">Visual</router-link>
        </li>
        <li>
          <router-link to="/sound">Sound</router-link>
        </li>
        <li>
          <router-link to="/photo">Photo</router-link>
        </li>
      </ul>
    </div>
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

    <router-link to="/works/191024">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/aUlxAwRBNudTcZf6DaE91xud3rTvao-gitIkfzgD_nr0Hg8v0q_3jyDTaR8aY-k-pEL_AhqHfGGRrbfO__e5AZFRUu-CImashxVX8JE7_1RH6IYaUXMy0AvQwTNjgrYXsmLwrjswlQw=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>visual system for SFC Creative Week</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/works/190717">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/z6cH0zUkyLu_hVsdjqCNNQoi64WmaCiKGWDH8SqOC5p2b3LR3oHIuLiSxc1IUeZf2fBlVHOPTxxj-d8PpHbgsMmfumRTSHFWaa2ZeR-_ByUcjVYO3pBTGxkGso7ArHNOfHQE-Mzk3pE=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>graphics programming final work</p>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/works/190602">
      <div class="works">
        <img
          src="https://lh3.googleusercontent.com/jUAeRx87g41nENrvKCMNhBO0HMcMmDJBUEUD_iI1QWyZHNJe8imc4c8C6WxD76UOASoZqyvFKwRRbUy1IJm_BXWK-AiDzLOovn4gqCaqAmB8lHINJCW-xDvptwBoMahvxpvHV-GfGfU=w2400"
          width="100%"
        />
        <div class="mask">
          <div class="caption">
            <p>
              visual system for
              <br />SourceCord Vol.3 & X-Music Night
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
.chooseCategory a {
  background: linear-gradient(-90deg, #e73c7e, #0e5aff, #23a6d5, #23d5ab);
  background-size: 600% 600%;
  animation: gradientBG 4s ease infinite;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 0px;
}
</style>