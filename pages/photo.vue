<template>
<section class="container">
  <div>
    <transition name="page">
      <nuxt />
    </transition>
  </div>
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
        <li>
          <router-link to="/visual">Visual</router-link>
        </li>
        <li>
          <router-link to="/sound">Sound</router-link>
        </li>
        <li class="chooseCategory">
          <router-link to="/photo">Photo</router-link>
        </li>
      </ul>
    </div>
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
