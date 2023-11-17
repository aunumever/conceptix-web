<script>
  import { fade, fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { expoOut } from 'svelte/easing';
  import Dots from '$lib/components/Dots.svelte'

  let show = false
  
  onMount(() => {
    show = true
  })
</script>

{#if show}

<div in:fade={{duration: 1000}}>
  <Dots />


  <div in:fly={{delay: 400, duration: 1200, y: 100, easing: expoOut}} class="container p-12 h-screen flex flex-col justify-center items-center">
    
      <div class="flex gap-x-3 max-w-2xl w-full items-center">
        <img class="w-16" src="/brand.svg" alt="Conceptix Inc.">
        <h1 class="h1 sm:h2"><span class="gradient-heading">conceptix</span></h1>
      </div>

      <div class="space-y-5 pt-12 max-w-2xl">

        <h3 class="h3">Empowering Change Through Innovative Tech</h3>

        <p>At Conceptix Inc., we specialize in crafting enterprise-grade iOS and Android apps. We partner with non-profits and mission-driven organizations, turning their visions into digital realities.</p>

        <h3 class="h3">Driven by Purpose: Your Mission, Our Passion.</h3>
        
        <p>We believe in the power of technology to make a meaningful difference. We’re more than developers; we’re your strategic partners in creating software that matters.</p>

        <!-- <h1 class="h1">Clients</h1>

        <p>Sustainable Gardens: Revolutionizing education through interactive hydroponic gardening apps, helping students learn from seed to harvest within their classrooms.</p>

        <h1 class="h1">The Niagara Jr. Ice Dogs</h1>

        <p>The Niagara Jr. Ice Dogs: Enhancing the hockey experience for special needs players with a custom app designed for easy equipment management and team communication.</p> -->

        <p class="pt-8">Let's Innovate Together,</p>

        <p>
          Conceptix Inc.<br />
          <span class="text-secondary-300">(705) 622-3107</span>
        </p>
    </div>
  </div>
</div>
{/if}