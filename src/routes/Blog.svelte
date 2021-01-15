<script>
import BlogLink from "../components/BlogLink.svelte";

let title = "Farshid Ashouri's Blog";
</script>

<svelte:head>
  <title>{title.toUpperCase()}</title>
</svelte:head>

<h1>{title}</h1>
<hr />
<div class="list-group">
  <BlogLink
    title="{'welcome to my weblog!'}"
    desc="A brief greeting and introduction"
    dt="2021-01-15"
    slug="welcome" />
</div>
