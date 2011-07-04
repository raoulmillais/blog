Title: Getting Started With Node.js
Author: Raoul Millais
Date: Tue Jun 14 2010 10:47:00 GMT-0000 (GMT)
Node: v0.4.7

## Getting Started With Node.js

Recently, I've been asked by a few people for some info on getting up and running with [nodejs][].  So here goes.   The best blogs and websites I've come across are:

* [DailyJS][] - General JavaScript blog but there are some excellent [nodejs][] project code reviews on here to give you inspiration
* [Nodejitsu][] - Nodejitsu, open-source node-based Platform as a Service
* [howtonode][] - Great node tutorial site, by [Tim Caswell][https://github.com/creationix], creator of the blog engine this site runs on
* [TJHolowaychuk][] - Node guru who wrote [express][], the [Jade][] template engine and others.
* [asyncjs][] - JavaScript meetup group in Brighton, plenty of JavaScritp articles here
* [Debuggable][]- [Felix Geisendörfer's][] node consultancy company blog.
* [nodetuts][] - Another great node tutorial site

I've mostly been using [express][] and [mongodb][].  I didn't get on with the mongoose driver / orm that well, but then I didn't really give it much time.  I'd already been using the mongo client so I stuck with that.  If you are not that familiar with document databases then I would recommend trying to forget about your SQL knowledge and normalisation and model it in terms of your domain, it can get a little tricky knowing when you should use nested properties and when you should use nested references to ids in a different collection, there is some good advice on this in the Apress MongoDB book, which I can thoroughly recommend.  In general though the decision will be down to how you are accessing your data.  You also want to limit to the number of indexes per collection, so that should guide your design too.  I have used Redis for cacheing and non-perisistent data such as session too.  Discussing the pros and cons of different nosql databases though is beyond the scope of this intro.

I used the jade templating engine with less on the projects I've done with node, these were written by TJ Holwaychuk, who I linked to above.  He's also made a CSS templating engine called stylus which looks very promising too.  As for testing frameworks, my current favourite is [Vows][] but [Jasmine][] is really nice too, both are much nicer than the test framework bundled with express.  There is also an implementation of cucumber for nodejs which exports [Vows][] test though I haven't used it yet.

I would recommend applying for a beta account on [one][http://no.de/] [of][http://www.nodejitsu.com/] [the][http://nodester.com/] nodejs-specific PaaS providers rather than [heroku][http://www.heroku.com/], they are more natural to use as they are designed specifically with nodejs in mind and you don't have to mingle ruby files in your source code.  There is very high demand and it can take weeks to get a coupon.  Joyent's no.de service and nodejitsu are probably the two best ones.  I got another coupon this morning for Joyent, so that may be an indication that they are releasing another large batch at the moment.  You get one smart machine (like a dyno) for free.  There are plenty of options springing up all thie time thogh, so go with what you are most comfortable with if you can't wait.

Finally I would recommend having a look at some of the Futures / [Promises][] frameworks to deal with asynchronous control flow more elegantly.  I have use Step extensively with success, but there are loads around, some of them have got really nice fluent APIs.  There is a 3 part tutorial on control flow on the [howtonode][] site, which is worth a read.

[express]: http://expressjs.com/
[Vows]: http://vowsjs.org/
[nodejs]: http://nodejs.org/
[mongodb]: http://www.mongodb.org/
[DailyJS]: http://www.dailyjs.com/
[Nodejitsu]: http://blog.nodejitsu.com/
[asyncjs]: http://asyncjs.com/
[Debuggable]: http://www.debuggable.com/blog
[TJHolowaychuk]: http://tjholowaychuk.com/ 
[Jade]: http://jade-lang.com/
[Jasmine]: http://pivotal.github.com/jasmine/
[Felix Geisendörfer's]: http://www.debuggable.com/felix/
[Promises]: http://en.wikipedia.org/wiki/Promise_%28programming%29
[howtonode]: http://www.howtonode.org/
[nodetuts]: http://nodetuts.com/

