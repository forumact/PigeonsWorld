import React, { Component } from 'react';
import axios from "axios";

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0
    }
  }


  // checkMimeType = (event) => {
  //   //getting file object
  //   let files = event.target.files
  //   //define message container
  //   let err = []
  //   // list allow mime type
  //   const types = ['image/png', 'image/jpeg', 'image/gif']
  //   // loop access array
  //   for (var x = 0; x < files.length; x++) {
  //     // compare file type find doesn't matach
  //     if (types.every(type => files[x].type !== type)) {
  //       // create error message and assign to container   
  //       err[x] = files[x].type + ' is not a supported format\n';
  //     }
  //   };
  //   for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
  //     // discard selected file
  //     //toast.error(err[z])
  //     console.log(err[z]);
  //     event.target.value = null
  //   }
  //   return true;
  // }


  maxSelectFile = (event) => {
    let files = event.target.files
    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      event.target.value = null
      //toast.warn(msg)
      console.log(msg);
      return false;
    }
    return true;
  }

  checkFileSize = (event) => {
    let files = event.target.files
    let size = 2000000
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + 'is too large, please pick a smaller file\n';
      }
    };
    for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
      // discard selected file
      //toast.error(err[z])
      console.log(err[z]);
      event.target.value = null
    }
    return true;
  }

  onChangeHandler = event => {
    console.log('in');
    var files = event.target.files
    //if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)) {
    // if return true allow to setState
    this.setState({
      selectedFile: files,
      loaded: 0
    })
    //}
  }

  onClickHandler = () => {
    const data = new FormData();
    console.log(this.state);
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    console.log(data);
    axios.post("http://localhost:8000/upload", data, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
      },
    })
      .then(res => { // then print response status
        //toast.success('upload success')
      })
      .catch(err => { // then print response status
        //toast.error('upload fail')
      })
  }

  render() {
    return (
      <div>
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" className="form-control" multiple onChange={this.onChangeHandler} />
          <button type="button" className="button mid-short dark-light" onClick={this.onClickHandler}>Upload Image...</button>
        </div>
      </div>
    );
  }
}
