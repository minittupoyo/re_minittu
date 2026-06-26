<script setup lang="ts">
const { data: page } = await useAsyncData("about", () => {
    return queryCollection("pages").path("/page/about").first()
})
useSeoMeta({
    title: "About - minittu",
    description: "このブログについて"
})
</script>

<template>
    <UContainer>
        <UPage>
            <UPageHeader :title="page?.title" :description="page?.description">
            </UPageHeader>
            <UPageBody>
                <ContentRenderer v-if="page" :value="page" />
            </UPageBody>
            <template #right>
                <UPageAside>
                    <UContentToc :links="page?.body.toc?.links" />
                </UPageAside>
            </template>
        </UPage>
    </UContainer>
</template>