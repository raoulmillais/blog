Title: Why Enforce Separation Between Your Domain and View Models?
Author: Raoul Millais
Date: Tue Jun 14 2010 10:47:00 GMT-0000 (GMT)
Node: v0.4.7

Why Enforce Separation Between Your Domain and View Models?
=============================================================================

Recently at work we noticed that there was some inconsistency in how we map data to our view models. Some models have a flattened structure and some a nested structure, as so:

[Flat model]
ViewModel
    - XxxxName
    - XxxxUrl
    - YyyyName
    - YyyyUrl

[Nested model]
TrackViewModel
    - Xxxx
        - Name
        - Url
    - Yyyy
        - Name
        - Url

Opiion seemed roughly divided as to which technique to use, the arguments for the latter mostly relating to code reuse and less boring left/right code or automapper profiles.  Personally I prefer the top one for a number of reasons.  

The domain model and the view model have distinct responsibilities, the view model validates the user input (for POSTs at least) whereas the domain model enforces business logic.  With this separation, the view model acts as an anti-corruption layer for the domain.  I think that is definitely not a good idea to expose any DTO (from external services) or domain objects in the view models as it gives you less flexibility to change the business logic separately from the UI.  As an example: DTOs may have complex pricing information, which does not need to be exposed in the (dumb) view model, a preformatted price can be represented as a string, for outputting in the view.  This has the added benefit of removing the temptation to put any logic in the views or helpers (which we all know we shouldn't be doing)

My colleague Phil also pointed out there are a couple of other benefits: it removes the nesting and It's clear to see exactly what is on your view model - all the mapping logic lives somewhere else (AutoMapper profile or some Api mapping class). 

One downside is that the flat model means we can't reuse sub models properties in other places, but there is nothing to stop you creating sub view models.  You have to be careful to balance the law of demeter with code reuse of course.
