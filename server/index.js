const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());

// Import the dbconnect module
const connectToDatabase = require("./dbconnect");

const bodyparser = require("body-parser");
const { ObjectId } = require("mongodb");
app.use(bodyparser.json({ limit: "50mb" }));

app.get("/api/lecturers", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const lecturerCollection = db.collection("people");
    const lecturers = await lecturerCollection
      .find({ job_type: "L" })
      .toArray();

    res.json(lecturers);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/staffs", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const staffsCollection = db.collection("people");
    const staffs = await staffsCollection.find({ job_type: "S" }).toArray();

    res.json(staffs);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/curriculum", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const staffCollection = db.collection("curriculum");
    const curriculum = await staffCollection.find({}).toArray();

    res.json(curriculum);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const staffCollection = db.collection("courses");
    const courses = await staffCollection.find({}).toArray();

    res.json(courses);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/undergraduate", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const staffCollection = db.collection("undergraduate");
    const undergraduate = await staffCollection.find({}).toArray();

    res.json(undergraduate);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/news_events", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const staffCollection = db.collection("blog");
    const news_events = await staffCollection.find({}).toArray();

    res.json(news_events);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/study_plan", async (req, res) => {
  try {
    const aggregationPipeline = [
      {
        $match: {
          cu_no: { $in: [1, 2, 3, 4, 5] },
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "semester_1",
          foreignField: "code",
          as: "semester_1_courses",
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "semester_2",
          foreignField: "code",
          as: "semester_2_courses",
        },
      },
      {
        $project: {
          cu_no: 1,
          year: 1,
          semester_1: {
            $map: {
              input: "$semester_1",
              as: "courseCode",
              in: {
                $mergeObjects: [
                  {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$semester_1_courses",
                          as: "course",
                          cond: { $eq: ["$$course.code", "$$courseCode"] },
                        },
                      },
                      0,
                    ],
                  },
                  { code: "$$courseCode" },
                ],
              },
            },
          },
          semester_2: {
            $map: {
              input: "$semester_2",
              as: "courseCode",
              in: {
                $mergeObjects: [
                  {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$semester_2_courses",
                          as: "course",
                          cond: { $eq: ["$$course.code", "$$courseCode"] },
                        },
                      },
                      0,
                    ],
                  },
                  { code: "$$courseCode" },
                ],
              },
            },
          },
        },
      },
      {
        $project: {
          "semester_1.cu_no": 0,
          "semester_2.cu_no": 0,
          "semester_1.e_overview": 0,
          "semester_2.e_overview": 0,
          "semester_1.e_type": 0,
          "semester_2.e_type": 0,
          "semester_1.type": 0,
          "semester_2.type": 0,
          "semester_1.sup_type": 0,
          "semester_2.sup_type": 0,
        },
      },
    ];

    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const researchCollection = db.collection("undergraduate");
    const research = await researchCollection.find({}).toArray();
    const result = await researchCollection
      .aggregate(aggregationPipeline)
      .toArray();

    res.json(result);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/research", async (req, res) => {
  try {
    const aggregationPipeline = [
      {
        $unwind: {
          path: "$researcher", // Unwind the researcher array
        },
      },
      {
        $lookup: {
          from: "people", // The collection that you want to join with
          localField: "researcher", // Field from the 'research' collection
          foreignField: "e_id", // Field from the 'people' collection
          as: "researcher_data", // Create a new array field 'researcher_data'
        },
      },
      {
        $unwind: {
          path: "$researcher_data", // Unwind the 'researcher_data' array
        },
      },
      {
        $group: {
          _id: "$_id", // Group by the original '_id' field of the 'research' collection
          topic: { $first: "$topic" }, // Preserve the 'topic' field
          description: { $first: "$description" }, // Include 'description' field from research
          e_description: { $first: "$e_description" },
          researchers: {
            $push: {
              e_name: "$researcher_data.e_name", // Include 'e_name' field from people
              personal_web: "$researcher_data.personal_web", // Include 'personal_web' field from people
            },
          },
          r_id: { $first: "$r_id" },
          picture: { $first: "$picture" },
          e_topic: { $first: "$e_topic" }
        },
      },
      {
        $sort: {
          topic: 1, // Sort by 'topic' field in ascending order (A-Z)
        },
      },
    ];

    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const researchCollection = db.collection("research");
    const research = await researchCollection.find({}).toArray();
    const result = await researchCollection
      .aggregate(aggregationPipeline)
      .toArray();

    res.json(result);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", async (req, res) => {
  try {
    res.send("Backend works.");
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/status", (request, response) => {
  const status = {
    status: "Running",
  };

  response.send(status);
});

