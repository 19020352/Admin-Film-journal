<template>
  <div class="my-2">
    <v-data-table
      :headers="listHeadData"
      :items="listData"
      :options.sync="options"
      :server-items-length="total1"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-options': [10, 20, 30, 40, 50]
      }"
      :loading="isLoading"
      fixed-header
      no-data-text="No data founded"
      height="500px"
      class="elevation-2"
    >
      <template v-slot:item.release_date="{ item }">
        {{ formatDate(item.release_date) }}
      </template>
         


      <template v-slot:item.Status="{ item }">
        <v-btn v-if="item.Status === 2" rounded color="green" x-small dark>
          Active
        </v-btn>
        <v-btn v-else rounded color="red" x-small dark> Inactive </v-btn>
      </template>

      <template v-slot:item.RoleType="{ item }">
        <div class="text-primary-500" v-if="item.RoleType === 1">Admin</div>
       
        <div v-else>User</div>
      </template>

      <template v-slot:item.Action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="black" v-bind="attrs" v-on="on">
              <v-icon> mdi-google-drive </v-icon>
            </v-btn>
          </template>
          <v-list color="#e4e9f0" dense>
            <v-list-item link @click="handleOnEdit(item.UserID)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="handleOnDelete(item.UserID)">
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import helpers from "~/services/helpers";
export default {
  data() {
    return {
      total: 500,
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
    };
  },
  props: ["listData", "isLoading","total1"],

  watch: {
    options: {
      handler() {
        let tableParams = {};
        tableParams.pageSize = this.options.itemsPerPage;
        tableParams.pageIndex = this.options.page;
        tableParams.sortBy = this.options.sortBy[0];
        if (tableParams.sortBy) {
          tableParams.sort = this.options.sortDesc[0] ? "ASC" : "DESC";
        }

        this.$emit("change-table-options", tableParams);
      },
      deep: true,
    },
  },
  methods: {
    handleOnEdit(id) {
      this.$emit("on-edit", id);
    },
    formatDate(dateStr) {
      return helpers.formatDate(dateStr);
    },
    handleOnDelete(id) {
      this.$emit("on-delete", id);
    },
  },
};
</script>
<style lang="scss"></style>
