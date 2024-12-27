<template>
  <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-horror text-red-600 hover:text-red-500 transition-colors duration-300 cursor-pointer nav-glow">
            DayZ SAMP
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a :href="`#${sectionIds.features}`" @click="(e) => smoothScroll(e, `#${sectionIds.features}`)" class="nav-link group">
            <span class="nav-text">Server Features</span>
            <span class="nav-line"></span>
            <div class="nav-hover-effect"></div>
          </a>
          
          <a :href="`#${sectionIds.about}`" @click="(e) => smoothScroll(e, `#${sectionIds.about}`)" class="nav-link group">
            <span class="nav-text">About</span>
            <span class="nav-line"></span>
            <div class="nav-hover-effect"></div>
          </a>
          
          <a href="https://discord.gg/your-discord" target="_blank" class="nav-link group">
            <span class="nav-text flex items-center">
              <svg class="w-5 h-5 mr-1 animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </span>
            <span class="nav-line"></span>
            <div class="nav-hover-effect"></div>
          </a>
          
          <a href="samp://your-server-ip" class="play-now-btn group">
            <span class="play-now-text">PLAY NOW</span>
            <span class="play-now-glow"></span>
            <div class="play-now-particles"></div>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-400 hover:text-white focus:outline-none transform hover:scale-110 transition-transform duration-300">
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="hamburger-line" :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
              <span class="hamburger-line" :class="{ 'opacity-0': isOpen }"></span>
              <span class="hamburger-line" :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="md:hidden bg-black/95 backdrop-blur-md transform transition-all duration-300"
      :class="{ 'translate-y-0 opacity-100': isOpen, '-translate-y-full opacity-0': !isOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a :href="`#${sectionIds.features}`" @click="(e) => { smoothScroll(e, `#${sectionIds.features}`); closeMenu(); }" class="mobile-nav-link block">
          Server Features
        </a>
        <a :href="`#${sectionIds.about}`" @click="(e) => { smoothScroll(e, `#${sectionIds.about}`); closeMenu(); }" class="mobile-nav-link block">
          About
        </a>
        <a href="https://discord.gg/your-discord" target="_blank" class="mobile-nav-link block">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </span>
        </a>
        <a href="samp://your-server-ip" class="w-full text-center play-now-btn mt-4 block group">
          <span class="play-now-text">PLAY NOW</span>
          <span class="play-now-glow"></span>
          <div class="play-now-particles"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  sectionIds: {
    type: Object,
    required: true
  }
})

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const smoothScroll = (e, target) => {
  e.preventDefault()
  const element = document.querySelector(target)
  if (element) {
    const offset = 80 // Height of navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.nav-link {
  @apply relative text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer overflow-hidden;
}

.nav-text {
  @apply relative z-10;
}

.nav-line {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 transform origin-left;
}

.nav-link:hover .nav-line {
  @apply w-full;
}

.nav-hover-effect {
  @apply absolute inset-0 bg-red-600/10 scale-0 transition-transform duration-300 rounded-lg;
}

.nav-link:hover .nav-hover-effect {
  @apply scale-100;
}

.mobile-nav-link {
  @apply block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-red-900/20 rounded-md transition-all duration-300 relative overflow-hidden;
}

.mobile-nav-link::after {
  content: '';
  @apply absolute inset-0 bg-red-600/10 scale-x-0 transition-transform duration-300 origin-left;
}

.mobile-nav-link:hover::after {
  @apply scale-x-100;
}

.play-now-btn {
  @apply relative px-6 py-2 overflow-hidden rounded-md bg-gradient-to-r from-red-700 to-red-900 text-white font-bold transition-all duration-300 transform hover:scale-105;
}

.play-now-text {
  @apply relative z-10;
}

.play-now-glow {
  @apply absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 transition-opacity duration-300;
}

.play-now-btn:hover .play-now-glow {
  @apply opacity-100;
}

.play-now-particles {
  @apply absolute inset-0 pointer-events-none;
}

.play-now-btn:hover .play-now-particles::before,
.play-now-btn:hover .play-now-particles::after {
  content: '';
  @apply absolute w-1 h-1 bg-red-400 rounded-full;
  animation: particle 1s linear infinite;
}

.hamburger-line {
  @apply w-6 h-0.5 bg-current my-0.5 transition-all duration-300;
}

.nav-glow {
  text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
}

@keyframes particle {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx, 50px), var(--ty, -50px)) scale(1);
    opacity: 0;
  }
}

.animate-bounce-slow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
}

/* Glass morphism effect on scroll */
:deep(.scrolled) {
  @apply bg-black/90;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>
