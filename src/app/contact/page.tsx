import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
        <div className={styles.contactPage}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out if you'd like to work together or if you have any questions!</p>

            <form className={styles.contactForm} action="#" method="POST">
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required rows={5}></textarea>

                </div>

                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>

            <div className={styles.socialLinks}>
                <p>Or find me on:</p>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </div>
        </div>
    );
}
