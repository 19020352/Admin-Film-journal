<template>
  <div class="my-2">
    <v-data-table
      :headers="listHeadData"
      :items="listData"
      :options.sync="options"
      :server-items-length="total"
      :footer-props="{
        showFirstLastPage: true,
      }"
      class="elevation-2"
    >
      <template v-slot:item.Status="{ item }">
        <v-btn v-if="item.Status === 1" rounded color="green" x-small dark>
          Active
        </v-btn>
        <v-btn v-else rounded color="red" x-small dark> Inactive </v-btn>
      </template>
      
      <template v-slot:item.RoleType="{ item }">
        <div class="text-primary-500" v-if="item.RoleType === 2 ">Admin</div>
        <div class="text-primary-500" v-else-if="item.RoleType === 3 ">Super Admin</div>
        <div v-else>User</div>
      </template>
      <template v-slot:item.Action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="black"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-google-drive </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="purple" link>
              <v-list-item-content>
                <v-list-item-title color="purple">Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 20,
      listHeadData: [
        { value: "UserID", text: "User ID" },
        { value: "UserName", text: "User name" },
        { value: "FullName", text: "Full name" },
        { value: "Email", text: "Email" },
        { value: "Status", text: "Status", align: "center", sortable: false },
        {
          value: "RoleType",
          text: "Role type",
          align: "center",
          sortable: false,
        },
        { value: "Action", text: "Action", align: "center", sortable: false },
      ],
      options: {},
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
      ],
    };
  },
  props: ["listData"],

  watch: {
    options: {
      handler() {
        let tableParams = {};
        tableParams.pageSize = this.options.itemsPerPage;
        tableParams.pageIndex = this.options.page;
        tableParams.sortBy = this.options.sortBy[0];
        tableParams.sortDesc = this.options.sortDesc[0];

        this.$emit("change-table-options", tableParams);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss"></style>
