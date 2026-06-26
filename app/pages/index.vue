<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
const { data: recentPosts } = await useAsyncData("recentPosts", () => queryCollection("blog").where("draft", "=", false).order("date","DESC").limit(6).all())

const heroLinks = ref<ButtonProps[]>([
    {
        label: "ブログ",
        icon: "i-lucide-file",
        to: "/blog"
    },
    {
        label: "About",
        icon: "i-lucide-user",
        variant: "ghost",
        to: "/about"
    }
])
</script>

<template>
    <UContainer>
        <UPage>
            <UPageHero title="minittu" description="超個人的忘備録" headline="猫になりたい" :links="heroLinks" />
            <USeparator />
            <div class="flex flex-row items-center justify-between py-8">
                <h2 class="text-xl font-bold">最近の投稿</h2>
                <a href="/blog" class="flex flex-row items-center space-x-1 text-muted group">
                    <span>全部見る</span>
                    <Icon name="i-lucide-chevron-right" class="transition duration-300 group-hover:translate-x-1" />
                </a>
            </div>
            <UBlogPosts>
                <UBlogPost v-for="(post, index) in recentPosts" v-bind="post" :key="index" :to="post.path">
                    <template #date>
                        {{ useFormatDate(post.date) }}
                    </template>
                </UBlogPost>
            </UBlogPosts>
        </UPage>
    </UContainer>
</template>