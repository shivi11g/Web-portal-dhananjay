const fs = require("fs");
const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const cors = require("cors");
require("./Mbaconfig");
const Contact = require("./modules/mba-modules/contact");
const Registeration = require("./modules/mba-modules/SignUp");
const TestScore = require("./modules/mba-modules/testScore");
const Experience = require("./modules/mba-modules/experience");
const Rewards = require("./modules/mba-modules/rewards");
const Education = require("./modules/mba-modules/education");
const BasicInfo = require("./modules/mba-modules/basicInfo");
const AdditionalInfo = require("./modules/mba-modules/additionalInfo");
const app = express();
app.use(fileUpload());
app.use(cors({origin: "*",}));
app.use(express.json());

let folderName;

app.post("/register", (req, res) => {
  const { fullName, password, emailAddress, metaData, id } = req.body;
  const hash = bcrypt.hashSync(password, salt);
  Registeration.findOne({ emailAddress: emailAddress }, function (err, user) {
    if (err) console.log(err);
    else if (user) {
      res.send({
        response: "user Exists",
      });
    } else {
      const NewUser = new Registeration({
        fullName: fullName,
        password: hash,
        emailAddress: emailAddress,
      });
      NewUser.save();
      folderName = id;
      res.send({
        user: folderName,
        response: "unique user",
      });
    }
  });
});

app.post("/signin", (req, res) => {
  const { password, emailAddress, metaData, id } = req.body;
  Registeration.findOne({ emailAddress: emailAddress }, function (err, user) {
    if (err) console.log(err);
    else if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          folderName = id;
          res.send({
            response: "user exists",
          });
        } else {
          res.send({
            response: "user doesnt exist",
          });
        }
      });
    } else {
      res.send({
        response: "user doesnt exist",
      });
    }
  });
});

app.post("/mba/contact-collection", async (req, res) => {
  const NewContact = new Contact(req.body);
  const data = await NewContact.save();
  res.send(data);
});

app.put("/mba/contact-collection", (req, res) => {
  Contact.findOneAndUpdate(
    { email: req.body.email },
    req.body,
    function (err, user) {
      if (err) console.log(err);
      else {
        Contact.find({ email: req.body.email }, function (err, user) {
          if (err) console.log(err);
          else res.send(user);
        });
      }
    }
  );
});

app.post("/mba/test-score", async (req, res) => {
  const NewTestScore = new TestScore(req.body);
  const data = await NewTestScore.save();
  res.status(200).send(data);
});

app.post("/mba/uploads/test-score", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (!fs.existsSync(`../uploads/mba/testScore/IIITL-${folderName}`)) {
      fs.mkdirSync(`../uploads/mba/testScore/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/testScore/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/experience", async (req, res) => {
  const NewExperience = new Experience(req.body);
  const data = await NewExperience.save();
  res.send(data);
});

app.post("/mba/rewards", async (req, res) => {
  const NewRewards = new Rewards(req.body);
  const data = await NewRewards.save();
  res.send(data);
});

app.post("/mba/education", async (req, res) => {
  const NewEducation = new Education(req.body);
  const data = await NewEducation.save();
  res.send(data);
});

app.post("/mba/uploads/sec-education", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (
      !fs.existsSync(`../uploads/mba/Education/secondary/IIITL-${folderName}`)
    ) {
      fs.mkdirSync(`../uploads/mba/Education/secondary/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/Education/secondary/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/uploads/high-education", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (!fs.existsSync(`../uploads/mba/Education/higher/IIITL-${folderName}`)) {
      fs.mkdirSync(`../uploads/mba/Education/higher/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/Education/higher/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/uploads/master-education", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (!fs.existsSync(`../uploads/mba/Education/Master/IIITL-${folderName}`)) {
      fs.mkdirSync(`../uploads/mba/Education/Master/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/Education/Master/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/uploads/diploma-education", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (
      !fs.existsSync(`../uploads/mba/Education/Diploma/IIITL-${folderName}`)
    ) {
      fs.mkdirSync(`../uploads/mba/Education/Diploma/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/Education/Diploma/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/uploads/bachlor-education", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (
      !fs.existsSync(`../uploads/mba/Education/Bachlor/IIITL-${folderName}`)
    ) {
      fs.mkdirSync(`../uploads/mba/Education/Bachlor/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/Education/Bachlor/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/basicInfo", async (req, res) => {
  const NewBasicInfo = new BasicInfo(req.body);
  const data = await NewBasicInfo.save();
  res.send(data);
});

app.post("/mba/uploads/basicInfo/photo", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (!fs.existsSync(`../uploads/mba/BasicInfo/Photo/IIITL-${folderName}`)) {
      fs.mkdirSync(`../uploads/mba/BasicInfo/Photo/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/BasicInfo/Photo/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/uploads/basicInfo/certificate", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (
      !fs.existsSync(`../uploads/mba/BasicInfo/certificate/IIITL-${folderName}`)
    ) {
      fs.mkdirSync(`../uploads/mba/BasicInfo/certificate/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/BasicInfo/certificate/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      const invoice = {
        items: [
          {
            name: "Name",
            email: "Email",
            degree: "Degree",
          },
          {
            name: "Name",
            email: "Email",
            degree: "MBA",
          },
        ],
      };

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.post("/mba/additionalInfo", async (req, res) => {
  const NewAdditionalInfo = new AdditionalInfo(req.body);
  const data = await NewAdditionalInfo.save();
  res.send(data);
});

app.post("/mba/uploads/additionalInfo", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  try {
    if (!fs.existsSync(`../uploads/mba/AdditionalInfo/IIITL-${folderName}`)) {
      fs.mkdirSync(`../uploads/mba/AdditionalInfo/IIITL-${folderName}`);
    }
  } catch (err) {
    console.error(err);
  }

  file.mv(
    `../uploads/mba/AdditionalInfo/IIITL-${folderName}/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        filePath: `/uploads/${file.name}`,
        folderName,
      });
    }
  );
});

app.listen(5000);
// export default defineConfig({
//   plugins: [react() tsconfigPaths()],
//   server: {
//     port: 8000
//   }
// });
// fetch('localhost:3000/users')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json()
//     }).catch(err=>{
//     console.log(err)
// })

