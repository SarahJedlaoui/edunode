import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { aboutUs } from './config';
import styles from './style.module.css';

function AboutUs() {
  return (
    <>
      <NavBar />
      <main className={styles.aboutUsContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Us</h1>
        </header>
        <section className={styles.aboutUsSection}>
          <p className={styles.description}>{aboutUs.description}</p>
          <div className={styles.addressContainer}>
            <div className={styles.representedBy}>Represented by: {aboutUs.representedBy}</div>
            <div className={styles.website}>Website: {aboutUs.website}</div>
            <div className={styles.businessType}>Business type: {aboutUs.businessType}</div>
            <address className={styles.address}>
              <div>{aboutUs.address}</div>
              <a href={`mailto:${aboutUs.email}`} className={styles.email}>{aboutUs.email}</a>
            </address>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default AboutUs;