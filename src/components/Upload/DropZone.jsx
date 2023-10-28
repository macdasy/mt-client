import React, {useEffect, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import CancelIcon from '@mui/icons-material/Cancel';

const baseStyle = {
    flex: 1,
    minWidth:'80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgb(157 233 150)',
    borderStyle: 'dashed',
    backgroundColor: 'rgb(85 191 157 / 13%)',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const selStyle = {
    minWidth:'90%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5%',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgb(0 0 0 / 31%)',
    borderStyle: 'dashed',
    backgroundColor: '#d6d6d6',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#55BF9D'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {


  const [ text, setText ] = useState('One at a Time!');
  const [ selected, isSelected ] = useState(false);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {"application/pdf": [],".xls": []}});

  const style = useMemo(() => ({
    ...(!selected ? baseStyle : selStyle),
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
    selected
  ]);

  const clearSelection = ()=>{
    acceptedFiles.length = 0;
    files.length = 0;
    isSelected(false);
    setText('One at a Time!')
    console.log(acceptedFiles);
  }

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(()=>{
    if( files.length >= 1 ) setText('Like that!')
    else setText('One at a Time!')
  }, [text, files])

  useEffect(()=>{
    if(files.length>=1) {
        isSelected(true);
        props.fileSelected(true);
        props.handleFile(acceptedFiles);
    }

    else {
        isSelected(false)
        props.fileSelected(false);
    } 
  }, [selected, files, props, acceptedFiles])

  return (
    <div className="container" style={{minWidth:'80%'}}>
        <div style={{textAlign:'left', width:'100%', marginBottom:'5%'}}>
            <h5 style={{margin:0, fontWeight:600}}> Select Your Files here </h5>
            <small style={{}}> {text} </small>
        </div>

      <div {...getRootProps({style})}>
        <input {...getInputProps()} name='pdfFile'/>
        <p style={{textAlign:'center', opacity:0.7}}> 
            { !selected ? "Drag 'n' drop some files here, or click to select files" : "Wrong File? Reselect File!" } 
        </p>
      </div>

      <aside style={{textAlign:'left', width:'100%', marginTop:'5%', borderTop:'1px solid #0000002c', paddingTop:'5%'}}>
        <h5 style={{margin:0, display:'flex', width:'100%', justifyContent:'space-between'}}> 
          Files 
          { acceptedFiles.length!==0 && <CancelIcon sx={{fontSize:20, cursor:'pointer'}} onClick={clearSelection}/> }
        </h5>
        { files.length >= 1 ? <ul>{files}</ul> : <small style={{textAlign:'center',margin:0, opacity:0.8}}>No file Selected</small> }
      </aside>
    </div>
  );
}

export default StyledDropzone