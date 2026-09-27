# Blog posts

Each post is one Markdown file in this folder. It shows up in the **Blog** section of `index.html` and opens in a pop-up reader. Every post also gets a shareable link: `madebyosama.com/#blog/<file-name>`.

## Add a post

1. Create `posts/my-new-post.md` and write the post in Markdown. Don't add a title; it comes from step 2.
2. In `index.html`, find `<div class="blog-card" id="blogList">` and copy one of the `<button class="blog-row">` blocks to the top of the list (newest first):

   ```html
   <button
     type="button"
     class="blog-row"
     data-post="my-new-post"
     data-title="My new post"
     data-date="October 3, 2026 &middot; 3 min read"
   >
     <span class="b-info">
       <span class="b-title">My new post</span>
       <span class="b-meta">Essay &middot; Design</span>
     </span>
     <span class="b-date">Oct 3</span>
   </button>
   ```

   `data-post` is the file name without `.md`. `data-date` is shown under the title in the reader; `b-date` is the short date in the list.

   For a post about a link, add `data-link="https://…"`. The reader then shows a "Visit …" button. Also add the ↗ icon after the title, as in the Practical Typography row.

After 5 posts, the older ones are tucked behind a "Show all posts" button.

## Writing

- Standard Markdown: headings (`##`), lists, links, quotes, code blocks, tables.
- `==highlight==` for a highlighter mark.
- Footnotes: `text[^1]`, then `[^1]: the note` on its own line.
- Images: put the file in `assets/images/posts/<post-name>/`, then
  `![Describe the image](assets/images/posts/<post-name>/photo.jpg "Optional caption")`.
  Compress photos first (1600px wide is plenty).
