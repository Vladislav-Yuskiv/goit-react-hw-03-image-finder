import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';

class LoaderSpinner extends Component {
    render() {
        return (
            <div className={s.loader}>
                <Loader type="ThreeDots"
                    color="#00BFFF"
                    height={80}
                    width={80}

                />
            </div>
        );
    }

}
export default LoaderSpinner;
