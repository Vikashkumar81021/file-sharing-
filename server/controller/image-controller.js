import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  try {
    // Check if file is uploaded
    if (!req.file || !req.file.path) {
      return res
        .status(400)
        .json({ error: "No file uploaded or invalid file." });
    }

    const fileObj = {
      path: req.file.path,
      name: req.file.originalname,
    };

    // Create file object in the database
    const file = await File.create(fileObj);

    // Check if file creation was successful
    if (!file || !file._id) {
      return res.status(500).json({ error: "Failed to create file." });
    }

    // Respond with the URL of the uploaded file
    const fileUrl = `http://localhost:3000/file/${file._id}`;
    res.status(200).json({ path: fileUrl });
  } catch (error) {
    console.error("Error uploading file:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getImage = async (req,res) => {
  try {
    const file = await File.findById(req.params.id);
    file.downloadContent++
    await file.save()
    res.download(file.path,file.name)
  } catch (error) {
    console.log(error);
    return res.status(500).json({error:error.message})
  }
};
