import React from "react";

const InstagramWidget = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "66.67%",
        margin: "0 auto",
      }}
    >
      <iframe
        src="https://snapwidget.com/embed/1085731"
        className="snapwidget-widget"
        allowTransparency="true"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        title="Posts from Instagram"
      ></iframe>
      <a
        href="https://www.instagram.com/olympicbirds?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          zIndex: 1,
        }}
      ></a>
    </div>
  );
};

export default InstagramWidget;