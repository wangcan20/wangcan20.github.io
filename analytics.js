// Paste your GA4 measurement ID here, for example: G-1A2BCD345E
const GA_MEASUREMENT_ID = "G-N6TEPDT88G";

const shouldSkipAnalytics =
  !GA_MEASUREMENT_ID ||
  window.location.protocol === "file:" ||
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

if (!shouldSkipAnalytics) {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.prepend(script);
}
