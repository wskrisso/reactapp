import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/store';


const Favorite = () => {
    const favoriteCards = useSelector(getFilteredFavoriteCards);
    
    if (favoriteCards.length === 0) {
        return ( 
            <div>
                <PageTitle>Favorite</PageTitle>
                <p className={styles.nocard}>No cards…</p>
            </div>
        );
      };

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.cardsList}>
                <ul className={styles.cards}>
                    { favoriteCards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
                </ul>
            </article>
        </div>
    );
};

export default Favorite;