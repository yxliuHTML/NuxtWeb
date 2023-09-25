<template>
  <header class="header-of-page black-header">
    <div class="header-content">
      <a href="/?home=1" class="left-logo">
        <img src="../assets/img/logo.png" alt="">
      </a>

      <div class="header-nav">
        <NuxtLink class="nav-item" v-for="item in navigation" :key="item.name" :to="item.href">
          <span class="first-nav">{{ item.name }}</span>
        </NuxtLink>
      </div>

      <div class="right-login">
        <a href="" rel="nofollow">Log in</a>
        <a href="" class="free" rel="nofollow">Get Started for Free</a>
      </div>

      <div class="iconfont icon_menu"></div>
      <div class="iconfont icon_menu_close"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navigation = [
  { name: "首页", href: "#" },
  { name: "赛事", href: "/game" },
  { name: "资讯", href: "#" },
  { name: "大美成都", href: "#" },
  { name: "关于世运会", href: "#" },
];
</script>
<style lang="scss" scoped>
.header-of-page {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 11;
  transition: all 0.3s linear;
}

.header-of-page .header-content {
  width: 92%;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  padding: 20px 0 0;
}

.header-of-page .header-content::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.header-of-page .header-content .left-logo {
  display: block;
  float: left;
  margin-top: 4px;
}

.header-of-page .header-content .left-logo img {
  width: 146px;
  height: 71px;
}

.header-of-page .header-content .left-logo .pic1 {
  display: block;
}

.header-of-page .header-content .left-logo .pic2 {
  display: none;
}

.header-of-page .header-content .left-logo .pic3 {
  display: none;
}

.header-of-page .header-content .header-nav {
  float: left;
  font-size: 0;
  margin-left: 86px;
  margin-top: 4px;
}

.header-of-page .header-content .header-nav .nav-item {
  display: inline-block;
  margin-left: 48px;
  position: relative;
  padding-bottom: 20px;
}

.header-of-page .header-content .header-nav .nav-item:first-child {
  margin-left: 0;
}

.header-of-page .header-content .header-nav .nav-item span.first-nav {
  position: relative;
  padding-right: 20px;
}

.header-of-page .header-content .header-nav .nav-item .first-nav {
  display: block;
  font-size: 16px;
  line-height: 32px;
  color: #353030;
  cursor: pointer;
  transition: 0.3s;
}

@media (min-width: 1100px) {
  .header-of-page .header-content .header-nav .nav-item:hover .first-nav {
    color: rgba(53, 48, 48, 0.4);
  }

  .header-of-page .header-content .header-nav .nav-item:hover .first-nav .iconfont {
    color: rgba(53, 48, 48, 0.4);
  }
}

