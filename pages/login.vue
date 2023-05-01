<template>
  <div class="login-page d-flex justify-center align-center">
    <v-card class="form-login px-6 py-8 rounded-lg" elevation="10">
      <h2 class="text-center">Log In</h2>
      <v-form ref="formLogin" @submit.prevent="handleSubmit">
        <v-text-field
          label="Email address"
          variant="outlined"
          :rules="validations.email"
          v-model="email"
          prepend-inner-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          label="Password"
          variant="outlined"
          :rules="validations.password"
          v-model="password"
          type="password"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <div class="d-flex justify-end align-center">
          <v-btn type="submit" color="primary"> Log In </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import cookie from "cookie-universal-nuxt";

export default {
  layout: "login-layout",
  data() {
    return {
      email: "example@gmail.com",
      password: "xuanducr7",

      validations: {
        email: [
          (value) => {
            if (value.length > 0) {
              const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(value) || "Invalid e-mail.";
            }
            return "You must enter a first name.";
          },
        ],
        password: [
          (value) => {
            if (value) return true;
            return "You must enter a password.";
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formLogin.validate()) {

        // Call api login


        this.$cookies.set("token", this.email);
        this.$cookies.set("user", {
          email: this.email,
          avatar: 'https://picsum.photos/80',
          userName: 'Cristiano'
        });
        this.$router.push("/");
      } else return;
    },
    // async login() {
    //   try {
    //     await this.$auth.loginWith("local", {
    //       data: {
    //         email: this.email,
    //         password: this.password,
    //       },
    //     });
    //     this.$router.push("/");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
};
</script>
<style lang="scss">
.login-page {
  min-height: 100vh;
  background: #fff
    url("https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center center/cover no-repeat;
  padding: 12px;

  .form-login {
  }
}

@media screen and (min-width: 960px) {
  .login-page {
    min-height: 100vh;
    padding: 0;

    .form-login {
      width: 500px;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
