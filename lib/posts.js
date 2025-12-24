import { readFile, readdir  } from "fs/promises";
import { marked } from 'marked';
import  matter  from 'gray-matter';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8");
  const { data : { date, title }, content } = matter(source);
  const body = marked(content)
  return { date, title, body };
}

// export async function getAllSlugs() {
//   const files = await readdir(postsDir)

//   return files.map(file =>
//     file.replace(/\.md$/, '')
//   )
// }