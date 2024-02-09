import React, { useEffect } from "react";

import classnames from "classnames";

// Styles
import "./index.scss";

const Cursor = () => {
  useEffect(() => {
    const initCursor = () => {
      var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        $outline: document.querySelector(".ppk-dot-outline"),

        init: function () {
          this.outlineSize = this.$outline.offsetWidth;

          this.setupEventListeners();
          this.animateDotOutline();
        },

        setupEventListeners: function () {
          var self = this;

          document.querySelectorAll("a, button").forEach(function (el) {
            el.addEventListener("mouseover", function () {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener("mouseout", function () {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });

          document.addEventListener("mousedown", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener("mouseup", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });

          document.addEventListener("mousemove", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            self.endX = e.pageX;
            self.endY = e.pageY;
          });

          document.addEventListener("mouseenter", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 1;
          });

          document.addEventListener("mouseleave", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 0;
          });
        },

        animateDotOutline: function () {
          var self = this;

          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + "px";
          self.$outline.style.left = self._x + "px";

          requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function () {
          var self = this;

          if (self.cursorEnlarged) {
            self.$outline.style.transform = "translate(-50%, -50%) scale(2)";
            self.$outline.style.borderColor = "white";
          } else {
            self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
            self.$outline.style.borderColor = "#3a3a3a";
          }
        },

        toggleCursorVisibility: function () {
          var self = this;

          if (self.cursorVisible) {
            self.$outline.style.opacity = 1;
          } else {
            self.$outline.style.opacity = 0;
          }
        },
      };

      cursor.init();
    };

    initCursor();
  }, []);
  return (
    <div className={classnames("cursor")}>
      <div className="ppk-dot-outline"></div>
      <div className="ppk-dot"></div>
    </div>
  );
};

export default Cursor;
