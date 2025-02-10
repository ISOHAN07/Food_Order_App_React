import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpg';

export default function Header(props){
    return(
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage}/>
            </div>
        </>
    );
}