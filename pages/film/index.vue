<template>
  <div>
    <FilmSearchForm
      @change-search-options="handleChangeSearchOptions"
    ></FilmSearchForm>

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
          <v-card-title class="text-h5"> Detail Film </v-card-title>
          <div class="px-4 pt-4">
            <FilmCreateEditForm
              @cancel="handleCancel"
              @submit-form="handleSubmitForm"
              :id="itemId"
            ></FilmCreateEditForm>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <FilmTable
      @change-table-options="handleChangeTableOptions"
      @on-edit="handleOnEdit"
      @on-delete="handleOnDelete"
      :listData="listData"
      :isLoading="isLoading"
      :total1="total1"
      :key="tableKey"
    ></FilmTable>
  </div>
</template>
<script>
import FilmSearchForm from "~/modules/film/FilmSearchForm.vue";
import FilmTable from "~/modules/film/FilmTable.vue";
import FilmCreateEditForm from "~/modules/film/FilmCreateEditForm.vue";
import apiClient from "~/services/apiClient";

export default {
  data() {
    return {
      params: {
        pageIndex: 10,
        pageSize: 0,
      },
      dialog: false,
      listData: [],
      isLoading: false,
      itemId: "",
      total1 : 0,
      tableKey: 0,
    };
  },
  components: { FilmSearchForm, FilmTable, FilmCreateEditForm },
  async created() {
    await this.getListItem();
  },
  methods: {
    async getListItem() {
      try {
        this.isLoading = true;
        const res = await apiClient.getFilms(this.params);
        this.listData = res?.data?.listData || [];
        //console.log(res);
        this.total1 = res?.data?.total;
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        console.log(e);
      }
    },

    async handleChangeTableOptions(options) {
      this.params = {
        ...this.params,
        ...options,
      };

      // call api query search
      await this.getListItem();
    },

    async handleChangeSearchOptions(searchParams) {
      this.params = {
        ...this.params,
        ...searchParams,
      };
      setTimeout(() => {
    this.tableKey++;
  }, 500);
      // call api query search
      await this.getListItem();
    },

    async handleSubmitForm(form) {
      console.log("handleSubmitForm", form, this.itemId);
      try {
        const res = await apiClient.updateFilm(this.itemId, form);

        if (res.status == 200) {
          this.dialog = false;
          this.itemId = "";
          this.getListItem();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async handleRefresh() {
      this.listData = [];
      setTimeout(() => {
    this.tableKey++;
  }, 500);
      await this.getListItem();
    },

    handleOnEdit(id) {
      this.itemId = id;
      this.dialog = true;
      console.log("this.itemId", this.itemId);
    },
    async handleOnDelete(id) {
      try {
        const res = await apiClient.deleteFilm(id);

        if (res.status == 200) {
          console.log("OK!");
        }
      } catch (error) {
        console.log(error);
      }
      this.listData = [];
      await this.getListItem();
    },

    handleCancel() {
      this.dialog = false;
      this.itemId = "";
    },
  },
};
</script>
<style lang="scss"></style>
