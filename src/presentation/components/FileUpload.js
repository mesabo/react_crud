import React from 'react';
import {useDispatch} from 'react-redux';
import {uploadFile, downloadFile} from '../../infrastructure/store/actions/userActions';
import styles from '../../styles/FileUpload.module.css';

const FileUpload = () => {
    const dispatch = useDispatch();

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(uploadFile(file));
        }
    };

    const handleDownload = () => {
        dispatch(downloadFile());
    };

    return (
        <div className={styles.container}>
            <input type="file" onChange={handleUpload}/>
            <button className={styles.button} onClick={handleDownload}>Download Users CSV</button>
        </div>
    );
};

export default FileUpload;
