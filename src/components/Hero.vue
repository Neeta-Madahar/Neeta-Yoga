<template>
  <div class="hero column center-xs">
    <nav>
      <ul class="clear-fix">
        <li class="float-right menu">
          <button>
            <i class="icon-burger2" id="burger-icon" />
            <i class="icon-close2" />
          </button>
        </li>
        <li><a href="#about">About </a></li>
        <li><a href="#yoga">Yoga Classes </a></li>
        <li><a href="#meditation">Meditation </a></li>
        <li><a href="#">Explore </a><i class="icon-chevron" /></li>
        <li><a href="#contact">Contact </a></li>
      </ul>
    </nav>

    <div class="container">
      <h1><img class="logo " src="../assets/images/logo-neeta.svg" alt="neeta madahar"></h1>
      <span class="caption">Yoga & <br>Meditation <br>Teacher</span>
    </div>

  </div>

</template>

<script>
  export default { }
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
  font-size: 20px;
  margin-top: 50px;
}

li {
  list-style-type: none;
  padding: 0 20px;
  display: none;
  @include sm {
    display: inline;
  }

}

br {
    display: none;
    @include sm {
      display: block;
    }
}

nav {
  text-align: center;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
}

.menu {
  display: block;
  @include sm {
    display: none;
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


</style>
