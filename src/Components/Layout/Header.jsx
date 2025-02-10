import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props){
    return(
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage}/>
            </div>
        </>
    );
}