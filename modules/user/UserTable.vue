<template>
  <div class="my-4">
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
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 20,
      listData: [
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cris07",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "leo10",
          FullName: " Leo Messi",
          Email: "leo10@gmail.com",
          Status: 2,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "robert09",
          FullName: "Robert Lewandosky",
          Email: "robert09@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "km10",
          FullName: "Kilian Mpape",
          Email: "km10@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "neymar",
          FullName: "Neymar Jr",
          Email: "neymarjr@gmail.com",
          Status: 2,
          RoleType: 1,
        },
      ],
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
        { value: "action", text: "Action", align: "center", sortable: false },
      ],
      options: {},
    };
  },

  watch: {
    options: {
      handler() {
        let tableParams = {};
        tableParams.pageSize = this.options.itemsPerPage;
        tableParams.pageIndex = this.options.page;
        tableParams.sortBy = this.options.sortBy[0];
        tableParams.sortDesc = this.options.sortDesc[0];

        this.$emit('change-table-options', tableParams)
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss"></style>
