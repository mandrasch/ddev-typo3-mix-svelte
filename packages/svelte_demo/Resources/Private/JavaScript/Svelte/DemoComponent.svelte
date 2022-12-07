<script>
  import { Confetti } from "svelte-confetti";
  import ToggleConfetti from "./lib/ToggleConfetti.svelte";

  // https://svelte.dev/tutorial/text-inputs
  let name = "world";
</script>

<h1>Hello {name}!</h1>

<label
  >What's your name?
  <input bind:value={name} name="name" />
</label>

<ToggleConfetti>
  <button>Alaaf! 🎉</button>
  <Confetti />
</ToggleConfetti>

<!-- TODO: use lang=scss - how? -->
<style>
  /* This is scoped CSS, no worries about other page styles :) */

  button {
    padding: 10px 20px;
  }
</style>
