<script>
import Image from "../components/Image.svelte";
import Post from "../components/Post.svelte";
import { blog } from "../stores.js";
import { onMount } from "svelte";
const api_key = "";
const base_url = "https://clip.kiri.ai/api/classify";
const image_url = "/images/kiri-api-sample.jpg";
const labels = ["kissing", "talking", "walking", "driving"];
let image_base64;
let meta = {
  dt: "2021-01-15",
  title: "Image classification API using kiri.ai",
  desc:
    "kiri.ai is a AI service provider you can use to classify your images based on tags. It uses openapi CLIP.",
};
blog.update((x) => {
  return meta;
});

onMount(async () => {
  fetch(image_url)
    .then((response) => response.blob())
    .then((blob) => {
      var reader = new FileReader();
      reader.onload = function () {
        image_base64 = this.result;
        fetch(base_url, {
          method: "POST",
          mode: "no-cors",
          credentials: "include",
          cache: "no-cache",
          headers: {
            "x-api-key": api_key,
            "content-type": "application/json",
          },
          body: JSON.stringify({ image: image_base64, labels: labels }),
        });
      };
      reader.readAsDataURL(blob);
    });
});
</script>

<Post>
  <p>
    Well, we want to classify the following image and find out whether it is an
    image of two people talking or kissing! Let's use <code>kiri.ai</code> API
  </p>
  <Image
    src="{image_url}"
    alt="a man and a woman talking while woman is jumping into a cab" />

  <p>Here is sample API:</p>
  <pre
    class="mono grey"><code>

  curl -X POST \
    -d  {'{'}"image": "base64-encoded-image", "labels": ["kissing", "talking", "walking", "driving"]{'}'}' \
    -H "x-api-key: your-api-key" \
    https://api.kiri.ai/image-classification

  </code></pre>

  <p>open the console and see the resutls in response:</p>
  <Image
    src="/images/kiri-api-sample-result.png"
    alt="kiri api sample results" />
</Post>
