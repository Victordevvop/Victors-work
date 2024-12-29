<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<script setup lang="ts">
useHead({
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
  bodyAttrs: {
    class: "light",
  },
});

useSeoMeta({
  // title: "Computer Based Testing (CBT) Platform - MyschoolCBT",
  // ogTitle: "Computer Based Testing (CBT) Platform - MyschoolCBT",
  // description:
  //   "You can take CBT practice tests and get instant results to immediately see how ready you are for your exams. MyschoolCBT is a premium Computer Based Testing (CBT) platform that helps you prepare for your next exam.",
  // ogDescription:
  //   "You can take CBT practice tests and get instant results to immediately see how ready you are for your exams. MyschoolCBT is a premium Computer Based Testing (CBT) platform that helps you prepare for your next exam.",
  // ogImage: "https://myschool.ng/img/myschool.png",
  // ogType: "website",
  // ogUrl: "https://www.myschoolcbt.com",
  // twitterCard: "summary_large_image",
});

// example: react to a cookie being accepted
</script>

<style lang="scss" global>
.container-x {
  @apply container mx-auto px-4 lg:px-[82px];

  &.no-padding-mobile {
    @apply px-0 sm:px-4 lg:px-[82px];
  }
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

@media (min-width: 320px) and (max-width: 640px) {
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
}
</style>
