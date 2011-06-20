Getting Started With Node.js
============================

Recently, I've been asked by a few people for some info on getting up and running with nodejs.  So here goes.   The best blogs and websites I've come across are:

http://www.dailyjs.com - there are some good nodejs project code reviews on here to give you inspiration
http://blog.nodejitsu.com
http://www.howtonode.org - seems to be down today, but it's got loads of good tutorials.
http://tjholowaychuk.com/
http://asyncjs.com/
http://www.debuggable.com/blog
http://nodetuts.com/

I've mostly been using express and mongo.  I didn't get on with the mongoose driver / orm that well, but then I didn't really give it much time.  I'd already been using the mongo client so I stuck with that.  If you are not that familiar with document databases then I would recommend trying to forget about your SQL knowledge and normalisation and model it in terms of your domain, it can get a little tricky knowing when you should use nested properties and when you should use nested references to ids in a different collection, there is some good advice on this in the Apress MongoDB book, which I can thoroughly recommend.  In general though the decision will be down to how you are accessing your data.  You also want to limit to the number of indexes per collection, so that should guide your design too.  I have used Redis for cacheing and non-perisistent data such as session too.  Discussing the pros and cons of different nosql databases though is beyond the scope of this intro.

I used the jade templating engine with less on the projects I've done with node, these were written by TJ Holwaychuk, who I linked to above.  He's also made a CSS templating engine called stylus which looks very promising too.  As for testing frameworks, my current favourite is vowsjs but jasmine is really nice too, both are much nicer than the test framework bundled with express.  There is also an implementation of cucumber for nodejs which exports vowsjs test though I haven't used it yet.

I would recommend applying for a beta account on one of the nodejs PaaS providers rather than heroku, they are more natural to use as they are designed specifically with nodejs in mind and you don't have to mingle ruby files in your source code!  There is very high demand and it can take weeks to get a coupon.  Joyent's no.de service and nodejitsu are probably the two best ones.  I got another coupon this morning for Joyent, so that may be an indication that they are releasing another large batch at the moment.  You get one smart machine (like a dyno) for free.

Finally I would recommend having a look at some of the Futures / Promises frameworks to deal with asynchronous control flow more elegantly.  I have use Step extensively with success, but there are loads around, some of them have got really nice fluent APIs.  There is a 3 part tutorial on control flow on the howtonode site, which is worth a read.
