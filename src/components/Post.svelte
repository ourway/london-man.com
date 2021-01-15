<script>
import { blog_dt, blog_title } from "../stores.js";

let dt;
let title;
blog_dt.subscribe((value) => {
  dt = value;
});
blog_title.subscribe((value) => {
  title = value;
});
</script>

<svelte:head>
  <title>{title.toUpperCase()}</title>
</svelte:head>

<div class="d-flex w-100 justify-content-between">
  <h1 class="mb-1">{title.toUpperCase()}</h1>
  <strong>{dt}</strong>
</div>
<article>
  <slot />
</article>
