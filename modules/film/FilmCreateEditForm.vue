<template>
  <div>
    <v-form
      ref="formSearch"
      class="pb-0"
      style="position: realtive"
      @submit.prevent="handleSubmit"
    >
      <v-row class="">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.FilmID"
            label="Film id"
            variant="outlined"
            clearable
            dense
            outlined
            disabled
            prepend-inner-icon="mdi-rename-box"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Title"
            label="Film name"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Backdrop_path"
            label="Backdrop_path"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Trailer"
            label="Trailer"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Budget"
            label="Budget"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Imdb_id"
            label="Imdb_id"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Original_language"
            label="Original Language"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Original_title"
            label="Original Title"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Vote_average"
            label="Vote Average"
            clearable
            dense
            outlined
            disabled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Vote_count"
            label="Vote Count"
            clearable
            dense
            outlined
            disabled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.LikesCount"
            label="Likes Count"
            clearable
            dense
            outlined
            disabled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.ReviewsCount"
            label="Reviews Count"
            clearable
            dense
            outlined
            disabled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Revenue"
            label="Revenue"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Runtime"
            label="Runtime"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.Tagline"
            label="Tagline"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="form.Overview"
            label="Overview"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-textarea>
        </v-col>

        <v-col cols="12" sm="6">
          <v-textarea
            v-model="form.Genres"
            label="Genres"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-textarea>
        </v-col>

        <v-col cols="12" sm="6">
          <v-textarea
            v-model="form.Production_companies"
            label="Production Companies"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            v-model="form.Spoken_languages"
            label="Spoken Languages"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            v-model="form.Production_countries"
            label="Production Countries"
            clearable
            dense
            outlined
            prepend-inner-icon="mdi-feather"
          ></v-textarea>
        </v-col>

        <v-overlay z-index="1" :value="isLoading" :absolute="true">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>
      </v-row>

      <div
        class="pa-4 d-flex align-center justify-end elevation-20"
        style="
          z-index: 2;
          position: sticky;
          bottom: 0;
          margin: 0 -16px;
          background-color: #fff;
        "
      >
        <v-btn @click="handleCancel" class="mr-2 text-0" color="error"
          >Cancel</v-btn
        >
        <v-btn
          v-if="!idItem"
          @click="handleReset"
          class="mr-2 text-0"
          color="primary"
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
import apiClient from "~/services/apiClient";

export default {
  data() {
    return {
      dataResponse: {},
      isLoading: false,
      form: {},
      idItem: "",
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
    this.idItem = this.id;
    if (this.id) {
      await this.getDetail();
    }
  },
  watch: {
    id: {
      handler() {
        this.form = {};
        if (this.id) {
          this.getDetail();
        }
      },
    },
  },
  methods: {
    async getDetail() {
      try {
        this.isLoading = true;
        const res = await apiClient.getFilmDetail(this.id);
        console.log("get data", res);
        this.form = res.data || {};
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
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
