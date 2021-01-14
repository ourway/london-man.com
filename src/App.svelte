<script>
  import router from 'page'

  // Include our Routes
  import Home from './routes/Home.svelte'
  import Blog from './routes/Blog.svelte'
  import SingleBlog from './routes/SingleBlog.svelte'
  import Contact from './routes/Contact.svelte'
  import About from './routes/About.svelte'

  // Variables
  let page
  let params

  // Set up the pages to watch for
  router('/', () => (page = Home))
  router('/blog', () => (page = Blog))
  router('/about', () => (page = About))
  router('/contact', () => (page = Contact))
  router(
    '/blog/:id',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => (page = SingleBlog)
  )

  // Set up the router to start and actively watch for changes
  router.start()
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

<main>
  <svelte:component this="{page}" params="{params}" />
</main>
