<template>
  <div class="hero column center-xs">
    <button @click="toggle" :class="{active: menuOpen}" class="nav-button">
      <i class="icon-burger2 open-icon" aria-hidden="true" />
      <i class="icon-close2 close-icon" aria-hidden="true" />

      <span class="sr-only">{{menuOpen ? 'Close navigation' : 'Open navigation'}}</span>
    </button>

    <nav class="desktop-navigation">
      <ul class="clear-fix">
        <li><a href="#about" @click="scroll">About </a></li>
        <li><a href="#yoga" @click="scroll">Yoga Classes </a></li>
        <li><a href="#meditation" @click="scroll">Meditation </a></li>
        <li :class="{'dropdown-active': dropdownActive}">
          <button @click="showDropdown" class="dropdown-trigger" aria-haspopup="true" :aria-expanded="dropdownActive ? 'true' : 'false'">
            Explore
            <i class="icon-chevron" />
          </button>

          <ul class="dropdown" role="menu" aria-label="Explore">
            <li><a href="#resource" @click="scroll">Resources</a></li>
            <li><a href="#articles" @click=scroll>Articles</a></li>
            <li><a href="#videos" @click=scroll>Videos</a></li>
          </ul>
        </li>
        <li><a href="#events" @click=scroll>Events</a></li>
        <li><a href="#movies" @click=scroll>Movies</a></li>
        <li><a href="#contact" @click="scroll">Contact </a></li>
      </ul>
    </nav>

    <div class="container">
      <h1><img class="logo " src="../assets/images/logo-neeta.svg" alt=""></h1>
      <span class="caption">Yoga & <br>Meditation <br>Teacher</span>
    </div>

    <nav class="mobile-navigation" :class="{active: menuOpen}">
      <ul>
        <li class="mobile-navigation-link"><a href="#about" @click="scroll">About </a></li>
        <li class="mobile-navigation-link"><a href="#yoga" @click="scroll">Yoga Classes </a></li>
        <li class="mobile-navigation-link"><a href="#meditation" @click="scroll">Meditation </a></li>
        <li :class="{'dropdown-active': dropdownActive}">
          <button @click="showDropdown" class="dropdown-trigger" aria-haspopup="true" :aria-expanded="dropdownActive ? 'true' : 'false'">
            Explore
            <i class="icon-chevron" />
          </button>

          <ul class="dropdown" role="menu" aria-label="Explore">
            <li><a href="#resource" @click="scroll">Resources</a></li>
            <li><a href="#articles" @click=scroll>Articles</a></li>
            <li><a href="#videos" @click=scroll>Videos</a></li>
          </ul>
        </li>
        <li class="mobile-navigation-link"><a href="#contact" @click="scroll">Contact </a></li>
      </ul>
    </nav>
  </div>

</template>

<script>
  import smoothscroll from 'smoothscroll-polyfill';

  smoothscroll.polyfill();

  export default {
    props: {
      toggle: Function,
      menuOpen: Boolean
    },
    methods: {
      showDropdown: function() {
        this.dropdownActive = !this.dropdownActive;
      },
      scroll: function(e) {
        e.preventDefault();
        const SCROLL_TOP = document.querySelector(e.target.hash).getBoundingClientRect().top;

        window.scroll({ top: SCROLL_TOP, left: 0, behavior: 'smooth' });

        this.dropdownActive = false;

        this.toggle(true);
      }
    },
    data: () => ({
      dropdownActive: false
    })
  }
</script>

<style lang="scss" scoped>
  @import '../assets/sass/_mixins.scss';
  @import '../assets/sass/_utilities.scss';

  .hero {
    flex-direction: column;
    display: flex;
    height: 100vh;
    background: linear-gradient(0deg, $color-orange, $color-pink);
    background-size: 400% 400%;

    -webkit-animation: YogaHero 18s ease infinite;
    -moz-animation: YogaHero 18s ease infinite;
    animation: YogaHero 18s ease infinite;
  }

  i {
    color: white;
  }

  h1 {
    @include sm {
      margin-bottom: 0;
    }
  }

  a {
    color: $color-white;
    text-decoration: none;
    font-family: $font-rubik;
  }

  br {
    display: none;
    @include sm {
      display: block;
    }
  }

  .desktop-navigation {
    text-align: center;
    padding: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    display: none;

    @include sm {
      display: block;
    }

    li {
      list-style-type: none;
      padding: 0 20px;
      display: inline;
    }

    .dropdown-trigger {
      color: $color-white;
      font-family: $font-rubik;
    }

    .dropdown-active {
      position: relative;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      padding: 0;
      width: 200px;
      background: rgba($color-white, .6);
      margin-top: 10px;

      li {
        display: block;
        text-align: left;
        padding: 0;
        transition: background-color .3s ease;

        @include hover-focus {
          background-color: $color-pink;
        }
      }

      a {
        padding: 10px 20px;
        display: block;

      }
    }
  }

  .close-icon {
    display: none;
  }

  .nav-button {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    z-index: 10;

    @include sm {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &.active {
      .close-icon {
        display: block;
      }

      .open-icon {
        display: none;
      }
    }
  }

  .logo {
    margin: 0 auto;
    height: 140px;
    @include sm {
      height: 240px;
      margin-right: 30px;
    }
  }

  .caption {
    text-align: left;
    display: inline-block;
    margin: 0 auto;
    max-width: 280px;
    padding-top: 30px;
    color: $color-white;
    font-family: $font-rubik;
    font-weight: normal;
    font-size: $font-size-heading3;

    @include sm {
      text-align: center;
      font-size: $font-size-heading2;
      max-width: 100%;
    }

    @media screen and (min-width: 1024px) {
      align-self: flex-end;
    }
  }

  .container {
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 10px;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      display: flex;
    }
  }

  .mobile-navigation {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    z-index: 5;
    padding-top: 80px;
    background: linear-gradient(0deg, $color-orange, $color-pink);
    background-size: 400% 400%;
    opacity: 0;

    -webkit-animation: YogaHero 18s ease infinite;
    -moz-animation: YogaHero 18s ease infinite;
    animation: YogaHero 18s ease infinite;

    transition: opacity .3s ease;

    @include sm {
      display: none;
    }

    &.active {
      opacity: 1;
      left: 0;

      .mobile-navigation-link,
      .dropdown-trigger {
        transform: translateX(0);
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 30px;
    }

    .dropdown {
      a {
        color: $color-grey;
        padding: 10px;
        font-family: $font-raleway;
        display: block;
        margin: 0;
      }

      li {
        margin: 0;
      }
    }

    .dropdown-trigger {
      width: 100%;
      padding: 10px;
      color: $color-white;
      font-family: $font-rubik;
    }

    .dropdown-active {
      background: $color-white;

      .dropdown-trigger {
        color: $color-grey;
        border-bottom: 2px solid $color-pink;
      }

      i {
        &:before {
          color: $color-grey;
        }
      }
    }

    .mobile-navigation-link,
    .dropdown-trigger{
      transform: translateX(50px);
      transition: transform .3s ease;
    }
  }

  .dropdown {
    display: none;
  }

  .dropdown-active {
    .dropdown {
      display: block;
    }
  }

  .dropdown-trigger {
    &:focus {
      outline: none;
    }

    i {
      display: inline-block;
      vertical-align: middle;
      margin-left: 5px;
      transition: transform .3s ease;
    }
  }

  .dropdown-active {
    i {
      transform: rotate(180deg);
    }
  }

  @-webkit-keyframes YogaHero {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
  }
  @-moz-keyframes YogaHero {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
  }
  @keyframes YogaHero {
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
  }
</style>
