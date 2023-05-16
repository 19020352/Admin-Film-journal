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
                v-model="form.Name"
                label="Name"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.Character_"
                label="Character"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.Original_name"
                label="Original name"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="form.FilmID"
                label="FilmID"
                outlined
                clearable
                dense
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="6" md="3">
              <v-select
                v-model="form.Type"
                :items="getTypeTypeList"
                item-text="label"
                item-value="value"
                clearable
                dense
                outlined
                label="Type"
                prepend-inner-icon="mdi-google-nearby"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-select
                v-model="form.Known_for_department"
                :items="getKFDTypeList"
                item-text="label"
                item-value="value"
                clearable
                dense
                outlined
                label="Known for department"
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

import { TYPE_TYPE_LIST } from "./js/common";
import { KFD_TYPE_LIST } from "./js/common";
export default {
  data() {
    return {
      expanded: true,
      form: {
        credit: null
      },
    };
  },
  computed: {
    getTypeTypeList() {
      return TYPE_TYPE_LIST || [];
    },
    getKFDTypeList() {
      return KFD_TYPE_LIST || [];
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formSearch.validate()) {
        this.$emit("change-search-options", this.form);
      } else return;
    },
    handleClear() {
      this.form = {
        
     Type: null,
     Known_for_department: null,
     Name: null,
     FilmID: null,
     Original_name: null,
     Character_: null  
        
      };
      this.handleSubmit();
    },
  },
};
</script>
<style></style>
