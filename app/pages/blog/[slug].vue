<script setup lang="ts">
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`post-${slug}`, () => {
    return queryCollection("blog").path(`/blog/${slug}`).first()
})
const { data: surround } = await useAsyncData(`${slug}-surround`, () => {
    return queryCollectionItemSurroundings('blog', `/blog/${slug}`, {
        fields: ['description']
    })
})

const title = post ? `${post.value?.title} - minittu` : '見つかりませんでした'
const description = post ? post.value?.description : 'この記事は見つかりませんでした'

useSeoMeta({
    title,
    description
})

</script>

<template>
    <UContainer v-if="post">
        <UPage>
            <UPageHeader :title="post?.title" :description="post?.description">
                <template v-if="post?.date" #headline>
                    {{ useFormatDate(post?.date) }}
                </template>
            </UPageHeader>
            <UPageBody>
                <ContentRenderer v-if="post" :value="post" />
            </UPageBody>
            <template #right>
                <UPageAside>
                    <UContentToc :links="post?.body.toc?.links" />
                </UPageAside>
            </template>
        </UPage>
        <USeparator v-if="surround?.filter(Boolean).length" />
        <UContentSurround class="mt-8" :surround="(surround as any)" />
    </UContainer>
    <UError v-else :error="{
        status: 404,
        statusText: 'ページが見つからないよ!!',
        message: 'お探しのページは削除されたか、移動された可能性があります。',
    }" icon="i-lucide-file-x" redirect="/blog" :clear="{
        label: '記事を探す',
        icon: 'i-lucide-search'
    }" />
</template>