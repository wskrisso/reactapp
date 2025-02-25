import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchstring(searchQuery));
    }
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..."
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} />
            <Button>
             <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;