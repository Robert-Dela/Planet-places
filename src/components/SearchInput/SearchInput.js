import styles from "./SearchInput.module.css"
import { ImSearch } from "react-icons/im";


const { wrapper, input,

  }= styles

const SearchInput = ({...rest}) => {
    return (
        <div className={wrapper}>
            <ImSearch/>
            <input className={input} {...rest}/>
        </div>

    );
};

export default SearchInput