import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/Api";
import "./App.css";

function App() {
  const fileRef = useRef();
  const [file, setFile] = useState();
  const [result,setResult]=useState()
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
    const getImage = async () => {
      
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path)
      }
    };
    getImage();
  }, [file]);

  const handleClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="container">
      <img src={logo} alt="this is image" />
      <div className="wraper">
        <h1>ShareBox</h1>
        <p>upload and share the download</p>
        <input
          type="file"
          ref={fileRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={() => handleClick()}>Upload</button>

        <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
