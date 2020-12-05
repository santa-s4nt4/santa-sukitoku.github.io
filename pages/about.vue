<template>
  <section class="container">
    <div>
      <transition name="page">
        <nuxt />
      </transition>
    </div>
    <body class="allAbout">
      <link
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        rel="stylesheet"
      />
      <div class="aboutAuthor">
        <p>Santa is a Japan based Visual Programmer.</p>
        <div class="aboutLogo">
          <img
            src="https://lh3.googleusercontent.com/H8hTW_6WSYS-3MTy4jnQQmxfTbSO83rxrLYMdtYXDumwS25VhIzWUS8yzQPuCfLiSxArQgj6ZzcnyP-T_N-e6GKhb3RLHG-4yapkAP9xihTHGQ_m28c-fOYll8E2oWA6kKB0o3p3a7g=w2400"
            alt="profile"
            width="300px"
          />
        </div>
        <div class="aboutAuthorSub">
          <p>
            Visual Programmer / Visual Jockey / Student
            <br />ビジュアルパフォーマンス，Visual
            Jockey，インスタレーション作品制作を行う．
            <br />2000年大阪府生まれ．長野県/大阪府育ち．神奈川県在住．
          </p>
          <div class="aboutLink">
            <a href="https://twitter.com/santa_s4nt4" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/santa-s4nt4" target="_blank">
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
            <a href="https://www.instagram.com/santa_s4nt4/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Skills -</p>
        <div class="aboutCareerSub">
          <p>
            [Visual Tool] TouchDesigner / GLSL / Processing / p5.js
            <br />[Sound Tool] Cycling 74 Max / Ableton Live <br />[Programming
            Language] Python <br />[Frontend] Nuxt.js / HTML / SCSS
          </p>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Performances -</p>
        <div class="aboutCareerSub">
          <p>
            [2020.09]
            <a
              href="https://twitter.com/rhizomatiks/status/1308730110661414912?s=20"
              target="_blank"
              >Playing Tokyo Vol.11</a
            >
            - Visual <br />
            [2020.06]
            <a
              href="https://metro-streaming.com/2020/06/20/save-the-metro-compilations-curated-by-kenichi-itoi/"
              target="_blank"
              >METRO 30周年記念配信 -DAY2- Save The Metro Compilations curated
              by Ken’ichi Itoi</a
            >
            - Visual <br />[2020.04]
            <a
              href="https://twitter.com/CCLab_SFC/status/1251122493642817538?s=20"
              target="_blank"
              >x-Music Online Vol.00</a
            >
            - Visual <br />[2020.04]
            <a
              href="https://twitter.com/rhizomatiks/status/1245636361731768321?s=20"
              target="_blank"
              >Staying Tokyo Vol.00</a
            >
            - Visual <br />[2020.02]
            <a href="http://ochiaisoup.com/?p=3734" target="_blank"
              >Algorave Tokyo</a
            >
            - Visual <br />[2019.10]
            <router-link to="works/191024">SFC Creative Week</router-link
            >&nbsp;- Visual <br />[2019.07]
            <a
              href="https://sukitoku.hatenablog.com/entry/190617"
              target="_blank"
              >X-Music DJ Night</a
            >
            - Visual <br />[2019.06]
            <a href="https://kagurane.com/schedules/view/1156" target="_blank"
              >SourceCord Vol.3</a
            >
            - Visual <br />[2018.11]
            <a
              href="http://club-stomp.com/2018/11/09/algorave-osaka/"
              target="_blank"
              >Algorave Osaka</a
            >
            - Visual
          </p>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Exhibitions -</p>
        <div class="aboutCareerSub">
          <p>
            [2020.12]
            <a
              href="https://sa2020.siggraph.org/en/attend/art-gallery/session_slot/191/2"
              >SIGGRAPH ASIA 2020 ART GALLERY</a
            >
            &nbsp;/&nbsp;
            <a
              href="https://cclab.sfc.keio.ac.jp/projects/x-visual-holarchy/"
              target="_blank"
              >holarchy</a
            >
            - Frontend
          </p>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Awards -</p>
        <div class="aboutCareerSub">
          <p>
            [2020.12]
            <a
              href="https://kc-i.jp/activity/award/isca/2020/#content"
              target="_blank"
              >ISCA Wonderland 2020</a
            >&nbsp;/&nbsp;<router-link to="/works/200423"
              >Sonic-Aquarium</router-link
            >
            - 入賞
          </p>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Education -</p>
        <div class="aboutCareerSub">
          <p>
            [2020.10 - Current]
            <a href="https://wakita.sfc.keio.ac.jp/index.html" target="_blank"
              >Wakita Laboratory</a
            >, at
            <a href="https://www.keio.ac.jp/" target="_blank"
              >Keio University</a
            >
            <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
            <br />[2020.04 - Current]
            <a href="https://x-music.sfc.keio.ac.jp/" target="_blank"
              >x-Music Laboratory</a
            >, at
            <a href="https://www.keio.ac.jp/" target="_blank"
              >Keio University</a
            >
            <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
            <br />[2019.04 - Current]
            <a href="https://cclab.sfc.keio.ac.jp" target="_blank"
              >Computational Creativity Lab</a
            >, at
            <a href="https://www.keio.ac.jp/" target="_blank"
              >Keio University</a
            >
            <a href="https://www.sfc.keio.ac.jp" target="_blank">SFC</a>
            <br />[2016.04 - 2019.03]
            <a href="https://www.seikyo.ed.jp" target="_blank"
              >Seikyo Gakuen High School</a
            >
          </p>
        </div>
      </div>
      <div class="aboutCareer">
        <p>- Work Experiences -</p>
        <div class="aboutCareerSub">
          <p>
            [2020.10 - Current]
            <a href="https://dentsucraft.tokyo/" target="_blank"
              >Dentsu Craft Tokyo</a
            >
            internship
            <br />
            [2019.06 - 2019.10]
            <a href="https://nepps.jp" target="_blank">Nepps</a> Mentor
            <br />[2019.01 - 2019.03]
            <a href="https://www.1-10.com" target="_blank">1→10, Inc.</a>
            internship
            <br />[2018.03]
            <a
              href="https://tech.mercari.com/entry/2017/12/20/170000"
              target="_blank"
            >
              Mercari BOLD Scholarship for SXSW 2018
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
  layout: "default_about",
};
</script>
<style>
</style>
