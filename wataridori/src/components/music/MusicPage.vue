<template>
  <div class="playlist-frame" data-grid>
    <header class="area-header">
      <div class="cover">
        <img :src="current.cover" />
        <div
          class="shadow"
          :style="`background-image: url('current.cover');`"
        ></div>
      </div>
    </header>
    <main class="area-control">
      <section class="control-name-artist">
        <div class="item name rows">
          <span>{{ current.title }}</span>
        </div>
        <div class="item artist">
          <span>{{ current.artist }}</span>
        </div>
        <button class="repeat" @click="loop = !loop">
          <v-icon v-if="loop">mdi-repeat-once</v-icon>
          <v-icon v-else>mdi-repeat</v-icon>
        </button>
      </section>
      <section class="control-progress">
        <v-progress-linear
          color="teal lighten-1"
          rounded
          :value="current.percent"
        ></v-progress-linear>
        <div class="timer">
          <p class="text start">{{ currentlyTimer }}</p>
          <p class="text end">{{ current.totalTimer }}</p>
        </div>
      </section>
      <section class="control-btn">
        <button class="prev" @click="prev" v-if="songs.length > 1">
          <v-icon class="icon" large>mdi-skip-previous</v-icon>
        </button>
        <button class="status play" v-if="!isPlaying" @click="play">
          <v-icon class="icon" x-large>mdi-play</v-icon>
        </button>
        <button class="status pause" v-else @click="pause">
          <v-icon class="icon" x-large>mdi-pause</v-icon>
        </button>
        <button class="next" @click="next" v-if="songs.length > 1">
          <v-icon class="icon" large>mdi-skip-next</v-icon>
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import { formatTimer } from '@/helpers/timer';
import { threatSongs, shuffleArray } from '@/helpers/utils';
import songs from '@/mocks/songs';

export default {
  data: () => ({
    current: {},
    coverObject: { cover: true, animated: false },
    index: 0,
    loop: false,
    isPlaying: false,
    currentlyTimer: '00:00',
    songs: shuffleArray(songs),
    player: new Audio()
  }),
  methods: {
    listenersWhenPlay() {
      this.player.addEventListener('timeupdate', () => {
        var playerTimer = this.player.currentTime;
        this.currentlyTimer = formatTimer(playerTimer);
        this.current.percent = (playerTimer * 100) / this.current.seconds;
        this.current.isPlaying = true;
      });
      this.player.addEventListener(
        'ended',
        function() {
          if (this.loop) {
            this.index = this.songs.indexOf(this.current);
            this.setCurrentSong();
          } else {
            this.next();
          }
        }.bind(this)
      );
    },
    setCover() {
      this.coverObject.animated = true;
      setTimeout(() => {
        this.coverObject.animated = false;
      }, 1000);
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.play(this.current);
      this.setCover();
    },
    play(song) {
      if (typeof song.src !== 'undefined') {
        this.current.isPlaying = false;
        this.index = this.songs.indexOf(this.current);
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
      this.setCover();
      this.listenersWhenPlay();
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.setCurrentSong();
    },
    prev() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.setCurrentSong();
    }
  },
  mounted() {
    this.songs = threatSongs(this.songs);
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
};
</script>

<style lang="scss" scoped>
.playlist-frame {
  display: grid;
  grid-template-rows: calc(70vw - 0px) 0px auto;
  position: fixed;
  width: 100%;
  height: 100%;
  .area-header {
    grid-area: 1/1/3/2;
    .cover {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: unset;
      }
      .shadow {
        position: absolute;
        left: 3px;
        top: 20px;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: unset;
        filter: blur(10px) brightness(80%) opacity(0.7);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: none;
        background-color: var(--v-shadowImg-base);
      }
    }
  }
  .area-control {
    background-color: var(--v-bgAreaControl-base);
    padding: 25px 5%;
    padding-bottom: 0;
    box-shadow: unset;
    .control-name-artist {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto;
      grid-gap: 0.4rem;
      .name {
        min-height: 1.8rem;
        &.rows {
          line-height: 1.4rem;
          font-size: 1.5rem;
        }
      }
      .artist {
        grid-area: 2/1/3/2;
        min-height: 1.2rem;
        line-height: 1.2rem;
        font-size: 1rem;
        color: var(--v-colorArtist-base);
      }
      .repeat {
        grid-area: 1/2/3/3;
        align-self: center;
        outline: none;
      }
    }
    .icon {
      color: var(--v-colorIcon-base);
      transition: all 0.2s linear;
      cursor: pointer;
      display: block;
      stroke-width: 0;
      stroke: none;
    }
    .control-progress {
      margin-top: 1.5rem;
      .v-progress-linear {
        height: 6px !important;
        overflow: hidden;
        margin-top: 15px !important;
        padding-right: 0 !important;
      }
      .timer {
        display: flex;
        width: 100%;
        margin-top: 0.2rem;
        justify-content: space-between;
        .text {
          color: var(--v--colorTextTimer-base);
          font-size: 0.85rem;
        }
      }
    }
    .control-btn {
      display: flex;
      margin-top: 1.5rem;
      justify-content: space-around;
      > button {
        align-items: center;
        justify-content: center;
        display: flex;
        outline: none;
      }
      .status {
        width: 3.5rem;
        height: 3.5rem;
        background-color: #00bfa5;
        border-radius: 999px;
        box-shadow: 0 10px 15px -5px var(--v-boxShadowStatus-base);
        transition: 0.5s;
        .icon {
          color: #e9e9e9;
        }
      }
    }
    .control-lyrics {
      margin-top: 1.5rem;
      .list {
        width: 100%;
        height: 1.4rem;
        text-align: center;
        overflow: hidden;
        ul {
          margin: 0;
          padding: 0;
          transition: all ease-in 250ms;
        }
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .playlist-frame {
    grid-template-rows: 350px;
    grid-template-columns: 350px 350px;
    justify-content: center;
    margin-top: 80px;
    .area-header {
      grid-area: 1/1/2/2;
      .cover {
        img {
          border-radius: 30px 0 0 30px;
        }
        .shadow {
          border-radius: 30px 0 0 30px;
          display: block;
        }
      }
    }
    .area-control {
      z-index: unset;
      grid-area: 1/2/2/3;
      border-radius: 0 30px 30px 0;
      padding: 30px 7%;
      box-shadow: 4px 24px 22px 1px var(--v-boxShadowAreaControl-base);
    }
  }
}
</style>
