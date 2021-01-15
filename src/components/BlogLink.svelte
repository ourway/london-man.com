<script>
import { blog_dt, blog_title } from "../stores.js";
export let dt;
export let desc;
export let title;
export let slug;

function set_blog_info() {
  blog_dt.update((x) => {
    return dt;
  });
  blog_title.update((x) => {
    return title;
  });
}
</script>

<a
  on:click="{set_blog_info}"
  href="/blog/{slug}"
  class="list-group-item list-group-item-action ">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{title.toUpperCase()}</h5>
    <small>{dt}</small>
  </div>
  <p class="mb-1">{desc}</p>
  <small>Farshid Ashouri</small>
</a>
