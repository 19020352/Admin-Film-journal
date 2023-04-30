<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" fixed app>
      <div class="f-18 h-16 fw-6 text-primary-500 bg-dark d-flex align-center justify-center">
        <div v-if="miniVariant">
          CMS
        </div>
        <div v-else>
          CMS Admin
        </div>
      </div>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'User',
          to: '/user'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss">
.v-list {
  .v-list-item--active {
    background-color: var(--primary-500);
  }
}
</style>