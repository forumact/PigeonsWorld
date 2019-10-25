import React, { Component } from 'react'
import { fileupload } from '../Networks';

export default class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      //console.log("image data", e.target.result);
      var strImage = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
      fileupload(strImage).then((response) => {
        console.log(response.data.fid[0].value);
        document.getElementById("pic1").value = response.data.fid[0].value;
      });
    }
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    )
  }
}


