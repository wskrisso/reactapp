import styles from './ListForm.module.scss'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ListForm = props => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
     };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>Title:</label><TextInput type="text" onChange={e => setTitle(e.target.value)} value={title}></TextInput>
            <label>Description:</label><TextInput type="text" onChange={e => setDescription(e.target.value)} value={description}></TextInput>
            <Button>Add list</Button> 
        </form>
	);
};

export default ListForm;