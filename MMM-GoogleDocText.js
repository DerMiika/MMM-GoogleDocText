Module.register("MMM-GoogleDocText", {
  defaults: {
    url: "",
    updateInterval: 5 * 60 * 1000, // 5 Minutes
    fadeSpeed: 2000
  },

  start: function () {
    this.html = "Loading Google Doc...";
    this.getData();
    setInterval(() => {
      this.getData();
    }, this.config.updateInterval);
  },

  getData: function () {
    fetch(this.config.url)
      .then(response => response.text())
      .then(data => {
        this.html = data;
        this.updateDom(this.config.fadeSpeed);
      })
      .catch(error => {
        console.error("The Google Docs couldn't load:", error);
        this.html = "<span style='color:red;'>Error: The Google Docs couldn't load.</span>";
        this.updateDom(this.config.fadeSpeed);
      });
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.html;
    wrapper.style.fontSize = "18px";
    wrapper.style.lineHeight = "1.5em";
    wrapper.style.maxWidth = "1000px";
    wrapper.style.textAlign = "left";
    wrapper.style.overflow = "hidden";
    wrapper.style.color = "#fff"; // White for MagicMirror-Background
    return wrapper;
  }
});
