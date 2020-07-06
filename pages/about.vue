<template>
<section class="container">
  <div>
    <transition name="page">
      <nuxt />
    </transition>
  </div>
  <body class="allAbout">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
    <div class="aboutAuthor">
      <p>Santa is a Tokyo based Visual Programmer.</p>
      <div class="aboutLogo">
        <!-- <img
          src="https://lh3.googleusercontent.com/71jjT8idP50_o2ZMNoUDdEAmUgfV2_gMRb32clSqFUGPLgtMIopT-pB4FDhbvuZYh-xLT9fG_cKgcr5GWYIx9piUbKtnjEgbRifenoDzomxQ8y4DmNlw8I155-OUNeAAS2sxRSjFjLA=w2400"
          alt="logo"
          width="300px"
        />-->
        <img
          src="https://lh3.googleusercontent.com/uOwasJm4zbD1gp3n5k4lia1sm2czcPx4UPthHpfQy1iwyupi_sbbddOj_1iu4r5ZwlG8Gx0ZB4B_Ep1t_F0wPkx3Uxnpzu_DRnKtEW3I8PwGyWEhmIVwh-atadxAY8ag2kcQaGF9gz8=w2400"
          alt="profile"
          width="300px"
        />
      </div>
      <div class="aboutAuthorSub">
        <p>
          Visual Programmer / Visual Jockey / Student
          <br />ビジュアルパフォーマンス，Visual Jockey，作品制作，写真撮影を行う．
          <br />2000年大阪府生まれ．長野県育ち．神奈川県在住．
        </p>
        <div class="aboutLink">
          <a href="https://twitter.com/santa_sukitoku" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/santa-sukitoku" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://soundcloud.com/santa-n" target="_blank">
            <i class="fab fa-soundcloud"></i>
          </a>
          <a
            href="https://open.spotify.com/user/21i5tt577asz4phxd3rk7xibi?si=tVJRdrfzSrCjTmRyphYqdQ"
            target="_blank"
          >
            <i class="fab fa-spotify"></i>
          </a>
          <a href="https://www.instagram.com/santa_sukitoku/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="aboutCareer">
      <p>- Skills -</p>
      <div class="aboutCareerSub">
        <p>
          [Visual] TouchDesigner / GLSL / Processing / p5.js
          <br />[Sound] Cycling 74 Max / Ableton Live
          <br />[Frontend] Nuxt.js / HTML / SCSS
        </p>
      </div>
    </div>
    <div class="aboutCareer">
      <p>- Performances -</p>
      <div class="aboutCareerSub">
        <p>
          [2020.06]
          <a
            href="https://metro-streaming.com/2020/06/20/save-the-metro-compilations-curated-by-kenichi-itoi/"
            target="_blank"
          >METRO 30周年記念配信 -DAY2- Save The Metro Compilations curated by Ken’ichi Itoi</a> - Visual
          <br />[2020.04]
          <a
            href="https://twitter.com/CCLab_SFC/status/1251122493642817538?s=20"
            target="_blank"
          >x-Music Online Vol.00</a> - Visual
          <br />[2020.04]
          <a
            href="https://twitter.com/rhizomatiks/status/1245636361731768321?s=20"
            target="_blank"
          >Staying Tokyo Vol.00</a> - Visual
          <br />[2020.02]
          <a href="http://ochiaisoup.com/?p=3734" target="_blank">Algorave Tokyo</a> - Visual
          <br />[2019.10]
          <router-link to="works/191024">SFC Creative Week</router-link>&nbsp;- Visual
          <br />[2019.07]
          <a
            href="https://sukitoku.hatenablog.com/entry/190617"
            target="_blank"
          >X-Music DJ Night</a> - Visual
          <br />[2019.06]
          <a
            href="https://kagurane.com/schedules/view/1156"
            target="_blank"
          >SourceCord Vol.3</a> - Visual
          <br />[2018.11]
          <a
            href="http://club-stomp.com/2018/11/09/algorave-osaka/"
            target="_blank"
          >Algorave Osaka</a> - Visual
        </p>
      </div>
    </div>
    <div class="aboutCareer">
      <p>- Education -</p>
      <div class="aboutCareerSub">
        <p>
          [2020 - Current]
          <a
            href="https://www.kri.sfc.keio.ac.jp/ja/lab/xmusic/"
            target="_blank"
          >x-Music Laboratory</a>,
          at
          <a href="https://www.keio.ac.jp/" target="_blank">Keio University</a>
          <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
          <br />[2019 - Current]
          <a
            href="https://cclab.sfc.keio.ac.jp"
            target="_blank"
          >Computational Creativity Lab</a>,
          at
          <a href="https://www.keio.ac.jp/" target="_blank">Keio University</a>
          <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
          <br />[2016 - 2019]
          <a href="https://www.seikyo.ed.jp" target="_blank">Seikyo Gakuen High School</a>
        </p>
      </div>
    </div>
    <div class="aboutCareer">
      <p>- Work Experiences -</p>
      <div class="aboutCareerSub">
        <p>
          [2019.06 - 2019.10]
          <a href="https://nepps.jp" target="_blank">Nepps</a> Mentor
          <br />[2019.01 - 2019.03]
          <a href="https://www.1-10.com" target="_blank">1→10, Inc.</a>
          internship
          <br />[2018.03]
          <a href="https://tech.mercari.com/entry/2017/12/20/170000" target="_blank">
            Mercari
            BOLD Scholarship for SXSW 2018
          </a>
          <br />
          <br />
        </p>
      </div>
    </div>
  </body>
</section>
</template>

<script>
export default {
  layout: "default_about"
};
</script>
<style>
</style>
