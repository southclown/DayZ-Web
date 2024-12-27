<template>
  <div class="min-h-screen bg-black text-gray-200">
    <header :id="sectionIds.home" class="relative h-screen">
      <div class="absolute inset-0 bg-black/50 z-20"></div>
      <div class="absolute inset-0 z-10">
        <video autoplay loop muted playsinline class="w-full h-full object-cover">
          <source src="/videos/zombie-bg.mp4" type="video/mp4">
        </video>
      </div>
      
      <div class="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 class="text-7xl font-horror mb-4 text-red-600 animate-flicker">DayZ SAMP</h1>
        <p class="text-2xl mb-8 font-horror-secondary tracking-wider">Bertahan Hidup di Dunia yang Sudah Mati</p>
        <div class="space-x-6">
          <button class="relative group">
            <span class="absolute inset-0 bg-red-600 transform skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></span>
            <span class="relative px-8 py-3 inline-block text-white font-bold group-hover:text-red-100 transition-colors duration-300">BERGABUNG</span>
          </button>
          <button class="relative group">
            <span class="absolute inset-0 bg-gray-800 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></span>
            <span class="relative px-8 py-3 inline-block text-white font-bold group-hover:text-gray-100 transition-colors duration-300">DISCORD</span>
          </button>
        </div>
      </div>

      <!-- Blood Drips -->
      <div class="absolute top-0 left-0 right-0 z-50 flex justify-between">
        <div v-for="n in 12" :key="n" 
             class="blood-drip" 
             :style="{ 
               left: ((n - 1) * (100/12)) + '%',
               animationDelay: (Math.random() * 5) + 's',
               opacity: Math.random() * 0.7 + 0.3,
               transform: `scale(${Math.random() * 0.5 + 0.5})`
             }">
        </div>
      </div>

      <!-- Floating Zombies -->
      <div class="absolute inset-0 pointer-events-none z-25">
        <div v-for="n in 3" :key="n" 
             class="absolute w-32 h-32 bg-zombie bg-contain bg-no-repeat opacity-30 zombie-float"
             :style="{ 
               left: (n * 30) + '%',
               animationDelay: (n * 2) + 's',
               filter: 'hue-rotate(' + (n * 30) + 'deg) brightness(0.5)'
             }">
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section :id="sectionIds.features" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-horror text-red-600 text-center mb-16">Fitur Server</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-red-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💀</div>
              <h3 class="text-2xl font-horror-secondary mb-4 text-red-400 group-hover:text-red-300">Survival System</h3>
              <p class="text-gray-400 group-hover:text-gray-300">Bertahan dari kelaparan, kehausan, dan serangan zombie.</p>
            </div>
          </div>
          <div class="feature-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-red-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏰</div>
              <h3 class="text-2xl font-horror-secondary mb-4 text-red-400 group-hover:text-red-300">Base Building</h3>
              <p class="text-gray-400 group-hover:text-gray-300">Bangun dan lindungi markas anda dari serangan.</p>
            </div>
          </div>
          <div class="feature-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-red-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚔️</div>
              <h3 class="text-2xl font-horror-secondary mb-4 text-red-400 group-hover:text-red-300">PvP System</h3>
              <p class="text-gray-400 group-hover:text-gray-300">Bertarung dengan pemain lain untuk bertahan hidup.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section :id="sectionIds.about" class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-horror text-red-600 text-center mb-16">About Us</h2>
        <div class="max-w-4xl mx-auto text-gray-400">
          <p class="mb-6">DayZ SAMP adalah server survival horror multiplayer yang menantang.</p>
          <p class="mb-6">Bergabunglah dengan komunitas kami dan bertahan hidup bersama!</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section :id="sectionIds.stats" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-horror text-red-600 text-center mb-16">Server Stats</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="stat-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-4xl font-horror text-red-600 mb-2 group-hover:text-red-500 group-hover:scale-110 transform transition-all duration-300">24/7</div>
              <div class="text-gray-500 font-horror-secondary group-hover:text-gray-400">Uptime</div>
            </div>
          </div>
          <div class="stat-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-4xl font-horror text-red-600 mb-2 group-hover:text-red-500 group-hover:scale-110 transform transition-all duration-300">100+</div>
              <div class="text-gray-500 font-horror-secondary group-hover:text-gray-400">Players</div>
            </div>
          </div>
          <div class="stat-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-4xl font-horror text-red-600 mb-2 group-hover:text-red-500 group-hover:scale-110 transform transition-all duration-300">50+</div>
              <div class="text-gray-500 font-horror-secondary group-hover:text-gray-400">Features</div>
            </div>
          </div>
          <div class="stat-card group">
            <div class="card-glow"></div>
            <div class="relative z-10">
              <div class="text-4xl font-horror text-red-600 mb-2 group-hover:text-red-500 group-hover:scale-110 transform transition-all duration-300">1000+</div>
              <div class="text-gray-500 font-horror-secondary group-hover:text-gray-400">Discord</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    sectionIds: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.blood-drip {
  position: absolute;
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, 
    rgba(220, 38, 38, 0) 0%,
    rgba(220, 38, 38, 0.8) 50%,
    rgba(220, 38, 38, 0) 100%
  );
  filter: blur(0.5px);
  animation: drip 4s infinite;
}

.blood-drip::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: rgb(220 38 38);
  border-radius: 50%;
  opacity: 0.8;
}

.feature-card {
  @apply relative bg-gray-900/50 p-8 rounded-lg border border-red-900/20 overflow-hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
}

.stat-card {
  @apply relative text-center p-6 bg-gray-900/50 rounded-lg overflow-hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
}

.card-glow {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(220, 38, 38, 0.4) 0%,
    transparent 60%
  );
}

.feature-card:hover .card-glow,
.stat-card:hover .card-glow {
  opacity: 1;
}

.zombie-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes drip {
  0% {
    transform: translateY(-100%) scaleY(1);
    opacity: 0;
  }
  50% {
    transform: translateY(50vh) scaleY(1.2);
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) scaleY(1);
    opacity: 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.font-horror {
  font-family: 'Nosifer', cursive;
}

.font-horror-secondary {
  font-family: 'Creepster', cursive;
}

.animate-flicker {
  animation: flicker 2s infinite;
}

@keyframes flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
    text-shadow: none;
  }
}
</style>


