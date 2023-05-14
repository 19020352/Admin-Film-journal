<template>
  <div class="pa-4 elevation-2 rounded-lg mb-4">
    <div class="d-flex align-center my-1">
      <v-btn icon @click="expanded = !expanded">
        <v-icon v-if="expanded">mdi-chevron-down</v-icon>
        <v-icon v-else>mdi-chevron-right</v-icon>
      </v-btn>
      <div class="p-2 fw-6 f-18">Search</div>
    </div>

    <v-expand-transition>
      <div v-if="expanded">
        <v-form ref="formSearch" @submit.prevent="handleSubmit">
          <v-row class="">
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.filmName"
                label="Film name"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-select
                v-model="form.genre"
                :items="getGerneTypeList"
                item-text="label"
                item-value="value"
                clearable
                dense
                outlined
                label="Gerne"
                prepend-inner-icon="mdi-google-nearby"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-select
                v-model="form.year"
                :items="getYearTypeList"
                item-text="label"
                item-value="value"
                clearable
                dense
                outlined
                label="Year"
                prepend-inner-icon="mdi-google-nearby"
              ></v-select>
            </v-col>
          </v-row>

          <div class="mt-2">
            <v-btn
              @click="handleClear"
              class="mr-2 text-0"
              color="error"
              outlined
              >Clear</v-btn
            >
            <v-btn @click="handleSubmit" class="text-0" color="primary">
              Search
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-expand-transition>
  </div>
</template>
<script>
import { GERNE_TYPE_LIST } from "./js/common";
import { YEAR_TYPE_LIST } from "./js/common";
export default {
  data() {
    return {
      expanded: true,
      form: {
        filmName: null,
        year: null,
        genre: null,
      },
    };
  },
  computed: {
    getGerneTypeList() {
      return GERNE_TYPE_LIST || [];
    },
    getYearTypeList() {
      return YEAR_TYPE_LIST || [];
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formSearch.validate()) {
        this.$emit("change-search-options", this.form);
      } else return;
    },
    handleClear() {
      this.form = {
        filmName: null,
        year: null,
        genre: null,
      };
      this.handleSubmit();
    },
  },
};
</script>
<style></style>
