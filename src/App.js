import { GitHub, Instagram, LinkedIn, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Image = () => {
  return (
    <Box sx={{ width: 490, height: 901, position: "relative" }}>
      <img
        style={{
          width: 490,
          height: 901,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        alt="Image"
        src="https://via.placeholder.com/490x901"
      />
    </Box>
  );
};

const App = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding: 4 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Hello, I'm
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontWeight: "bold", color: "orange" }}
        >
          Full Stack D|
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          I am an aspiring full-stack developer who enjoys building and
          designing websites and is excited to begin my career in web
          development.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Hire Me
          </Button>
          <Button variant="outlined" color="primary">
            Download CV
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardMedia
              component="img"
              height="300"
              image="https://via.placeholder.com/300"
              alt="Profile"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component="h3" sx={{ fontWeight: "bold" }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              As an entry-level professional, I bring strong motivation and
              proficiency in Python, JavaScript, SQL, CSS, and Agile techniques.
              I am eager to apply my skills in full-stack web development and
              Agile methodologies within an IT services and consulting company.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <strong>Languages & Frameworks:</strong> Python, JavaScript, SQL,
              HTML, CSS
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <strong>Tools & Technologies:</strong> Git, Docker, Jenkins
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <strong>Education:</strong> B.Sc. in Software Engineering, XYZ
              University
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: "bold" }}>
          My Projects
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Current
          </Button>
          <Button variant="outlined" color="primary" sx={{ marginRight: 2 }}>
            All
          </Button>
          <Button variant="outlined" color="primary">
            Web
          </Button>
        </Box>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {[
            {
              title: "In Progress",
              description: "Some tasks to be updated",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Devfolio",
              description:
                "Portfolio website built with React, JavaScript, and Tailwind CSS",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Document Verification System",
              description:
                "System for secure, decentralized document verification",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Face ID based Voting System",
              description:
                "Project for efficient and scalable image recognition",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Online IDE",
              description: "Collaborative code editor for students",
              image: "https://via.placeholder.com/150",
            },
            {
              title: "Rogue Chatbot",
              description: "AI-driven chatbot with engaging dialogue elements",
              image: "https://via.placeholder.com/150",
            },
          ].map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h4">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h3" sx={{ fontWeight: "bold" }}>
          Let's Connect
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <IconButton color="primary">
            <GitHub />
          </IconButton>
          <IconButton color="primary">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary">
            <Instagram />
          </IconButton>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" endIcon={<Send />}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};