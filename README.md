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
Using <a href='https://pagespeed.web.dev'>Page Speed Insight</a> on <a href='https://next-js-ssr-vs-ssg-specific-us-git-4755bd-natankrasney-gmailcom.vercel.app/'>production</a> it turns out that in this use case fetching data from local files:
<ul>
<li>using import (default)</li>
<li>using getServerSideProps (ssr)</li>
<li>using getStaticProps (ssg)</li>
</ul>

We got 100 score for all, thus same !!

<h2>Conclusion</h2>
One should not be afraid to use ssr instead of ssg in this use case because the performance are the same
<p>remark : i am not using isSaleDay here because i got the info i want</p>

<h2>Whats next</h2>
In my use case isSaleDay is used in the top menu which is used from _app. To handle this i have two options :
<ul>
<li>remove top from _app and use in each page (ssr)</li>
<li>make top a server component</li>
</ul>

The elegant solution is use server component but this is availeable only on the app router