<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 copyright">
          &copy; neetamadahar.com
        </div>
        <div class="col-sm-6 footer--icon">
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
    padding: 10px 15px;

    .copyright {
      width: 100%;
      margin-bottom: 5px;
      text-align: center;
      @include sm {
        text-align: left;
      }
    }

    a {
      @include hover-focus {
        i {
          background-color: white;
        }

        i::before {
          color: $color-pink;
        }
      }
    }

    i {
      font-size: 25px;
      padding: 10px;
    }

    @include sm {
      &--icon {
        text-align: right;
      }
    }
  }

  .row {
    justify-content: center;
  }

</style>
