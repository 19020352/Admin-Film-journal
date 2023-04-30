<template>
  <div>
    <UserSearchForm @change-search-options="handleChangeSearchOptions"></UserSearchForm>
    <UserTable @change-table-options="handleChangeTableOptions"></UserTable>
  </div>
</template>
<script>
import UserSearchForm from "~/modules/user/UserSearchForm.vue";
import UserTable from "~/modules/user/UserTable.vue";
export default {
  data() {
    return {
      params: {},
    };
  },
  components: { UserSearchForm, UserTable },
  methods: {
    handleChangeTableOptions(options) {
      this.params = {
        ...this.params,
        ...options
      };
      console.log("Change table params", this.params);
    },

    handleChangeSearchOptions(searchParams) {
        this.params = {
        ...this.params,
        ...searchParams
      };
      console.log("Change search params", this.params);
    }
  },
};
</script>
<style lang="scss"></style>
