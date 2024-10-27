// TOPに戻るボタンの表示制御
window.addEventListener("scroll", scrollFunction);

const topButton = document.getElementById("topButton");

function scrollFunction() {
  topButton.style.display =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ? "block"
      : "none";
}

// ハンバーガーメニューの開閉制御
function closeHamburgerMenu() {
  document.getElementById("hamburger").checked = false;
}

document.querySelectorAll(".c-header__list-link, .menu-items a").forEach((link) =>
  link.addEventListener("click", closeHamburgerMenu)
);

// fadeInエフェクトの処理
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in-element");

  const handleScroll = () => {
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

