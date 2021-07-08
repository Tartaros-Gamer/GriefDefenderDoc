Here I want to tell you how to edit this Doc.

GriefDefenderDoc is built with [vuepress](https://github.com/vuejs/vuepress) and [antdocs](https://github.com/zpfz/vuepress-theme-antdocs) , deploying on github pages with many features.

You can learn some editing skill from:
vuepress: https://vuepress.vuejs.org/guide/
ant design:https://antdv.com/docs/vue/introduce/

So far,I just port wiki from GD's repo,So there is only markdown available, which can't make full use of those features this doc have.

But, I still prepare an example for showing some common useage.
/docs/example.md

What's more, This Document originally support **multi-language**(No Google Translation any more),you can translate wiki with creating an folder in docs.(May be you can learn something from zh_CN,which translated by ahdg)


_**Each MarkDown files should have these front matter: https://vuepress.vuejs.org/guide/frontmatter.html**_

File Structure

docs
├─ README.md (Home)
├─ example.md (Show some editing skills)
├─ locales.js (tell doc how to handle translation file)
├─ .vuepress (tell doc how to render and generate static html file)
│          ├─ styles (Set Text,Backguard,Layout etc.)
│          ├─ public (Store some public assets like pictures)
│          ├─ config (default settings when Translation do not work correctly)
│          └─ config.js (General setting)
├─ Translation
│         ├─ translations.js (tranlate some fragmentary words/manage sidebar)
│         └─ zh.js (translated words)
├─ wiki
│  ├─ sidebar_contents.js (Order Side Bar)
│  └─ .… (Wiki Pages)
└─ zh_CN
    ├─ README.md (Translated Home)
    └─ wiki
        ├─ sidebar_contents.js (Order Translated Side Bar)
        └─ .… (Transalted Wiki Pages)