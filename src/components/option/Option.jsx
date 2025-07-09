import styles from './Option.module.css';

const Option = ({ num, id }) => {
    return (
        <button className={styles.optionButton} id={id}>
            opção {num}
        </button>
    );
};

export default Option;


