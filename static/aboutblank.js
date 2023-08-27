let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

// Cloaking Code
if (!inFrame) {
  const popup = window.open("about:blank", "_blank");
  if (!popup || popup.closed) {
  script.src = "/script.js";
  } else {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");
    const script = doc.createElement("script");

    const name = localStorage.getItem("name") || "Inbox - RoundRock ISD Mail";
    const icon = localStorage.getItem("icon") || "/favicon.ico";
    
    doc.title = name;
    link.rel = "icon";
    link.href = icon;
    
    script.src = "/client.js";
    iframe.src = location.href;
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    doc.head.appendChild(link);
    doc.body.appendChild(iframe);
    doc.body.appendChild(script);
    location.replace("https://roundrockisd.schoology.com/home");
  }
}
