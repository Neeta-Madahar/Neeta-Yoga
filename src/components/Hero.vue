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
    <h1>Yoga & <br>Meditation Teacher</h1>
    <div class="logo">
    </div>
  </div>

</template>

<script>

</script>
<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';

.hero {
  height: 653px;
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

</style>
