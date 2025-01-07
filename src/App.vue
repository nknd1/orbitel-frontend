<template>
  <NavigationBar/>
  <ContractsList/>
  <ContractDetails/>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/NavBar.vue";
import ContractsList from "@/components/ContractsList.vue";
import ContractDetails from "@/components/ContractDetails.vue";
</script>

<style scoped lang="sass"></style>

<!-- Comment
<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'

</script>

<template>
  <BaseLayout>

  </BaseLayout>

</template>
<style scoped lang="sass">

</style>
-->
