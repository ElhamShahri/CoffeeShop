import styles from './banner.module.css';
const Banner = (props) => {
    return (
        <div
         className={styles.container}
         >
            <h1 
            className={styles.title}
            >
                <span
                 className={styles.title1}
                 >resturant</span>
                <span 
                className={styles.title2}
                >Connoisseur</span>
            </h1>
            <p
             className={styles.subtitle}
             >Discover your local resturant</p>
            <button
             className={styles.button}
             >{props.buttonText}</button>
        </div>
    )
};

export default Banner;