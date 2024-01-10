<h2>Motivation</h2>
Using ssg (create on build) is better or equal to ssr(create on request) - performance-wise.

But consider that a page need some dynamic info e.g. isSaleDay , we have here two options :
- use ssg + reactQuery for isSaleDay
- use ssr

One should use SSG if the page fetch data that is much slower than isSaleDay
But one might use SSR if data fetch is quick

In my use case (www.nathankrasney.com) ,  data is fetch from local files so it seems that SSR might be enough

In this repo we will investigate this

<h2>Results</h2>
Using <a href='https://pagespeed.web.dev'>Page Speed Insight</a> it turns out that in this use case fetching data from local files:
<ul>
<li>using import (default)</li>
<li>using getServerSideProps (ssr)</li>
<li>using getStaticProps (ssg)</li>
</ul>

We got 100 score , thus same !!