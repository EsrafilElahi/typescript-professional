/**
 * Inspire by:
 * https://leerob.io/blog/nextjs-sitemap-robots
 */

const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.ts,.tsx}',
    '_posts/**/*{.md,.mdx}',
    '!pages/**/[slug].tsx',
    '!pages/_*.tsx',
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/api',
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('_posts', '/blog')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('/index', '');
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://www.ansonlichtfuss.com${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
