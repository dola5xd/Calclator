let result = document.querySelector(".input");
let reset = document.querySelector(".reset");
let btns = document.querySelectorAll(".calc-btn");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    if (
      e.textContent !== "DEL" &&
      e.textContent !== "=" &&
      e.textContent !== "×"
    ) {
      result.value += e.textContent;
    } else if (e.textContent === "×") {
      result.value += e.value;
    } else if (e.textContent === "DEL") {
      result.value = result.value.toString().slice(0, -1);
    } else if (e.textContent === "=") {
      if (result.value.length === 0) {
        result.value = "";
      } else {
        result.value = eval(result.value);
      }
      if (result.value.length > 3) {
        result.value = eval(result.value).toFixed(2);
      }
      if (result.value === "NaN") {
        result.value = "";
      }
      if (result.value === "Infinity") {
        result.value = "";
      }
    }
  });
});

// reset btn
reset.addEventListener("click", () => {
  result.value = "";
});

var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.documentElement.style.setProperty("--bg", "hsl(222, 26%, 31%)");
      document.documentElement.style.setProperty("--white", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty(
        "--toggle-bg",
        "hsl(223, 31%, 20%)"
      );
      document.documentElement.style.setProperty(
        "--toggle-btn",
        "hsl(6, 63%, 50%)"
      );
      document.documentElement.style.setProperty(
        "--hover",
        "hsl(6.79deg 92.98% 66.47%)"
      );
      document.documentElement.style.setProperty(
        "--label-bg",
        "hsl(224, 36%, 15%)"
      );
      document.documentElement.style.setProperty(
        "--btns-bg",
        "hsl(224.52deg 29.52% 20.59%)"
      );
      document.documentElement.style.setProperty(
        "--btns-font-color",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--btns-shadow",
        "hsl(28, 16%, 65%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-bg",
        "hsl(225, 21%, 49%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-shadow",
        "hsl(224.08deg 27.37% 35.1%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-hover",
        "hsl(223.13deg 51.61% 75.69%)"
      );
      document.documentElement.style.setProperty(
        "--equal-shadow",
        "hsl(6, 70%, 34%)"
      );
      document.documentElement.style.setProperty(
        "--btn-bg",
        "hsl(48deg 8.77% 88.82%)"
      );
      document.documentElement.style.setProperty(
        "--input-txt",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--bg-hover",
        "hsl(0, 0%, 100%)"
      );
    } else if (index == 1) {
      document.documentElement.style.setProperty("--bg", "hsl(0, 0%, 90%)");
      document.documentElement.style.setProperty("--white", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty(
        "--toggle-bg",
        "hsl(0, 5%, 81%)"
      );
      document.documentElement.style.setProperty(
        "--toggle-btn",
        "hsl(25.03deg 99% 39.41%)"
      );
      document.documentElement.style.setProperty(
        "--hover",
        "hsl(25.03deg 100% 60.98%)"
      );
      document.documentElement.style.setProperty(
        "--label-bg",
        "hsl(0, 0%, 93%)"
      );
      document.documentElement.style.setProperty(
        "--btns-bg",
        "hsl(0deg 6.38% 81.57%)"
      );
      document.documentElement.style.setProperty(
        "--btns-font-color",
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        "--btns-shadow",
        "hsl(30deg 10.1% 61.18%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-bg",
        "hsl(184.56deg 41.36% 37.45%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-shadow",
        "hsl(185, 58%, 25%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-hover",
        "hsl(184.57deg 41.07% 56.08%)"
      );
      document.documentElement.style.setProperty(
        "--equal-shadow",
        "hsl(25, 99%, 27%)"
      );
      document.documentElement.style.setProperty(
        "--btn-bg",
        "hsl(48deg 8.77% 88.82%)"
      );
      document.documentElement.style.setProperty(
        "--input-txt",
        "hsl(60, 10%, 19%)"
      );
      document.documentElement.style.setProperty(
        "--bg-hover",
        "hsl(0, 0%, 100%)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--bg",
        "hsl(268.42deg 79.17% 9.41%)"
      );
      document.documentElement.style.setProperty("--white", "hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty(
        "--toggle-bg",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--toggle-btn",
        "hsl(176.23deg 100% 43.73%)"
      );
      document.documentElement.style.setProperty(
        "--hover",
        "hsl(176.64deg 100% 79.02%)"
      );
      document.documentElement.style.setProperty(
        "--label-bg",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--btns-bg",
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        "--btns-font-color",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--btns-shadow",
        "hsl(288.31deg 62.11% 37.25%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-bg",
        "hsl(282.2deg 96.72% 23.92%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-shadow",
        "hsl(283.98deg 91.7% 52.75%)"
      );
      document.documentElement.style.setProperty(
        "--Sbtn-hover",
        "hsl(280.16deg 56.44% 44.12%)"
      );
      document.documentElement.style.setProperty(
        "--equal-shadow",
        "hsl(176.17deg 93.38% 70.39%)"
      );
      document.documentElement.style.setProperty(
        "--btn-bg",
        "hsl(271.76deg 49.51% 20.2%)"
      );
      document.documentElement.style.setProperty(
        "--input-txt",
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        "--bg-hover",
        "hsl(267.5deg 53.57% 43.92%)"
      );
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0.5";
        item.style.backgroundColor = "var(--toggle-btn)";
      });
  });
});
