import express from 'express';
// import { append } from 'express/lib/response';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Project from '../models/projectModel.js';


// description: Fetch all projects
// route Get /api/projects
// Public
router.get('/', asyncHandler(async (req, res) => {
    const projects = await Project.find({})
    res.json(projects);
}))

// description: Fetch single project
// route Get /api/projects/:id
// Public

router.get('/:id', asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)
    if (project) {
        res.json(project);
    } else {
        res.status(404)
        throw new Error('project not found')
    }
}))


export default router;