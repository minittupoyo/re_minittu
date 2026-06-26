<script setup lang="ts">
const { data: allPosts } = useAsyncData("allPosts", () => queryCollection("blog").where("draft", "=", false).order("date", "DESC").all())
useSeoMeta({
    title: "記事一覧 | minittu",
    description: "投稿されている記事一覧です。"
})
</script>

<template>
    <UContainer>
        <UPage>
            <UPageHeader title="記事一覧！" :description="`${allPosts?.length}件の記事があります。`" :ui="{ root: 'border-b-0' }" />
            <UBlogPosts>
                <UBlogPost v-for="(post, index) in allPosts" v-bind="post" :key="index" :to="post.path">
                    <template #date>
                        {{ useFormatDate(post.date) }}
                    </template>
                </UBlogPost>
            </UBlogPosts>
        </UPage>
    </UContainer>
</template>