---
title: "Demo"
date: 2020-06-28T06:37:15-05:00
---

## About

Demonstrate various code insertion approaches.  

* Demo 1: code is inline in the Markdown
* Demo 2: code is called from GitHub via JS
* Demo 3: code is from the local files in the repository pull

I then push this to Google Cloud Storage and it is served 
via [GROW](https://github.com/fils/goobjectweb)

### Demo 1
This is a demo where the code is inline with the 
markdown

{{< code lang="JSON" >}} 
{
    "@context": { "@vocab": "http://schema.org/" },

    "@id": "http://example.org/ns#Bob",
    "@type": "Person",
    "givenName": "Robert",
    "familyName": "Junior",
    "birthDate": "1971-07-07",
    "deathDate": "1968-09-10",
    "address": {
        "@id": "http://example.org/ns#BobsAddress",
        "streetAddress": "1600 Amphitheatre Pkway",
        "postalCode": 9404
    }
}
{{< /code >}}

### Demo 2
This is code pulled from GitHub via a JS call.   The code highlighting is not 
working on this one.  Not sure why, will investigate later.  

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
      axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/ESIPFed/science-on-schema.org/master/examples/dataset/minimal.jsonld'
       })
      .then(function (response) {
         document.getElementById("code-element").innerText = JSON.stringify(response.data, null, 2);
      });
</script>
<div class="highlight">
<pre  style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"  >
<code class="language-JSON" data-lang="JSON" id="code-element">
</code> 
</pre>
</div>

### Demo 3

This is code from a file during the Hugo build.  So in the repo this would 
come from relative links to the example documentation.   The work flow would be 
simply; sycn the repo, hugo build, sync to object store

{{<code lang="turtle" file="code/shape.ttl">}}


