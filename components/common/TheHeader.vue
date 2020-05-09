<template>
  <header class="header">
    <div class="menu">
      <div class="siteTitle">
        <ul>
          <li>
            <router-link to="/" class="site-title">Santa</router-link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/">Works</router-link>
        </li>
        <li>
          <a href="https://sukitoku.hatenablog.com/archive" target="_blank">Diary</a>
        </li>
      </ul>
    </div>
    <div class="year">
      <ul>
        <li>
          <router-link to="/">2020</router-link>
        </li>
        <li class="chooseYear">
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
  </header>
</template>