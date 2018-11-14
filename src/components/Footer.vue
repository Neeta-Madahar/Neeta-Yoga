<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs">
          &copy; {{ new Date().getFullYear() }} neetamadahar.com | Website by <a href="https://jupiterandthegiraffe.com">Jupiter and the Giraffe</a>
        </div>
        <div class="col-xs icons">
          <a href="https://www.instagram.com/neeta_madahar/">
            <i class="icon-instagram" aria-hidden="true"/>
          </a>
          <a href="https://www.facebook.com/neetasyogacafe/?hc_ref=ARS2ebRiKpFRkPntla-Hf1r3dScX7xKJPGUgF2npftaufRZ5jdnVScWWNTZy3EeoQ1I">
            <i class="icon-facebook" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default { }
</script>

<style lang="scss" scoped>
  @import '../assets/sass/_variables.scss';
  @import '../assets/sass/_mixins.scss';

  .footer {
    background-color: $color-grey;
    color: $color-white;
    font-size: 12px;

    @include sm {
      font-size: $font-size-s;
    }
  }

  .icons {
    text-align: right;
  }

  a {
    display: inline-block;
    font-size: 25px;
    padding: 10px;
    transition: background-color .3s ease;
    vertical-align: middle;

    i {
      vertical-align: middle;

      &::before {
        transition: color .3s ease;
      }

    }

    @include hover-focus {
      outline: none;
      background-color: white;

      i::before {
        color: $color-pink;
      }
    }
  }

  .row {
    justify-content: space-between;
    align-items: center;
  }

  .container {
    padding: 0 15px;
  }

</style>
