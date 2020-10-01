<template>
  <v-container>
    <v-row v-if="error">
      <v-col cols="12" sm="6" offset-sm="3">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="6"
        offset-lg="3"
        md="8"
        offset-md="2"
        sm="8"
        offset-sm="2"
      >
        <v-card>
          <v-card-text>
            <h1 class="text-center">Sign In</h1>
            <v-container>
              <v-form @submit.prevent="onSignin">
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      v-model="email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col xs="12">
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      v-model="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      Sign in
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppAlert from '@/components/shared/Alert.vue';

export default {
  components: {
    AppAlert
  },
  data: () => ({
    email: '',
    password: ''
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch('userSignIn', {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$store.dispatch('clearError');
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
