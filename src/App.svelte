<script>
import router from "page";

// Include our Routes
import Home from "./routes/Home.svelte";
import Blog from "./routes/Blog.svelte";
import Contact from "./routes/Contact.svelte";
import About from "./routes/About.svelte";
import NavBar from "./components/NavBar.svelte";
import Footer from "./components/Footer.svelte";
export let name = "app";
// posts
import WelcomePost from "./posts/WelcomePost.svelte";
import UnstableTrump from "./posts/UnstableTrump.svelte";
import KiriAPI from "./posts/Kiri-API.svelte";

// Variables
let page;
let params;

// Set up the pages to watch for
router("/", () => (page = Blog));
router("/about", () => (page = About));
router("/contact", () => (page = Contact));
router("/blog/welcome", () => (page = WelcomePost));
router("/blog/unstable-trump", () => (page = UnstableTrump));
router("/blog/kiri.ai-api", () => (page = KiriAPI));

// Set up the router to start and actively watch for changes
router.start();
</script>

<div class="container">
  <NavBar />
  <br />

  <main>
    <svelte:component this="{page}" />
  </main>

  <Footer />
</div>
