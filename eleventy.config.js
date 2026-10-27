// Eleventy configuration for Mahmudul Hasan Khan's website.
// You normally never need to edit this file. Content lives in src/.
import yaml from "js-yaml";
import markdownIt from "markdown-it";

const md = markdownIt({ html: true, linkify: true, typographer: true });

export default function (eleventyConfig) {
  // Let content files and data files be written in YAML (.yml), which is easier to edit than JSON.
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // Copy images, files (CV) and styles to the finished site unchanged.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Research projects: every Markdown file in src/research/ becomes a project page,
  // listed in the order given by its "order:" value.
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByGlob("src/research/*.md")
      .filter((p) => !p.data.hidden)
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  // Turn "2025-08" into "Aug 2025" and "2026" into "2026" for news dates.
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  eleventyConfig.addFilter("newsDate", (value) => {
    const s = String(value ?? "");
    const m = s.match(/^(\d{4})-(\d{2})/);
    return m ? `${months[Number(m[2]) - 1]} ${m[1]}` : s;
  });

  // Newest first, using the "date:" field (YYYY-MM or YYYY).
  eleventyConfig.addFilter("newestFirst", (items) =>
    [...(items || [])].sort((a, b) => String(b.date).localeCompare(String(a.date)))
  );

  // Simple Markdown rendering for short text fields in YAML files (bold, italics, links).
  eleventyConfig.addFilter("md", (text) => md.renderInline(String(text ?? "")));

  // Mark the current page in the menu.
  eleventyConfig.addFilter("isCurrent", (navUrl, pageUrl) => {
    const clean = (u) => String(u || "").replace(/^\.?\//, "").replace(/index\.html$/, "");
    return clean(navUrl) === clean(pageUrl);
  });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