app.post("/p", async (req, res) => {
  var data = req.body.fname;
  console.log(data);
  res.send("asdasdasdasd");
});

app.get("/api/peopleadmin", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const peopleCollection = db.collection("people");
    const people = await peopleCollection.find({}).toArray();

    res.json(people);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/blog", async (req, res) => {
  try {
    var {
      b_id,
      topic,
      e_topic,
      date,
      location,
      e_location,
      category,
      nflag,
      picture,
      eflag,
      status,
      undertaker
    } = req.body

    const db = await connectToDatabase();
    const blogCollection = db.collection("blog");
    if (b_id == 0) {
      const result = await blogCollection.aggregate([
        {
          $group: {
            _id: '$dummy',
            test: { $max: '$b_id' }
          }
        }
      ]).toArray();

      b_id = result[0].test + 1;

      const blog = await db.collection("blog").insertOne({
        b_id,
        topic,
        e_topic,
        date,
        location,
        e_location,
        category,
        nflag,
        picture,
        eflag,
        status,
        undertaker
      });
    } else {

    }

    res.json(blog);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/people", async (req, res) => {
  console.log("req.body:", req.body);
  try {
    const {
      title,
      e_title,
      name,
      e_name,
      tel,
      email,
      position,
      e_position,
      affiliation,
      e_affiliation,
      picture,
      job_type,
      // e_id,
      personal_web,
      research_interest,
    } = req.body;

    console.log(
      title,
      e_title,
      name,
      e_name,
      tel,
      email,
      position,
      e_position,
      affiliation,
      e_affiliation,
      picture,
      job_type,
      // e_id,
      personal_web,
      research_interest
    );

    const db = await connectToDatabase();
    const people = await db.collection("people").insertOne({
      title,
      e_title,
      name,
      e_name,
      tel,
      email,
      position,
      e_position,
      affiliation,
      e_affiliation,
      picture,
      job_type,
      e_id: 1,
      personal_web,
      research_interest,
    });

    res.json(people);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/faqs", (req, res) => {
  var answer = req.body.answer;
  var question = req.body.question;
  var f_id = req.body.f_id;
  var type = req.body.type;
  console.log(answer, question, f_id, type);
});

app.get("/api/people", async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const lecturerCollection = db.collection("people");
    const lecturers = await lecturerCollection.find({}).toArray();

    res.json(lecturers);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/people/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const lecturerCollection = db.collection("people");
    const lecturer = await lecturerCollection.findOne({
      _id: new ObjectId(id),
    });

    res.json(lecturer);
  } catch (error) {
    console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/people/update:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log(body);
  console.log(id);
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();
    const update1 = db.collection("people");
    await update1.updateOne(
      { _id: new ObjectId(id) },
      {
        title: body.title,
        e_title: body.e_title,
        name: body.name,
        e_name: body.e_name,
        affiliation: body.affiliation,
        e_affiliation: body.e_affiliation,
        picture: body.picture,
        job_type: body.job_type,
        personal_web: body.personal_web,
        research_interest: body.research_interest,
        tel: body.tel,
        email: body.email,
        position: body.position,
        e_position: body.e_position,
      }
    );

    // res.json(lecturer);
    return res.json({ success: true });
  } catch (error) {
    // console.error("Error fetching data from MongoDB Atlas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Connect to DB & Server started on port ${PORT}`);
});
