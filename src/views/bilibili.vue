<template>
  <div class="bilibili">
    <div class="bili-header-m">
      <div class="nav-menu">
        <div class="blur-bg"></div>
        <div class="nav-mask"></div>
        <div class="bili-wrapper clearfix">
          <div class="nav-con fl">
            <ul>
              <li class="nav-item home"><a href="#" class="t"><i class="bili-icon"></i>主站</a></li>
              <li class="nav-item"><a href="#" class="t">画友</a></li>
              <li class="nav-item"><a href="#" class="t">音频</a></li>
              <li class="nav-item"><a href="#" class="t">游戏中心</a></li>
              <li class="nav-item"><a href="#" class="t">直播</a></li>
              <li class="nav-item"><a href="#" class="t">会员购</a></li>
              <li class="nav-item"><a href="#" class="t">萌战</a></li>
              <li class="nav-item mobile"><i class="b-icon b-icon-app"></i><a href="#" class="t">下载APP</a>
              </li>
            </ul>
          </div>
          <div class="up-load fr">
            <a href="#" class="u-link">投稿</a>
          </div>
          <div class="nav-con fr">
            <ul>
              <li class="nav-item"><a href="#" class="t"></a></li>
              <li class="nav-item"><a href="#" class="t">大会员</a></li>
              <li class="nav-item"><a href="#" class="t">消息</a></li>
              <li class="nav-item"><a href="#" class="t">动态</a></li>
              <li class="nav-item"><a href="#" class="t">稍后再看</a></li>
              <li class="nav-item"><a href="#" class="t">收藏夹</a></li>
              <li class="nav-item"><a href="#" class="t">历史</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="banner_link" class="head-banner"
           style="background-image: url('https://i0.hdslb.com/bfs/archive/30d45ce269948eae8ed650e5ce03a2ca463a5d77.png');">
        <div class="head-content bili-wrapper">
          <div class="search">
            <form action="" class="searchform">
              <input value class="search-keyword" placeholder="别睡觉啦，今夜凌晨有超长月全食"/>
              <button class="search-submit" type="submit"></button>
            </form>
            <a href="#" class="link-ranking">
              <span>排行榜</span>
            </a>
          </div>
          <a href="#" class="head-logo"
             style="background-image: url('https://i0.hdslb.com/bfs/archive/6063fb40e90a17912b71d2cfd4ea56f69abb70de.png');"></a>
        </div>
      </div>
      <div class="bili-wrapper">
        <div id="primary_menu" class="primary-menu">
          <ul class="nav-menu">
            <li class="home"><a href="#">
              <div class="nav-name">首页</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap">
                <span>742</span>
              </div>
              <div class="nav-name">动画</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap">
                <span>45</span>
              </div>
              <div class="nav-name">番剧</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>36</span>

              </div>
              <div class="nav-name">国创</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>999+</span>

              </div>
              <div class="nav-name">音乐</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>122</span>

              </div>
              <div class="nav-name">舞蹈</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>999+</span>

              </div>
              <div class="nav-name">游戏</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>764</span>
              </div>
              <div class="nav-name">科技</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>999+</span>
              </div>
              <div class="nav-name">生活</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>62</span>

              </div>
              <div class="nav-name">鬼畜</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>206</span>

              </div>
              <div class="nav-name">时尚</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>17</span>

              </div>
              <div class="nav-name">广告</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>999+</span>

              </div>
              <div class="nav-name">娱乐</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>999+</span>

              </div>
              <div class="nav-name">影视</div>
            </a></li>
            <li><a href="#">
              <div class="num-wrap"><span>4</span>

              </div>
              <div class="nav-name">放映厅</div>
            </a></li>
            <li class="side-nav zl"><a href="#" class="side-link">
              <i class="zhuanlan"></i>
              <span>专栏</span>
            </a></li>
            <li class="side-nav nav-square"><a href="#" class="side-link">
              <i class="square"></i>
              <span>广场</span>
            </a></li>
            <li class="side-nav"><a href="#" class="side-link">
              <i class="live"></i>
              <span>直播</span>
            </a></li>
            <li class="side-nav"><a href="#" class="side-link">
              <i class="blackroom"></i>
              <span>小黑屋</span>
            </a></li>
          </ul>
          <div class="gif-menu nav-gif">
            <a href="#" class="random-p">
              <img src="https://i2.hdslb.com/bfs/active/d7ba9c4bd660ec09ac68e78d5ac47c1d10257d7b.gif" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { setTitleAndIcon } from '@/utils/setTitleAndIcon'

  export default {
    name: 'bilibili',
    data() {
      return {}
    },
    created() {
      setTitleAndIcon(this.$route)
    }
  }
