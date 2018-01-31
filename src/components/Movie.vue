<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ movie.name }}</strong> <small>{{ movie.eng_name }}</small> <small>{{ movie.year }}</small>
            <br>
            {{ movie.description }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <nav class="panel is-size-7">
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-hashtag"></i>
            </span>
            <div class="is-hidden-touch">Описание</div>
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-info"></i>
            </span>
            <div class="is-hidden-touch">Информация</div>
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-download"></i>
            </span>
            <div class="is-hidden-touch">Ссылки</div>
          </a>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data () {
    return {
    }
  },
  props: {
    movie: Object
  }
}
</script>

<style scoped>
</style>
