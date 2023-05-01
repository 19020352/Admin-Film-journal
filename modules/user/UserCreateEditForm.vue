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
            filled
            prepend-inner-icon="mdi-rename-box"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.UserName"
            label="User name"
            clearable
            filled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.FullName"
            label="Full name"
            clearable
            filled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.Email"
            label="Email"
            clearable
            filled
            prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="form.Status"
            :items="statusType"
            item-text="label"
            item-value="value"
            clearable
            filled
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
            filled
            label="Role Type"
            prepend-inner-icon="mdi-map"
          ></v-select>
        </v-col>
      </v-row>

      <div class="mt-2 d-flex align-center justify-end">
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
export default {
  data() {
    return {
      dataUserDetail: {
        UserID: Math.floor(Math.random() * 10000) + 1,
        UserName: "cris07",
        FullName: "Cristiano Ronaldo",
        Email: "cris07@gmail.com",
        Status: 2,
        RoleType: 1,    
      },
      form: {},
      statusType: [
        {value: 1, label: 'Active'},
        {value: 2, label: 'Inactive'},
      ],
      roleTypeList: [
        {value: 1, label: 'User'},
        {value: 2, label: 'Admin'},
        {value: 2, label: 'Super Admin'},
      ]
    };
  },
  mounted() {
    this.form = { ...this.dataUserDetail };
  },
  methods: {
    handleCancel() {
      this.$emit('cancel')
    },
    handleReset() {
      this.form = { ...this.dataUserDetail };
    },
    handleSubmit() {
      this.$emit('submit-form', this.form)
    }
  },
};
</script>
<style lang="scss"></style>
