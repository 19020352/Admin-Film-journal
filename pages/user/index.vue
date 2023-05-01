<template>
  <div>
    <UserSearchForm
      @change-search-options="handleChangeSearchOptions"
    ></UserSearchForm>

    <div class="d-flex align-center justify-end">
      <v-btn
        class="mx-2"
        x-small
        fab
        dark
        color="primary"
        @click="handleRefresh"
      >
        <v-icon dark> mdi-reload </v-icon>
      </v-btn>
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ml-2"
            x-small
            fab
            dark
            color="success"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5"> Detail User </v-card-title>
          <div class="pa-4">
            <UserCreateEditForm
              @cancel="handleCancel"
              @submit-form="handleSubmitForm"
              :id="itemId"
            ></UserCreateEditForm>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <UserTable
      @change-table-options="handleChangeTableOptions"
      @on-edit="handleOnEdit"
      :listData="listData"
      :isLoading="isLoading"
    ></UserTable>
  </div>
</template>
<script>
import UserSearchForm from "~/modules/user/UserSearchForm.vue";
import UserTable from "~/modules/user/UserTable.vue";
import UserCreateEditForm from "~/modules/user/UserCreateEditForm.vue";
import apiClient from "~/services/apiClient";

export default {
  data() {
    return {
      params: {},
      dialog: false,
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
      isLoading: false,
      itemId: "",
    };
  },
  components: { UserSearchForm, UserTable, UserCreateEditForm },
  async created() {
    await this.getListItem();
  },
  methods: {
    async getListItem() {
      try {
        this.isLoading = true;
        const res = await apiClient.getUsers();
        this.isLoading = false;
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },

    async handleChangeTableOptions(options) {
      this.params = {
        ...this.params,
        ...options,
      };
      console.log("Change table params", this.params);

      // call api query search
      await this.getListItem()
    },

    async handleChangeSearchOptions(searchParams) {
      this.params = {
        ...this.params,
        ...searchParams,
      };
      console.log("Change search params", this.params);

      // call api query search
      await this.getListItem()
    },

    async handleSubmitForm(form) {
      console.log("handleSubmitForm", form, this.itemId);

      // call api submit
      if (true) {
        this.dialog = false;
      }
    },

    async handleRefresh() {
      this.listData = [];
      // call api query search
      await this.getListItem();
      console.log("Refresh");
    },

    handleOnEdit(id) {
      this.itemId = id;
      this.dialog = true;
      console.log("this.itemId", this.itemId);
    },

    handleCancel() {
      this.dialog = false;
      this.itemId = "";
    },
  },
};
</script>
<style lang="scss"></style>
