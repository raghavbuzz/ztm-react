// import { Component } from 'react';
import './search-box.styles.css';

// class SearchBox extends Component {

//     render() {
//         return (
//             <input
//                 type="search"
//                 className={`search-box ${this.props.className }`}
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler} />
//         )
//     }
// }

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
        <input
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler} />
    )
}

export default SearchBox;