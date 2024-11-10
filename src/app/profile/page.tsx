// pages/resume.js
import React from 'react';
import Image from 'next/image';
import styles from './profile.module.css'; 

const Profile = () => {
  return (<div className={styles.container}>
    
    <div className={styles.profileContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.imageContainer}>
          <Image src="/profileai.jpg" alt="Profile Picture" width={350} height={350} className={styles.profileImage} />
        </div>
        <div className={styles.headerText}>
          <h1>FAIZA</h1>
          <p>UI/UX Developer | Aspiring AI Agent</p>
          <p>Email: faiza@example.com | Phone: +123456789</p>
        </div>
      </header>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li>UI/UX Design</li>
          <li>HTML, CSS, TypeScript</li>
          <li>React, Next.js</li>
          <li>Figma, canva</li>
          <li>learning Artificial Intelligence</li>
          <li>Art designing</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>Master’s in Islamiat</h3>
          <p>Kanzul Madaris Board | 2020 - present</p>
        </div>
        <div className={styles.educationItem}>
          <h3>Bachelor’s in Commerce</h3>
          <p>University of Karachi </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.experienceItem}>
          <h3>UI/UX Aspiring Developer </h3>
          <p>GIAIC | FEB 2024 - Present</p>
          <ul>
            <li>Worked on designing user interfaces for websites</li>
            <li>Collaborated with developers to ensure a seamless user experience</li>
            <li>Clone a website using Figma Template</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 F A I Z A | All Rights Reserved</p>
      </footer>
    </div>
    </div>
  );
};

export default Profile;
