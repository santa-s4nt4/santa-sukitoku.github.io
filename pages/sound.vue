<template>
  <section class="container">
    <body class="all">
      <router-link to="/works/201204">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/UJNk3djFAmUrpogJ1gpFIzeilvNJz-G-7cLE9qQDyAGhDUen7Aslu1c4q22mGy5UNylVnzH2fV7EqPbdVPDRS9C6COlWlcW-aPCI_I71CaIExmsuW6gdh5aTBZBMxjoikjFKtG0Hpi0=w2400"
            width="100%"
          />
          <div class="mask">
            <div class="caption">
              <p>Sonic-Aquarium-v1</p>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/works/200718">
        <div class="works">
          <img
            src="https://lh3.googleusercontent.com/PMH-SlwKA70K1SXu5FTDolkKzmGps-EcTueBhsx76H-RgHL7oYw73tejsxE3iQPv6WjjkCefazmv10TD3OG_eEKGt8vqXg7RWkD-9-J4GtY5ke9oqN9ESWXHA3_P-tZBPk5JUjZ_zV4=w2400"
            width="100%"
          />
          <div class="mask">
            <div class="caption">
              <p>-14&#x2103;</p>
            </div>
          </div>
        </div>
      </router-link>

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
    </body>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Sound",
    };
  },
};
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
