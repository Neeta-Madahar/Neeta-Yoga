<template>
  <div class="hero">
    <nav>
      <ul>
        <li><a href="#">About </a></li>
        <li><a href="#">Yoga Classes </a></li>
        <li><a href="#">Meditation </a></li>
        <li><a href="#">Explore </a></li>
        <li><a href="#">Contact </a></li>
      </ul>
    </nav>

    <div class="container">
      <h1 class="caption">Yoga & <br>Meditation <br>Teacher</h1>
      <img class="paisley" src="../assets/images/paisley.svg">
      <img class="logo " src="../assets/images/logo-neeta.svg">
    </div>

  </div>

</template>

<script>

</script>
<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';

.hero {
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

a {
  color: $color-white;
  text-decoration: none;
  font-family: $font-rubik;
  font-size: 24px;
  margin-top: 50px;
}

li {
  list-style-type: none;
  display: inline;
  padding: 0 20px;

}

nav {
  text-align: center;
  padding: 10px;
}

.logo {
  height: 240px;
  order: 1;
  margin-right: 30px;
}

.paisley {
  position: absolute;
  top: 27%;
  right: 49%;
}

.caption {
  order: 2;
  text-align: center;
  color: $color-white;
  font-family: $font-rubik;
  font-weight: normal;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
}


</style>
