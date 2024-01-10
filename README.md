Using ssg (create on build) is better than ssr(create on request) - performance-wise.

But consider that a page need some dynamic info e.g. isSaleDay , we have here two options :
- use ssg + reactQuery for isSaleDay
- use ssr

One should use SSG if the page fetch data that is much slower than isSaleDay
But one might use SSR if data fetch is quick

In my case data is fetch from local files so it seems the SSR might be enough

In this repo we will investigate this