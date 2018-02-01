<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content" v-if="tab === 0">
            <strong>{{ movie.name }}</strong> <small>{{ movie.eng_name }}</small> <small>{{ movie.year }}</small>
            <br>
            {{ movie.description }}
        </div>
        <div class="content" v-else-if="tab === 1">
          <div class="columns is-gapless is-multiline">
            <template v-if="movie.country">
              <div class="column is-2">Страна:</div>
              <div class="column is-9">
                <a class="border" v-for="(value, key) in movie.country" :key=key :href='"/search?country=" + value'>{{value}} </a>
              </div>
            </template>
            <template v-if="movie.director">
              <div class="column is-2">Режиссер:</div>
              <div class="column is-9">
                <a class="border" v-for="(value, key) in movie.director" :key=key :href='"/search?director=" + value'>{{value}} </a>
              </div>
            </template>
            <template v-if="movie.actor">
              <div class="column is-2">Актеры:</div>
              <div class="column is-9">
                <a class="border" v-for="(value, key) in movie.actor" :key=key :href='"/search?actor=" + value'>{{value}} </a>
              </div>
            </template>
            <template v-if="movie.duration">
              <div class="column is-2">Время:</div>
              <div class="column is-9">{{movie.duration}}</div>
            </template>
          </div>
        </div>
        <div class="content" v-else-if="tab === 2">
          <p>
            <strong>{{ movie.name }}</strong> <small>{{ movie.eng_name }}</small> <small>{{ movie.year }}</small>
            <br>
            {{ movie.description }}
          </p>
        </div>

        <!-- <nav class="level is-mobile">
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
        </nav> -->
      </div>
      <div class="media-right">
        <nav class="panel is-size-7">
          <a class="panel-block" @click="setTab(0)">
            <span class="panel-icon">
              <i class="fas fa-hashtag"></i>
            </span>
            <span class="is-hidden-touch">Описание</span>
          </a>
          <a class="panel-block" @click="setTab(1)">
            <span class="panel-icon">
              <i class="fas fa-info"></i>
            </span>
            <span class="is-hidden-touch">Информация</span>
          </a>
          <a class="panel-block" @click="setTab(2)">
            <span class="panel-icon">
              <i class="fas fa-download"></i>
            </span>
            <span class="is-hidden-touch">Ссылки</span>
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
      tab: 0
    }
  },
  props: {
    movie: {
      id: Number,
      name: String,
      eng_name: String,
      year: Number,
      genre: Object,
      country: Object,
      director: Object,
      producer: Object,
      actor: Object,
      description: String,
      age: String,
      release_date: String,
      russian_date: String,
      duration: String,
      kinopoisk: Number,
      imdb: Number,
      poster: String,
      poster_url: String,
      nnm: Number,
      torrent: Object
    }
  },
  methods: {
    setTab (v) {
      this.tab = v
    }
  }
}
</script>

<style scoped>
.border {
  border-bottom: 1px solid #3273dc;
  margin-right: 4px;
}
</style>
