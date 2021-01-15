<style>
.far-image {
  clear: both;
  margin: 1em;
}
</style>

<script>
export let filename;
export let alt;
</script>

<div class="far-image">
  <img
    class="img-thumbnail"
    alt="{alt}"
    src="/images/{filename}"
    width="50%" />
</div>
