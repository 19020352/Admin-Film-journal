<template>
    <div>
        <UserSearchForm></UserSearchForm>
        <UserTable></UserTable>
    </div>
</template>
<script>
import UserSearchForm from '~/modules/user/UserSearchForm.vue';
import UserTable from '~/modules/user/UserTable.vue';
export default {
    data() {
        return {
        }
    },
    components: {UserSearchForm, UserTable},
}
</script>
<style lang="scss">
</style>