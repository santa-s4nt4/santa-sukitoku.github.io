<template>
  <section class="container">
    <div>
      <transition name="page">
        <nuxt />
      </transition>
    </div>
    <body class="all">
      <router-link to="/works/191231">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/7oSynJ6m3WrDY9WR7a5GsIpo8mdKYX5LQBrYgE0q8K3bw_go7vPMYNs_QWXXLarm9Yfi94KbgszuoM82_9HpWc7lVAB9fQYjhzMtebsrOjRwK_QHd-7MYV6_t7_X67xmJfx0ooJukBk=w2400"
            width="100%"
          />
          <div class="mask">
            <div class="caption">
              <p>best photographs of 2019</p>
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

      <router-link to="/works/190726">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/di8AVOK28cmWEf8TOLcTM6U9-sobSieS903egurIg247Fo8ysa9iXNNV_VjyEUiYhlO4u5Au3-91OBNE9JpW33uATaMb-7h06aChyM5F1LuwPHkEfoC8YZ4yk4PooaGZ79TrO0am_tk=w2400"
            width="100%"
          />
          <div class="mask">
            <div class="caption">
              <p>
                Computer Music1 final work
                <br />"I & Forest"
              </p>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/works/190705">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/3Nzk6qaLx8CAcnNVFhZD8xqDK4fvWBP7lg0gDNFeerhFzspV4s0oV_cA4Ogi6hNAWu-mAFutCvr6gMkFlTy7FW6uAwV-f-h19oNTThPJrluJygMSDGI3T1ydxTT2KGfdS3C9DR_IjC8=w2400"
            width="100%"
          />
          <div class="mask">
            <div class="caption">
              <p>Computer Music1 group work</p>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/works/190602">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/1VauE42WX8mA9BZ-MTtzKj67KCLEW9lpGyS5dKqrV3eHO7XphXCDpWszpASq7CusrGHYk79zldKnmKvMXA0aLFYOZ_Oh7eu0QNS4EB_oJu64IWks0NUozcHrkqIjwSWwHdswgpBZewQ=w2400"
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
export default {
  head() {
    return {
      title: "2019",
    };
  },
};
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
