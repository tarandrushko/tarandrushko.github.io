import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import logo from "./img/logo1.jpg";

function App() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      const context = ref.current.getContext("2d");
      if (!context) {
        return;
      }
      const grd = context.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, "#dbddbb");
      grd.addColorStop(0.2, "#88b884");
      grd.addColorStop(0.5, "#d5d88d");
      grd.addColorStop(1, "#6ba587");
      context.fillStyle = grd;
      context.fillRect(0, 0, 100, 100);
    }
  }, []);

  useEffect(() => {
    btnRef.current?.click();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div>TELEGRAM TEST</div>
        <canvas
          ref={ref}
          id="tgme_background"
          className={styles.default}
          width="50"
          height="50"
        />
        <div className={styles.pattern}></div>
      </div>
      <div className={styles.teleBody}>
        <div className={styles.page}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.title} dir="auto">
            <span dir="auto">Spectre 👓</span>
          </div>
          <div className={styles.description} dir="auto">
            Structured crypto futures trading. Backed by data, built on
            experience ✅
          </div>
          <div className={styles.action}>
            <a
              ref={btnRef}
              className={styles.button}
              href="tg://join?invite=CXzbhibPqA9kYmZi"
            >
              Join Channel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
