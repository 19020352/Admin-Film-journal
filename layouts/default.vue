<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" permanent fixed app>
      <div
        class="f-18 h-16 fw-6 text-primary-500 bg-dark d-flex align-center justify-center"
      >
        <div v-if="miniVariant">CMS</div>
        <div v-else>CMS Admin</div>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app elevate-on-scroll>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar size="32">
              <img :src="user.avatar" alt="user avatar" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar size="40">
                <img :src="user.avatar" alt="user-avatar" />
              </v-avatar>
              <h3 class="mt-2">{{ user.userName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-1"></v-divider>
              <!-- <v-btn depressed rounded text> Edit Account </v-btn> -->
              <v-divider class="my-1"></v-divider>
              <v-btn depressed rounded text @click="handleLogout">
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <div class="mx-5 my-4">
        <Nuxt />
      </div>
    </v-main>
    <v-footer :absolute="!fixed" app> </v-footer>
    <notifications group="api" />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "User",
          to: "/user",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Film",
          to: "/film",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Question",
          to: "/question",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Answer",
          to: "/answer",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Credit",
          to: "/credit",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Related_film",
          to: "/related_film",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Similar_film",
          to: "/similar_film",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Journal",
          to: "/journal",
        },
      ],
      miniVariant: false,
      title: "CMS Admin Film Journal",
      user: "",
    };
  },
  mounted() {
    this.user = this.$cookies.get("user") ?? "";
  },
  methods: {
    handleLogout() {
      this.$cookies.remove("user");
      this.$cookies.remove("token");
      this.$router.push("/login");
      localStorage.removeItem("Token");
    },
  },
};
</script>
<style lang="scss">
.v-list {
  .v-list-item--active {
    background-color: var(--primary-500);
  }
}

</style>
