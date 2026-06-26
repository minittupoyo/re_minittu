<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "ja"
  }
})

useSeoMeta({
  title: "minittu",
  description: "超個人的忘備録"
})
</script>