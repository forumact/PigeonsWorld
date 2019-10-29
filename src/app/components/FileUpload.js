import React, { Component } from 'react'
import { fileupload } from '../Networks';

export default class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }

  onChange(e, previewid) {
    let files = e.target.files;
    let filename = files[0].name;

    let reader = new FileReader();
    var readerBase64 = new FileReader();

    reader.readAsArrayBuffer(files[0]);

    readerBase64.readAsDataURL(files[0]);

    readerBase64.onloadend = function(e){
        var base64 = e.target.result;
        document.getElementById("preview_" + previewid).src = base64;
    };

    reader.onload = (e) => {
      var strImage = e.target.result;

      let fileobject = {
        image_data:  e.target.result,
        file_name: filename.split('.').join('-' + Date.now() + '.'),
      }
      fileupload(fileobject).then((response) => {
        if(response.data.fid[0].value){
          this.props.onChange(this.props.targetField, response.data.fid[0].value);
          console.log('fid', response.data.fid[0].value);
        }else{
          alert(JSON.stringify(response.data));
        }
      });
    }

  }


  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <img className="upload_preview" src="" alt="preview" id={`preview_${this.props.targetField}`} />
        <input className="file" type="file" name="file" onChange={(e) => this.onChange(e, this.props.targetField)} />
      </div>
    )
  }
}


