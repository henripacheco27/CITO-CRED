const res = await fetch('https://au.appspoupanca.com/wp-json/wp/v2/posts');
const posts = await res.json();

<h1>Posts do WordPress</h1>

{posts.map(post => (
  <article key={post.id}>
    <h2>{post.title.rendered}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
    <a href={post.link}>Leia mais</a>
  </article>
))}
