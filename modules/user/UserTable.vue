<template>
  <div class="my-4">
    <v-data-table
      :headers="listHeadData"
      :items="listData"
      :options.sync="options"
      :server-items-length="total"
      class="elevation-2"
    >
      <!-- <template v-slot:item.calories="{ item }">
        <v-chip :color="getColor(item.calories)" dark>
          {{ item.calories }}
        </v-chip>
      </template> -->
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 5,
      listData: [
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cristiano",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cristiano",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cristiano",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cristiano",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
          RoleType: 1,
        },
        {
          UserID: Math.floor(Math.random() * 10000) + 1,
          UserName: "cristiano",
          FullName: "Cristiano Ronaldo",
          Email: "cris07@gmail.com",
          Status: 1,
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
        console.log(this.options);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss"></style>
