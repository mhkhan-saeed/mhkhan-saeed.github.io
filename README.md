# Mahmudul Hasan Khan · personal website

This folder is the whole website. You edit plain text files; GitHub turns them into the site automatically about a minute after you save.

## One-time setup on GitHub

1. Sign in to GitHub and create a new **public** repository named **`<your-username>.github.io`**, so the site appears at `https://<your-username>.github.io`. Any other name also works, but the address will then be `https://<your-username>.github.io/<repo-name>/`.
2. On the repository page, choose **Add file → Upload files** and drag in **everything inside this folder**, including the hidden `.github` folder. If your computer hides it, upload the folder from a file browser that shows hidden files, or use GitHub Desktop. Then click **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab. The "Publish website" job runs; when it shows a green check, the site is live.

From then on, every change you commit republishes the site on its own.

## How to edit anything

Open the file on github.com, click the pencil icon, make your change, and click **Commit changes**. Wait about a minute and refresh the site.

| I want to… | Edit this file |
| --- | --- |
| Change my email, phone, headline, links or "seeking" line | `src/_data/site.yml` |
| Add a news item (award, conference, paper) | `src/_data/news.yml`: copy the example block at the top |
| Add a paper, talk or poster | `src/_data/publications.yml` |
| Update the CV page | `src/_data/cv.yml` |
| Replace the downloadable CV | Upload a new PDF named `Khan_CV.pdf` into `src/assets/files/` |
| Reorder or hide sections on the home page | `src/_data/home.yml` |
| Change the menu, or remove a page from it | `src/_data/navigation.yml` |
| Edit the About page | `src/about.md` |
| Edit a research project | `src/research/<project>.md` |
| Change the research overview | `src/research.njk` |
| Change colors or fonts | the top of `src/assets/css/style.css` |
| Replace my photo | Upload new files named `headshot-800.jpg` and `headshot-400.jpg` into `src/assets/img/` |

### Writing in the `.md` files

These are Markdown files. A line starting with `## ` is a section heading, a line starting with `- ` is a bullet, `**bold**` makes bold text, and `[text](https://link)` makes a link. To add a section to a page, add a new `## Heading` with text below it. To delete a section, delete its heading and text.

Chemical formulas use `<sub>` and `<sup>`: `MoO<sub>3</sub>` shows MoO₃, `Mo<sup>5+</sup>` shows Mo⁵⁺.

### Add a research project

1. Copy one of the files in `src/research/` and give it a short name, such as `new-project.md`. Its page will be `research-new-project.html`.
2. Edit the settings between the two `---` lines at the top: `title`, `status`, `summary`, `order` (its position in the list) and, if you have one, `image`.
3. Upload any figure into `src/assets/img/figures/` and point `image:` at it.
4. Write the page below the second `---`.

To hide a project without deleting it, add `hidden: true` to its settings. To keep it off the home page only, add `home_hidden: true`.

### Add a whole new page

1. Copy `src/about.md` to a new file, for example `src/outreach.md`.
2. Change `permalink: about.html` to `permalink: outreach.html`, and change the title.
3. Add it to the menu in `src/_data/navigation.yml`.

To remove a page completely, delete its file and its two lines in `navigation.yml`.

## Previewing on your own computer (optional)

Install Node.js, open a terminal in this folder, and run `npm install` once, then `npm start`. The site opens at `http://localhost:8080` and refreshes as you edit.

## Your own domain (optional)

Buy a domain (for example `mhkhan.com`) from any registrar. Create a file named `CNAME` inside `src/` containing just the domain, then follow GitHub's "Managing a custom domain for your GitHub Pages site" guide to point the domain at GitHub.

## Figures and copyright

- Paper summaries are written in my own words; full articles are linked, not hosted.
- The competitive-HDO graphical abstract is reused under the article's CC BY-NC-ND 4.0 license.
- The Sabatier graphical abstract is credited to the American Chemical Society; check ACS's author reuse terms if anything changes.
- Unpublished projects show only concept figures and qualitative findings.
