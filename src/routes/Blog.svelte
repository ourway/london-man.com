<script>
import BlogLink from "../components/BlogLink.svelte";

let title = "Farshid Ashouri's Blog";
</script>

<svelte:head>
  <title>{title.toUpperCase()}</title>
</svelte:head>

<h1>{title}</h1>
<br />
<div class="list-group">
  <BlogLink
    title="Trump reported to be unstable in last days"
    desc="During last days of his disastrous presidency, Trump gets more and more radical and unstable"
    dt="2021-01-15"
    slug="unstable-trump" />

  <BlogLink
    title="welcome to my weblog!"
    desc="A brief greeting and introduction"
    dt="2021-01-15"
    slug="welcome" />
</div>
