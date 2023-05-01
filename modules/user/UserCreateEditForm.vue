<template>
  <div>
    <v-form ref="formSearch" @submit.prevent="handleSubmit">
      <v-row class="">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.UserID"
            label="User id"
            variant="outlined"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-rename-box"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.UserName"
            label="User name"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.FullName"
            label="Full name"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.Email"
            label="Email"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="form.Status"
            :items="statusTypeList"
            item-text="label"
            item-value="value"
            clearable
            dense
            outlined
            label="Status"
            prepend-inner-icon="mdi-google-nearby"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="form.RoleType"
            :items="roleTypeList"
            item-text="label"
            item-value="value"
            clearable
            dense
            outlined
            label="Role Type"
            prepend-inner-icon="mdi-map"
          ></v-select>
        </v-col>

        <v-overlay z-index="1" :value="isLoading" :absolute="true">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>
      </v-row>

      <div
        class="mt-2 d-flex align-center justify-end"
        style="z-index: 2; position: relative"
      >
        <v-btn @click="handleCancel" class="mr-2 text-0" color="error"
          >Cancel</v-btn
        >
        <v-btn @click="handleReset" class="mr-2 text-0" color="primary"
          >Reset</v-btn
        >
        <v-btn @click="handleSubmit" class="text-0" color="success">
          Submit
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { STATUS_TYPE_LIST, ROLE_TYPE_LIST } from "./js/common";
import apiClient from "~/services/apiClient";

export default {
  data() {
    return {
      dataResponse: {},
      form: {},
      isLoading: false,
    };
  },
  props: ["id"],
  computed: {
    statusTypeList() {
      return STATUS_TYPE_LIST;
    },
    roleTypeList() {
      return ROLE_TYPE_LIST;
    },
  },
  async created() {
    if (this.id) {
      await this.getDetail();
    }
  },
  watch: {
    id: {
      handler() {
        if (this.id) {
          this.getDetail();
        }
      },
    },
  },
  methods: {
    async getDetail() {
      console.log("get data");
      try {
        this.isLoading = true;
        const res = apiClient.getDetail(this.id);
        this.isLoading = false;
      } catch (error) {}
      this.dataResponse = {
        UserID: Math.floor(Math.random() * 10000) + 1,
        UserName: "cris07",
        FullName: "Cristiano Ronaldo",
        Email: "cris07@gmail.com",
        Status: 2,
        RoleType: 1,
      };

      this.form = { ...this.dataResponse };
    },
    handleCancel() {
      this.$emit("cancel");
    },
    handleReset() {
      this.form = { ...this.dataResponse };
    },
    handleSubmit() {
      this.$emit("submit-form", this.form);
    },
  },
};
</script>
<style lang="scss"></style>
