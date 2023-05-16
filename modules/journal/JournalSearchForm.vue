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
                v-model="form.authorUserName"
                label="Author Name"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.mentionedFilm"
                label="Mentioned Film ID"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.title"
                label="Title"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" >
              <v-text-field
                v-model="form.intro"
                label="Introduction"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-select
                v-model="form.category"
                :items="getCategoryTypeList"
                item-text="label"
                item-value="value"
                clearable
                dense
                outlined
                label="Category"
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
import { CATEGORY_TYPE_LIST } from "./js/common";

export default {
  data() {
    return {
      expanded: true,
      form: {
        journal: null
      },
    };
  },
  computed: {
    getCategoryTypeList() {
      return CATEGORY_TYPE_LIST || [];
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
        category: null,
        authorUserName : null,
        title : null,
        intro : null,
        mentionedFilm : null,
      };
      this.handleSubmit();
    },
  },
};
</script>
<style></style>
