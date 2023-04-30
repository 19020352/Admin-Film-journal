<template>
  <div class="pa-4 elevation-2 rounded-lg">
    <div class="d-flex align-center">
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
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="form.userName"
                label="User name"
                variant="outlined"
                clearable
                filled
                prepend-inner-icon="mdi-rename-box"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="form.fullName"
                label="Full name"
                clearable
                filled
                prepend-inner-icon="mdi-feather"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="form.status"
                :items="['Active', 'Inactive']"
                clearable
                filled
                label="Status"
                prepend-inner-icon="mdi-google-nearby"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="form.roleType"
                :items="['User', 'Admin', 'Super Admin']"
                clearable
                filled
                label="Role Type"
                prepend-inner-icon="mdi-map"
              ></v-select>
            </v-col>
          </v-row>

          <div class="mt-2">
            <v-btn type="reset" class="mr-2 text-0" color="#DD2E16"
              >Clear</v-btn
            >
            <v-btn @click="handleSubmit" class="text-0" color="#51b7f7">
              Search
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-expand-transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expanded: true,
      form: {
        fullName: "",
        userName: "",
        address: "",
        status: "",
        roleType: "",
      },
      validations: {
        firstName: [
          (value) => {
            if (value) return true;
            return "You must enter a first name.";
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formSearch.validate()) {
        console.log("Validate: ", this.$refs.formSearch.validate());
        console.log("formData: ", this.form);
      } else return;
    },
  },
};
</script>
<style></style>
