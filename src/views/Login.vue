<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        {{ textLogin }}
      </span>
    </template>
    <v-card>
      <h1 class="text-center py-5">Sign In</h1>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                id="email"
                type="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                outlined
                color="teal darken-2"
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                id="password"
                type="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                outlined
                color="teal darken-2"
                v-model="password"
                @keyup.enter="login"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn
                class="mr-2"
                color="grey lighten-1"
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn dark color="teal darken-2" @click="login">
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Login',
  props: ['textLogin'],
  data: () => ({
    dialog: false,
    email: '',
    password: ''
  }),
  methods: {
    login() {
      if (!this.formIsValid) {
        return;
      }
      this.$store.dispatch('userSignIn', {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    formIsValid() {
      return this.email !== '' && this.password !== '';
    }
  }
};
</script>

<style lang="scss" scoped></style>
