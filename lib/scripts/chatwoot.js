// Chatwoot

(function(d,t) {
    var BASE_URL="https://crm.livecultr.co";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: '8wGg9BUCGNtRYHVjMtdkXxH1',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");