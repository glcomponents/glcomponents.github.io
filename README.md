# GeoLink Web Component Work

## Intro

This catalog contains components that either directly use or could use GeoLink graph resources and relations. The intent is to provide a simply method by which pages can include components which leverage GeoLink.

Through web components the amount of code necessary to implement these is reduced. Site developers can use simple HTML import directives to pull complex components in. These components expose a set of input parameters that can be used to generate relevant and useful content for the hosting site from GeoLink.

For example, to include a simple component into a web page as few as 2 additional header entries needs to be made. Placing the component itself into the page then can be as short of 1 or 2 more HTML lines. The approach works in both server and client side generated page structures.


## SPARQL notes

#### Person component query notes

```
http://data.geolink.org/id/person/642b9126-6f35-4f67-8490-2ebe94541070
http://data.geolink.org/id/person/36f92030-0429-4410-9c84-8543505f230f
http://data.geolink.org/id/person/e2b705a5-cd30-45ca-a678-4664789c826c
```

The basics of the person component is that we take a query like

```
SELECT DISTINCT  ?p ?o
WHERE {
   <http://data.geolink.org/id/person/642b9126-6f35-4f67-8490-2ebe94541070> ?p ?o
}
```

which uses an ID for the person.  This id is either a local URI or a URI used from the 
GeoLink graph which a data provider is aware is a relation for a local resources.  

The results of this are then parsed and presented to the user in a place and manner
defined by the data host.  So it can be done in a manner best for the audience.  
