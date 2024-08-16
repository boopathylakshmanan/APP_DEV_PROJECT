// src/pages/ProjectManagement.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { TextField, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import './ProjectManagement.css';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const addProject = () => {
    if (isEditing) {
      setProjects(projects.map(project =>
        project.id === currentProjectId
          ? { ...project, name: projectName, description: projectDescription }
          : project
      ));
      setIsEditing(false);
      setCurrentProjectId(null);
    } else {
      const newProject = {
        id: projects.length + 1,
        name: projectName,
        description: projectDescription,
        completed: false,
      };
      setProjects([...projects, newProject]);
    }
    setProjectName('');
    setProjectDescription('');
  };

  const editProject = (id) => {
    const project = projects.find(project => project.id === id);
    setProjectName(project.name);
    setProjectDescription(project.description);
    setIsEditing(true);
    setCurrentProjectId(id);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const toggleProjectStatus = (id) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, completed: !project.completed } : project
    ));
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Project Management</h1>
          <Form>
            <Form.Group className="mb-3">
              <TextField
                label="Project Name"
                variant="outlined"
                fullWidth
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <TextField
                label="Project Description"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>
            <Button onClick={addProject} variant="primary">
              {isEditing ? 'Update Project' : 'Add Project'}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {projects.map(project => (
          <Col key={project.id} md={6} className="mb-4">
            <Card className={`project-card ${project.completed ? 'completed' : ''}`}>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="project-actions">
                  <IconButton
                    onClick={() => toggleProjectStatus(project.id)}
                    color={project.completed ? 'success' : 'default'}
                  >
                    {project.completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                  </IconButton>
                  <IconButton onClick={() => editProject(project.id)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteProject(project.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectManagement;