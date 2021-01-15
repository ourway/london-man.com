<style>
.center-video {
  margin: auto;
  text-align: center;
  display: inline-block;
}
p.half {
}
</style>

<script>
import Post from "../components/Post.svelte";
import { blog_dt, blog_title } from "../stores.js";

let dt = "2021-01-15";
let title = "Trump is very unstable after second impeachment";

blog_dt.update((x) => {
  return dt;
});
blog_title.update((x) => {
  return title;
});
</script>

<Post>
  <div class="row">
    <div class="col-sm">
      <p class="half">
        Poor Trump seems radical and unstable during his last days. Republicans
        failure to persuade him to let it go is a huge mistake! Watch the
        report:
      </p>
    </div>
    <div class="col-sm">
      <div class="center-video">
        <iframe
          width="560"
          height="315"
          title="{title}"
          align="center"
          src="https://www.youtube.com/embed/gPTSZ6z_6BM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</Post>
