var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  /* PLEASE DO NOT COPY AND PASTE THIS CODE. */ (function () {
    var w = window,
      C = "___grecaptcha_cfg",
      cfg = (w[C] = w[C] || {}),
      N = "grecaptcha";
    var gr = (w[N] = w[N] || {});
    gr.ready =
      gr.ready ||
      function (f) {
        (cfg["fns"] = cfg["fns"] || []).push(f);
      };
    w["__recaptcha_api"] =
      "https://web.archive.org/web/20210616110048/https://www.google.com/recaptcha/api2/";
    (cfg["fallback"] = cfg["fallback"] || []).push(true);
    (cfg["render"] = cfg["render"] || []).push("onload");
    w["__google_recaptcha_client"] = true;
    var d = document,
      po = d.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src =
      "https://www.gstatic.com/recaptcha/releases/6OAif-f8nYV0qSFmq-D6Qssr/recaptcha__en.js";
    po.crossOrigin = "anonymous";
    po.integrity =
      "sha384-f1gfYQgq4OmhARgCSe1q7WV7tIcPpqu0qD+jYdSEMczD1YXPg0ibdIzvD/fZzwKc";
    var e = d.querySelector("script[nonce]"),
      n = e && (e["nonce"] || e.getAttribute("nonce"));
    if (n) {
      po.setAttribute("nonce", n);
    }
    var s = d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
  })();
}