</script>

<style lang="less">
  .bilibili {
    background-color: #fff;
    color: #000;
    display: block;
    font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;

    a {
      transition: color .2s;
    }
  }

  * {
    margin: 0;
    border: 0;
    padding: 0;
  }

  .clearfix {
    &:after {
      content: "";
      display: table;
      clear: both;
      overflow: hidden;
    }
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .fl, .fr {
    display: inline;
  }
  .bili-header-m {
    font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
    position: relative;
    z-index: 10000;
    background: #fff;
    .bili-wrapper {
      width: 1160px;
      margin: 0 auto;
    }
    @media screen and (max-width: 1400px) {
      .bili-wrapper {
        width: 980px;
      }
    }
    .bili-icon {
      display: inline-block;
      background-image: url("https://static.hdslb.com/images/base/icons.png");
    }
    .b-icon {
      display: inline-block;
      vertical-align: middle;
      width: 12px;
      height: 12px;
      background: url("https://static.hdslb.com/images/base/icons.png");
      &.b-icon-app {
        background-position: -1371px -1175px;
        width: 16px;
        height: 21px;
      }
    }
    .nav-menu {
      position: relative;
      z-index: 200;
      height: 42px;
      color: #222;
      .nav-con {
        .nav-item {
          float: left;
          text-align: center;
          height: 42px;
          line-height: 42px;
          background-color: hsla(0, 0%, 100%, 0);
          position: relative;
          transition: all .3s;
          &:hover {
            background-color: hsla(0, 0%, 100%, .3);
          }
          &.home {
            margin-left: -10px;
            padding-left: 12px;
            a {
              padding-left: 20px;
            }
            .bili-icon {
              position: absolute;
              width: 17px;
              height: 14px;
              left: 10px;
              top: 12px;
              background-position: -919px -88px;
            }
          }
          &.mobile {
            padding: 0 10px;
            a {
              display: inline-block;
              padding: 0;
            }
          }
          .t {
            color: #222;
            height: 100%;
            display: block;
            padding: 0 8px;
          }
        }
      }
      .up-load {
        position: relative;
        width: 58px;
        height: 42px;
        margin-left: 8px;
        .u-link {
          display: block;
          width: 100%;
          height: 48px;
          line-height: 42px;
          font-size: 14px;
          text-align: center;
          color: #fff;
          background-color: #fb7299;
          border-radius: 0 0 6px 6px;
        }
      }
      .blur-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://i0.hdslb.com/bfs/archive/30d45ce269948eae8ed650e5ce03a2ca463a5d77.png");
        background-position: center -10px;
        background-repeat: no-repeat;
        filter: blur(4px);
      }
      .nav-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 100%, .4);
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
      }
    }
    ul {
      list-style: none;
    }
    .head-banner {
      position: relative;
      height: 170px;
      z-index: 199;
      margin-top: -42px;
      background: #eee;
      background-position: center -10px;
      background-repeat: no-repeat;
      .head-content {
        position: relative;
        height: 170px;
        .head-logo {
          position: absolute;
          width: 220px;
          height: 105px;
          left: 24px;
          top: 55px;
          background: transparent no-repeat;
          z-index: 10;
        }
        .search {
          position: absolute;
          bottom: 20px;
          right: 0;
          width: 268px;
          height: 32px;
          padding: 2px 2px 2px 72px;
          background-color: rgba(0, 0, 0, .12);
          border-radius: 6px;
          font-size: 12px;
          z-index: 10;
          .searchform {
            background-color: #fff;
            background-color: hsla(0, 0%, 100%, .88);
            display: block;
            height: 32px;
            border-radius: 4px;
            transition: background-color .2s;
            .search-keyword {
              float: left;
              width: 200px;
              outline: none;
              border-radius: 4px;
              height: 32px;
              line-height: 32px;
              border: 0;
              padding: 0 12px;
              background-color: transparent;
              font-size: 12px;
              color: #222;
              overflow: hidden;
            }
            .search-submit {
              position: absolute;
              display: block;
              right: 0;
              width: 48px;
              height: 32px;
              background: url(//static.hdslb.com/images/base/icons.png) -653px -720px;;
              border: 0;
              outline: none;
              cursor: pointer;
              &:hover {
                background-position: -718px -720px;
              }
            }
          }
          .link-ranking {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 68px;
            height: 32px;
            line-height: 32px;
            background-color: #fff;
            background-color: hsla(0, 0%, 100%, .88);
            border-radius: 4px;
            transition: background-color .2s;
            span {
              display: inline-block;
              padding-left: 26px;
              color: #f25d8e;
              background: url("https://static.hdslb.com/images/base/icons.png") -659px -655px no-repeat;
            }
          }
        }
      }
    }
  }

  .primary-menu {
    position: relative;
    width: 980px;
    height: 50px;
    padding: 8px 0 0;
    margin-bottom: 4px;
    z-index: 99;
    .nav-menu{
      display: inline-block;
      &>li{
        float: left;
        display: block;
        position: relative;
        margin-right: 0;
        &>a:not(.side-link){
          width: 48px;
          text-align: center;
          display: block;
          &>.num-wrap{
            position: absolute;
            top: 8px;
            left: 0;
            height: 14px;
            width: 100%;
            text-align: center;
            &>span{
              display: inline-block;
              vertical-align: top;
              border-radius: 3px;
              transform: scale(.85);
              height: 12px;
              line-height: 14px;
              max-width: 28px;
              padding: 1px 3px;
              font-family: sans-serif;
              color: #fff;
              background-color: #ffafc9;
            }
          }
          &>.nav-name{
            display: inline-block;
            vertical-align: middle;
            padding-top: 8px;
            height: 40px;
            line-height: 50px;
            font-size: 12px;
            color: #222;
          }
        }
        &.home{
          margin-right: 9px;
          &>a{
            width: auto;
            background: url("https://static.hdslb.com/images/base/icons.png") -660px -1170px no-repeat;
            .nav-name{
              position: relative;
              top: 15px;
              line-height: 20px;
            }
          }
        }
      }
      .side-nav{
        margin: 0 4px;
        width: 40px;
        text-align: center;
        .side-link{
          display: inline-block;
          position: relative;
          overflow: hidden;
          zoom: 1;
          i{
           display: block;
            width: 18px;
            height: 18px;
            margin: 3px auto 2px;
            background: url("https://static.hdslb.com/images/base/icons.png") no-repeat;
            &.zhuanlan{
              background-position: -87px -1814px;
            }
            &.square{
              background-position: -87px -2006px;
            }
            &.live{
              background-position: -87px -1878px;
            }
            &.blackroom{
              background-position: -87px -1942px;
            }
          }
          span{
            display: block;
            font-size: 12px;
            color: #222;
          }
        }
      }
    }
    .nav-gif{
      position: absolute;
      top: 0;
      right: 0;
      height: 50px;
      padding: 4px 0;
      .random-p{
        width: 69px;
        height: 40px;
        display: inline-block;
        vertical-align: top;
        margin: 3px 0;
        overflow: hidden;
        >img{
          width: 100%;
          height: 100%;
          margin: 0 auto;
          border-radius: 3px;
        }
      }
    }
  }
</style>
