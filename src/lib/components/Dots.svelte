<script>
  import { onMount } from 'svelte'

  onMount(() => {
    VANTA.DOTS({
      el: "#dots",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: '#2dd4bf',
      color2: '#a5f3fc',
      backgroundAlpha: 0,
      size: 1.10,
      showLines: false
    })
  })
</script>

<div id="dots" class="absolute top-0 left-0 right-0 h-screen w-full z-10"></div>