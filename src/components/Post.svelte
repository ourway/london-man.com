<style>
div.header {
  margin-bottom: 2em;
}
h1.title {
  font-weight: bold;
  text-transform: uppercase;
}
strong.dt {
  color: grey;
}
article {
  font-size: 1.4375rem;
}
</style>

<script>
import { blog_dt, blog_title } from "../stores.js";
import { onMount } from "svelte";

let dt;
let title;

onMount(() => {
  blog_dt.subscribe((value) => {
    dt = value;
  });
  blog_title.subscribe((value) => {
    title = value;
  });
});
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="container">
  <div class="d-flex w-100 justify-content-between header">
    <h1 class="mb-1 title">{title}</h1>
    <strong class="dt">{dt}</strong>
  </div>
  <article>
    <slot />
  </article>
</div>
