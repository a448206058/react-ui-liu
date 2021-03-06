import React from 'react'
import axios from 'axios'
const App: React.FC = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
        console.log(resp)
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" name="myFile" onChange={handleFileChange}/>
      </header>
    </div>
  );
}


export default App;