.header-of-page .header-content .header-nav .nav-item .second-menu {
  position: absolute;
  left: -16px;
  border: 1px solid #f0eeee;
  border-radius: 16px;
  box-shadow: 0px 16px 32px 0px rgba(53, 48, 48, 0.08);
  width: 728px;
  background-color: #ffffff;
  overflow: hidden;
  top: 40px;
  display: none;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .top-titles {
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  color: rgba(53, 48, 48, 0.4);
  line-height: 22px;
  padding-left: 16px;
  margin-bottom: 16px;
  margin-top: 40px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .top-titles .more {
  float: right;
  position: relative;
  padding-right: 32px;
  font-weight: normal;
  color: rgba(53, 48, 48, 0.4);
}

.header-of-page .header-content .header-nav .nav-item .second-menu .top-titles .more .iconfont {
  position: absolute;
  right: 16px;
  font-size: 14px;
  color: rgba(53, 48, 48, 0.4);
}

.header-of-page .header-content .header-nav .nav-item .second-menu .top-titles:first-child {
  margin-top: 0;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .top-titles-line {
  border-top: 1px solid #F0EEEE;
  font-size: 14px;
  font-weight: bold;
  color: rgba(53, 48, 48, 0.4);
  line-height: 22px;
  margin: 16px -16px;
  padding: 23px 31px 0;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .price-a {
  display: block;
  padding-left: 56px;
  position: relative;
  font-size: 16px;
  line-height: 56px;
  color: #353030;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 8px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .price-a img {
  display: block;
  width: 24px;
  position: absolute;
  left: 16px;
  top: 16px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .price-a:hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .price-b {
  display: block;
  font-size: 16px;
  line-height: 48px;
  color: #353030;
  transition: 0.3s;
  border-radius: 8px;
  padding-left: 20px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .price-b:hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 408px;
  background-color: #F0EEEE;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list {
  float: left;
  padding: 24px 16px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list .top-titles {
  padding-left: 24px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list a:not(.a1) {
  display: block;
  padding: 16px 0 16px 88px;
  background-size: 48px auto;
  background-position: 24px center;
  background-repeat: no-repeat;
  width: 376px;
  transition: 0.2s;
  border-radius: 8px;
  cursor: pointer;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list a:not(.a1):hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list a:not(.a1) span {
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: #353030;
  font-weight: bold;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list a:not(.a1) p {
  margin-top: 4px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(53, 48, 48, 0.7);
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list .a1 {
  cursor: pointer;
  width: 288px;
  display: block;
  line-height: 40px;
  border-radius: 8px;
  font-size: 16px;
  color: #353030;
  padding-left: 32px;
  position: relative;
  transition: 0.2s;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list .a1 .iconfont {
  font-size: 12px;
  color: rgba(53, 48, 48, 0.4);
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-list .a1:hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-a {
  float: left;
  padding: 16px 16px 22px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-a a {
  width: 160px;
  display: block;
  padding: 0 16px;
  font-size: 16px;
  line-height: 40px;
  color: #353030;
  transition: 0.2s;
  border-radius: 8px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .left-a a:hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons {
  float: left;
  padding: 24px 0 24px 16px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .a1 {
  cursor: pointer;
  width: 288px;
  display: block;
  line-height: 40px;
  border-radius: 8px;
  font-size: 16px;
  color: #353030;
  padding-left: 16px;
  position: relative;
  transition: 0.2s;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .a1:hover {
  background-color: #F8F6F6;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .blog-a {
  display: block;
  width: 298px;
  margin-bottom: 16px;
  padding-left: 142px;
  position: relative;
  min-height: 66px;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .blog-a .pic {
  width: 126px;
  height: 66px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  border-radius: 8px;
  transition: 0.2s;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .blog-a span {
  display: block;
  font-size: 14px;
  line-height: 22px;
  color: #353030;
  font-weight: bold;
  transition: 0.2s;
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .blog-a:hover .pic {
  transform: scale(1.02);
}

.header-of-page .header-content .header-nav .nav-item .second-menu .right-cons .blog-a:hover span {
  color: #009DFF;
}

@media (min-width: 1100px) {
  .header-of-page .header-content .header-nav .nav-item:hover .second-menu {
    display: block;
  }
}

.header-of-page .header-content .right-login {
  float: right;
  font-size: 0;
}

.header-of-page .header-content .right-login a {
  display: inline-block;
  line-height: 40px;
  width: 72px;
  text-align: center;
  border-radius: 8px;
  color: #353030;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

@media (min-width: 1100px) {
  .header-of-page .header-content .right-login a:hover {
    color: rgba(53, 48, 48, 0.7);
  }
}

.header-of-page .header-content .right-login .free {
  width: 168px;
  background-color: #fe4066;
  color: #ffffff;
  margin-left: 16px;
  transition: 0.2s;
  font-weight: 600;
}

.header-of-page .header-content .right-login .free:hover {
  background-color: #ff5476;
  color: #ffffff;
}

.header-of-page .header-content .right-user {
  float: right;
  position: relative;
  padding-right: 20px;
  cursor: pointer;
}

.header-of-page .header-content .right-user .avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  border: 1px solid #f0eeee;
}

.header-of-page .header-content .right-user .arrow-down {
  font-size: 16px;
  color: rgba(53, 48, 48, 0.7);
  right: 0;
  top: 14px;
  line-height: 16px;
  position: absolute;
}

.header-of-page .header-content .right-user .user-menu {
  position: absolute;
  top: 48px;
  right: 0;
  background-color: #ffffff;
  margin: 0;
  padding: 12px 0;
  display: none;
  z-index: 9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 140px;
  border-radius: 6px;
}

.header-of-page .header-content .right-user .user-menu a {
  display: block;
  padding: 0 20px;
  color: #000000;
  font-size: 14px;
  line-height: 30px;
  transition: 0.2s;
}

@media (min-width: 1100px) {
  .header-of-page .header-content .right-user .user-menu a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.header-of-page .header-content .icon_menu {
  display: none;
  font-size: 24px;
  line-height: 32px;
  color: #353030;
  float: right;
  margin-top: 4px;
}

.header-of-page .header-content .icon_menu_close {
  display: none;
}

.black-header .header-content .left-logo .pic1 {
  display: none;
}

.black-header .header-content .left-logo .pic2 {
  display: block;
}

.black-header .header-content .left-logo .pic3 {
  display: none;
}

.black-header .header-content .header-nav .nav-item .first-nav {
  color: #ffffff;
}

.black-header .header-content .header-nav .nav-item .first-nav .iconfont {
  color: rgba(255, 255, 255, 0.7);
}

@media (min-width: 1100px) {
  .black-header .header-content .header-nav .nav-item:hover .first-nav {
    color: rgba(255, 255, 255, 0.4);
  }

  .black-header .header-content .header-nav .nav-item:hover .first-nav .iconfont {
    color: rgba(255, 255, 255, 0.4);
  }
}

.black-header .header-content .right-login a {
  color: #ffffff;
}

@media (min-width: 1100px) {
  .black-header .header-content .right-login a:hover {
    color: rgba(255, 255, 255, 0.4);
  }
}

.black-header .header-content .right-user .iconfont {
  color: rgba(255, 255, 255, 0.7);
}

@media (min-width: 1100px) {
  .black-header .header-content .right-user .iconfont:hover {
    color: rgba(255, 255, 255, 0.4);
  }
}

.header-of-page.header-scrolls {
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(53, 48, 48, 0.04);
}

.header-of-page.header-scrolls .header-content .left-logo .pic1 {
  display: block;
}

.header-of-page.header-scrolls .header-content .left-logo .pic2 {
  display: none;
}

.header-of-page.header-scrolls .header-content .left-logo .pic3 {
  display: none;
}

.header-of-page.header-scrolls .header-content .header-nav .nav-item .first-nav {
  color: #353030;
}

.header-of-page.header-scrolls .header-content .header-nav .nav-item .first-nav .icon_broad_back {
  color: rgba(53, 48, 48, 0.7);
}

@media (min-width: 1100px) {
  .header-of-page.header-scrolls .header-content .header-nav .nav-item .first-nav:hover {
    color: rgba(53, 48, 48, 0.7);
  }

  .header-of-page.header-scrolls .header-content .header-nav .nav-item .first-nav:hover .iconfont {
    color: rgba(53, 48, 48, 0.4);
  }
}

.header-of-page.header-scrolls .header-content .right-login a {
  color: rgba(53, 48, 48, 0.7);
}

@media (min-width: 1100px) {
  .header-of-page.header-scrolls .header-content .right-login a:hover {
    color: #353030;
  }
}

.header-of-page.header-scrolls .header-content .right-login .free {
  background-color: #fe4066;
  color: #ffffff;
}

@media (min-width: 1100px) {
  .header-of-page.header-scrolls .header-content .right-login .free:hover {
    background-color: #ff5476;
    color: #ffffff;
  }
}

.header-of-page.header-scrolls .header-content .right-user .arrow-down {
  color: rgba(53, 48, 48, 0.7);
}

.header-of-page.header-scrolls .header-content .icon_menu {
  color: rgba(53, 48, 48, 0.7);
}

.header-message-container .header-content .message {
  cursor: pointer;
  float: right;
  margin: 13px 20px 0 0;
  position: relative;
}
</style>