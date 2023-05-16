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

      <template v-slot:item.Action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="black" v-bind="attrs" v-on="on">
              <v-icon> mdi-google-drive </v-icon>
            </v-btn>
          </template>
          <v-list color="#e4e9f0" dense>
            <v-list-item link @click="handleOnEdit(item.Related_filmID)">
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="handleOnDelete(item.Related_filmID)">
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
        { value: "Related_filmID", text: "Related_film ID", align: "center" },
        { value: "FilmID", text: "FilmID", align: "center" },
        { value: "DetailFilmID", text: "DetailFilmID", align: "center"},
        { value: "original_title", text: "Original title", align: "center"},
        { value: "title", text: "Title", align: "center"},
        { value: "poster_path", text: "Poster path" , align: "center"},        
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
        console.log(this.options);
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
