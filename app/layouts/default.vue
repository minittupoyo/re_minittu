<script setup lang="ts">
const navLinks = [
    { label: 'ブログ', to: '/blog' },
    { label: 'About', to: '/about' }
]
</script>

<template>
    <UHeader title="minittu" :links="navLinks">
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
    <UMain>
        <slot />
    </UMain>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">&copy; 2026 minittu.</p>
        </template>
        <template #right>
            <UButton
                icon="i-tabler-brand-github"
                to="https://github.com/minittupoyo"
                target="_blank"
                variant="ghost"
                color="neutral"
                aria-label="GitHub"
            />
        </template>
    </UFooter>
</template>
