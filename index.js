/* global AFRAME */

if (typeof AFRAME === "undefined") {
  throw new Error(
    "Component attempted to register before AFRAME was available."
  );
}

function addDocumentStyles() {
  document.documentElement.style.position = "relative";
  document.body.style.overflow = "scroll";
  document.body.style.height = "100vh";
}

function removeDocumentStyles() {
  document.documentElement.style.position = "";
  document.body.style.overflow = "";
  document.body.style.height = "";
}

function createSwipeUpEl() {
  const div = document.createElement("div");
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "200vh",
    backgroundColor: "rgba(36, 202, 255, 0.65)",
    color: "white",
    fontSize: "24px",
    textAlign: "center",
    lineHeight: "100vh",
    fontFamily: "Consolas, Andale Mono, Courier New, monospace",
    zIndex: 999999,
  };
  Object.keys(style).forEach((key) => (div.style[key] = style[key]));
  div.innerText = "Swipe Up";
  return div;
}

/**
 * Ios Fullscreen Helper component for A-Frame.
 */
AFRAME.registerComponent("ios-fullscreen-helper", {
  schema: {},

  multiple: false,

  init() {
    if (!AFRAME.utils.device.isIOS()) {
      this.remove();
      return;
    }
    this._bindMethods();
    this._addEventListeners();
    this._onOrientationChange();
  },

  remove() {
    this._removeEventListeners();
    this._removeSwipeUpEl();
    removeDocumentStyles();
  },

  _bindMethods() {
    this._onOrientationChange = AFRAME.utils.bind(
      this._onOrientationChange,
      this
    );
  },
  _addEventListeners() {
    window.addEventListener("orientationchange", this._onOrientationChange);
  },
  _removeEventListeners() {
    window.removeEventListener("orientationchange", this._onOrientationChange);
  },
  _addSwipeUpEl() {
    if (this._swipeUpEl) return;
    this._swipeUpEl = createSwipeUpEl();
    document.body.appendChild(this._swipeUpEl);
    this.el.emit('addswipeup')
  },
  _removeSwipeUpEl() {
    if (this._swipeUpEl) document.body.removeChild(this._swipeUpEl);
    if (this._intervalId) clearInterval(this._intervalId);
    this._swipeUpEl = null;
    this._intervalId = null;
  },
  _onOrientationChange() {
    const isLandscape = window.orientation !== 0;
    if (isLandscape) {
      addDocumentStyles();
      this._addSwipeUpEl();
      this._intervalId = setInterval(() => {
        const screenHeight = Math.min(
          window.screen.width,
          window.screen.height
        );
        const show = screenHeight - window.innerHeight > 40;
        if (!show) {
          this._removeSwipeUpEl();
          this.el.emit('removeswipeup')
        }
      }, 100);
    } else {
      removeDocumentStyles();
      this._removeSwipeUpEl();
    }
  },
});
