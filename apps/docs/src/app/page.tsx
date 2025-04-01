import Image from "next/image";

import styles from "./page.module.css";


export default function Home() {
  return (
        <div className={styles.container}>
            <div>
                <a href="https://uway.pwog.io" target="_blank" rel="noreferrer">
                    <Image
                        className={styles.logo}
                        src='/uway-mono.svg'
                        alt="Uway logo"
                        width={144}
                        height={144}
                    />
                </a>
            </div>

            <h1 className={styles.title}>U2y ~ Components Library</h1>

            <p className={styles.text}>
                React, Web Components
            </p>
        </div>
    )
}
