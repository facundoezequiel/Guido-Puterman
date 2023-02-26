import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// Iconos
import { HiOutlineEye } from "react-icons/hi";

export default function Fila({ video, order, titulo, cliente, fecha }) {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });

  return (
    <Container order={order}>
      {order == 1 ? (
        <div id="sections-container">
          <section>
            <Link to="/">
              <div id="texto-container">
                <div>
                  <p>{titulo}</p>
                  <p>
                    {cliente}&ensp;-&ensp;{fecha}
                  </p>
                </div>
                <span>
                  <HiOutlineEye />
                </span>
              </div>
              <div id="video-container">
                <Fade>
                  <video class="lazy" autoPlay={true} muted loop playsinline>
                    <source src={video} type="video/mp4" />
                  </video>
                </Fade>
              </div>
            </Link>
          </section>
          <section></section>
          <section className="mobile-section-none"></section>
          <section className="tablet-section-none"></section>
        </div>
      ) : order == 2 ? (
        <div id="sections-container">
          <section></section>
          <section>
            <Link to="/">
              <div id="texto-container">
                <div>
                  <p>{titulo}</p>
                  <p>
                    {cliente}&ensp;-&ensp;{fecha}
                  </p>
                </div>
                <span>
                  <HiOutlineEye />
                </span>
              </div>
              <div id="video-container">
                <Fade>
                  <video class="lazy" autoPlay={true} muted loop playsinline>
                    <source src={video} type="video/mp4" />
                  </video>
                </Fade>
              </div>
            </Link>
          </section>
          <section className="mobile-section-none"></section>
          <section className="tablet-section-none"></section>
        </div>
      ) : order == 3 ? (
        <div id="sections-container">
          <section className="mobile-section-none"></section>
          <section></section>
          <section>
            <Link to="/">
              <div id="texto-container">
                <div>
                  <p>{titulo}</p>
                  <p>
                    {cliente}&ensp;-&ensp;{fecha}
                  </p>
                </div>
                <span>
                  <HiOutlineEye />
                </span>
              </div>
              <div id="video-container">
                <Fade>
                  <video class="lazy" autoPlay={true} muted loop playsinline>
                    <source src={video} type="video/mp4" />
                  </video>
                </Fade>
              </div>
            </Link>
          </section>
          <section className="tablet-section-none"></section>
        </div>
      ) : (
        order == 4 && (
          <div id="sections-container">
            <section></section>
            <section className="mobile-section-none"></section>
            <section className="tablet-section-none"></section>
            <section>
              <Link to="/">
                <div id="texto-container">
                  <div>
                    <p>{titulo}</p>
                    <p>
                      {cliente}&ensp;-&ensp;{fecha}
                    </p>
                  </div>
                  <span>
                    <HiOutlineEye />
                  </span>
                </div>
                <div id="video-container">
                  <Fade>
                    <video class="lazy" autoPlay={true} muted loop playsinline>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Fade>
                </div>
              </Link>
            </section>
          </div>
        )
      )}
    </Container>
  );
}
