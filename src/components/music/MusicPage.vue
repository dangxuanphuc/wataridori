<template>
  <div class="playlist-frame" data-grid>
    <header class="area-header">
      <div class="cover">
        <img :src="currentTrack.cover" />
        <div
          class="shadow"
          :style="`background-image: url('currentTrack.cover');`"
        ></div>
      </div>
    </header>
    <main class="area-control">
      <section class="control-name-artist">
        <div class="item name rows">
          <span>{{ currentTrack.title }}</span>
        </div>
        <div class="item artist">
          <span>{{ currentTrack.artist }}</span>
        </div>
      </section>
      <section class="control-progress" ref="progress">
        <div class="progress__bar" @click="clickProgress">
          <div class="progress__current" :style="{ width: barWidth }"></div>
        </div>
        <div class="timer">
          <p class="text start">{{ currentTime }}</p>
          <p class="text end">{{ duration }}</p>
        </div>
      </section>
      <section class="player-controls">
        <div class="player-controls__item prevNext" @click="prevTrack">
          <svg class="icon">
            <use xlink:href="#icon-prev"></use>
          </svg>
        </div>
        <div class="player-controls__item playBtn" @click="play">
          <svg class="icon">
            <use xlink:href="#icon-pause" v-if="isTimerPlaying"></use>
            <use xlink:href="#icon-play" v-else></use>
          </svg>
        </div>
        <div class="player-controls__item prevNext" @click="nextTrack">
          <svg class="icon">
            <use xlink:href="#icon-next"></use>
          </svg>
        </div>
      </section>
    </main>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      hidden
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-pause" viewBox="0 0 32 32">
          <title>icon-pause</title>
          <path
            d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"
          ></path>
          <path
            d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"
          ></path>
          <path
            d="M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"
          ></path>
          <path
            d="M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"
          ></path>
        </symbol>
        <symbol id="icon-play" viewBox="0 0 32 32">
          <title>icon-play</title>
          <path
            d="M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z"
          ></path>
          <path
            d="M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z"
          ></path>
          <path
            d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"
          ></path>
          <path
            d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"
          ></path>
        </symbol>
        <symbol id="icon-next" viewBox="0 0 32 32">
          <title>next</title>
          <path
            d="M2.304 18.304h14.688l-4.608 4.576c-0.864 0.864-0.864 2.336 0 3.232 0.864 0.864 2.336 0.864 3.232 0l8.448-8.48c0.864-0.864 0.864-2.336 0-3.232l-8.448-8.448c-0.448-0.448-1.056-0.672-1.632-0.672s-1.184 0.224-1.632 0.672c-0.864 0.864-0.864 2.336 0 3.232l4.64 4.576h-14.688c-1.248 0-2.304 0.992-2.304 2.272s1.024 2.272 2.304 2.272z"
          ></path>
          <path
            d="M29.696 26.752c1.248 0 2.304-1.024 2.304-2.304v-16.928c0-1.248-1.024-2.304-2.304-2.304s-2.304 1.024-2.304 2.304v16.928c0.064 1.28 1.056 2.304 2.304 2.304z"
          ></path>
        </symbol>
        <symbol id="icon-prev" viewBox="0 0 32 32">
          <title>prev</title>
          <path
            d="M29.696 13.696h-14.688l4.576-4.576c0.864-0.864 0.864-2.336 0-3.232-0.864-0.864-2.336-0.864-3.232 0l-8.448 8.48c-0.864 0.864-0.864 2.336 0 3.232l8.448 8.448c0.448 0.448 1.056 0.672 1.632 0.672s1.184-0.224 1.632-0.672c0.864-0.864 0.864-2.336 0-3.232l-4.608-4.576h14.688c1.248 0 2.304-1.024 2.304-2.304s-1.024-2.24-2.304-2.24z"
          ></path>
          <path
            d="M2.304 5.248c-1.248 0-2.304 1.024-2.304 2.304v16.928c0 1.248 1.024 2.304 2.304 2.304s2.304-1.024 2.304-2.304v-16.928c-0.064-1.28-1.056-2.304-2.304-2.304z"
          ></path>
        </symbol>
      </defs>
    </svg>
  </div>
</template>

<script>
import { shuffleArray } from '@/helpers/utils';
import songs from '@/mocks/songs';

export default {
  data: () => ({
    audio: null,
    circleLeft: null,
    barWidth: null,
    duration: null,
    currentTime: null,
    isTimerPlaying: false,
    currentTrack: null,
    currentTrackIndex: 0,
    tracks: shuffleArray(songs)
  }),
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + '%';
      this.circleLeft = width + '%';
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = '0' + durmin;
      }
      if (dursec < 10) {
        dursec = '0' + dursec;
      }
      if (curmin < 10) {
        curmin = '0' + curmin;
      }
      if (cursec < 10) {
        cursec = '0' + cursec;
      }
      this.duration = durmin + ':' + dursec;
      this.currentTime = curmin + ':' + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + '%';
      this.circleLeft = percentage + '%';
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.src;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.src;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
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
      width: 1em;
      height: 1em;
      cursor: pointer;
      display: inline-block;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }
    .control-progress {
      margin-top: 1.5rem;
      .progress__bar {
        height: 6px;
        width: 100%;
        cursor: pointer;
        background-color: #d0d8e6;
        display: inline-block;
        border-radius: 10px;
      }
      .progress__current {
        height: inherit;
        width: 0%;
        background-color: #4db6ac;
        border-radius: 10px;
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
    .player-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .player-controls__item {
        display: inline-flex;
        font-size: 30px;
        padding: 5px;
        margin-bottom: 10px;
        cursor: pointer;
        color: #4db6ac;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s ease-in-out;
        .icon {
          position: relative;
          z-index: 2;
        }
        &.playBtn {
          margin-bottom: 0;
          font-size: 95px;
          filter: drop-shadow(0 11px 6px rgba(172, 184, 204, 0.45));
          color: #4db6ac;
          width: 80px;
          height: 80px;
          display: inline-flex;
        }
        &.prevNext:hover {
          border-radius: 50%;
          background: #fff;
          transform: scale(1.1);
          box-shadow: 0px 5px 10px 0px rgba(76, 70, 124, 0.2);
          transition: all 0.3s ease-in-out;
          transition: all 0.4s cubic-bezier(0.35, 0.57, 0.13, 0.88);
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
