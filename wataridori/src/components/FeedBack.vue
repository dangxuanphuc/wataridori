<template>
  <v-container>
    <v-card class="form-contact" outlined>
      <v-form>
        <v-container>
          <div class="text-in-form">
            Feel free to drop me an email to ask me some questions, to express
            your feeling about my Blog, or just to say HELLO :)
          </div>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="Full Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Email" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                autocomplete="message"
                label="Your Message"
                outlined
                counter
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn dark color="teal darken-1" class="mr-4">
            Submit
          </v-btn>
          <v-btn dark color="grey darken-1">Clear</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-contact {
  background: var(--v-backgroundCard-base);
  padding: 30px;
  .text-in-form {
    margin-bottom: 15px;
  }
}
</style>
