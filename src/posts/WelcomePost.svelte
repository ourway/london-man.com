<script>
import Image from "../components/Image.svelte";
import Post from "../components/Post.svelte";
import { blog } from "../stores.js";

let meta = {
  dt: "2021-01-15",
  title: "Welcome to my blog!",
  desc: "Welcome to Farshid Ashouri's Personal Blog!",
};

blog.update((x) => {
  return meta;
});
</script>

<Post>
  Welcome to my blog! You will find my thoughts and random idias here. Mostly
  boring stuff.

  <Image
    src="/images/mkfCDRd.jpg"
    alt="Farshid (Farsheed) Ashouri Image in black shirt" />

  I hope this will be a start for new creativity in my life.
</Post>
