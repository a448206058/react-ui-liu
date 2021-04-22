import React from 'react';
import axios from 'axios';
var App = function () {
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            });
        }
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }))));
};
export default App;
