<script>
import Image from "../components/Image.svelte";
import Post from "../components/Post.svelte";
import { blog_dt, blog_title } from "../stores.js";

blog_dt.update((x) => {
  return "2021-01-15";
});
blog_title.update((x) => {
  return "Welcome to my blog!";
});
</script>

<Post>
  Welcome to my blog! You will find my thoughts and random idias here. Mostly
  boring stuff.

  <Image
    filename="mkfCDRd.jpg"
    alt="Farshid (Farsheed) Ashouri Image in black shirt" />

  I hope this will be a start for new creativity in my life.
</Post>
