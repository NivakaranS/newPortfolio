import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface ProjectCategory {
  id: number;
  title: string;
  icon?: string;
}

const MiniProjects = () => {
  // Project states
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [technologies, setTechnologies] = useState<string>("");
  const [projectCategory, setProjectCategory] = useState<string>("");
  const [githubUrl, setGithubUrl] = useState<string>("");
  const [demoUrl, setDemoUrl] = useState<string>("");
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [projectImagePreview, setProjectImagePreview] = useState<string | null>(null);
  const [projectSuccess, setProjectSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectStatus, setProjectStatus] = useState<'completed' | 'in-progress' | 'planned'>('completed');

  // Category states
  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>([]);
  const [newCategoryTitle, setNewCategoryTitle] = useState<string>("");
  const [newCategoryIcon, setNewCategoryIcon] = useState<string>("");

  // UI states
  const [activeTab, setActiveTab] = useState<"create" | "manage" | "categories">("create");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch initial data (simulated)
  useEffect(() => {
    // Simulate fetching projects
    const mockProjects: Project[] = [
      {
        id: "1",
        title: "Task Management App",
        description: "A React application for managing daily tasks with drag-and-drop functionality",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        category: "Web Application",
        githubUrl: "https://github.com/example/task-manager",
        demoUrl: "https://task-manager-demo.example.com",
        imageUrl: "https://via.placeholder.com/300x200?text=Task+App",
        status: "completed"
      },
      {
        id: "2",
        title: "Weather Dashboard",
        description: "Real-time weather information dashboard using OpenWeather API",
        technologies: ["JavaScript", "API Integration", "CSS"],
        category: "Web Application",
        githubUrl: "https://github.com/example/weather-dashboard",
        demoUrl: "https://weather-demo.example.com",
        imageUrl: "https://via.placeholder.com/300x200?text=Weather+App",
        status: "completed"
      },
      {
        id: "3",
        title: "AI Image Generator",
        description: "Generating images using Stable Diffusion API",
        technologies: ["Python", "AI", "Flask"],
        category: "AI/ML",
        githubUrl: "https://github.com/example/ai-image-gen",
        status: "in-progress"
      }
    ];

    // Simulate fetching categories
    const mockCategories: ProjectCategory[] = [
      { id: 1, title: "Web Application", icon: "🌐" },
      { id: 2, title: "Mobile App", icon: "📱" },
      { id: 3, title: "AI/ML", icon: "🤖" },
      { id: 4, title: "Data Visualization", icon: "📊" },
      { id: 5, title: "Game Development", icon: "🎮" }
    ];

    setProjects(mockProjects);
    setProjectCategories(mockCategories);
  }, []);

  // Handle project image upload
  const handleProjectImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProjectImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle category creation
  const handleAddCategory = () => {
    if (!newCategoryTitle.trim()) return;

    const newCategory: ProjectCategory = {
      id: Date.now(),
      title: newCategoryTitle,
      icon: newCategoryIcon || undefined
    };

    setProjectCategories([...projectCategories, newCategory]);
    setNewCategoryTitle("");
    setNewCategoryIcon("");
  };

  // Handle project submission
  const handleSubmitProject = () => {
    if (!projectTitle || !projectDescription || !projectCategory) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const techArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech);
      
      const newProject: Project = {
        id: editingProjectId || Date.now().toString(),
        title: projectTitle,
        description: projectDescription,
        technologies: techArray,
        category: projectCategory,
        githubUrl: githubUrl || undefined,
        demoUrl: demoUrl || undefined,
        imageUrl: projectImagePreview || "https://via.placeholder.com/300x200?text=Project+Image",
        status: projectStatus
      };

      if (editingProjectId) {
        // Update existing project
        setProjects(projects.map(project => 
          project.id === editingProjectId ? newProject : project
        ));
      } else {
        // Add new project
        setProjects([...projects, newProject]);
      }

      setProjectSuccess(true);
      setIsSubmitting(false);

      // Reset form
      resetProjectForm();

      // Hide success message after 3 seconds
      setTimeout(() => setProjectSuccess(false), 3000);
    }, 1500);
  };

  // Reset project form
  const resetProjectForm = () => {
    setProjectTitle("");
    setProjectDescription("");
    setTechnologies("");
    setProjectCategory("");
    setGithubUrl("");
    setDemoUrl("");
    setProjectImage(null);
    setProjectImagePreview(null);
    setEditingProjectId(null);
    setProjectStatus("completed");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Edit existing project
  const handleEditProject = (project: Project) => {
    setProjectTitle(project.title);
    setProjectDescription(project.description);
    setTechnologies(project.technologies.join(', '));
    setProjectCategory(project.category);
    setGithubUrl(project.githubUrl || "");
    setDemoUrl(project.demoUrl || "");
    if (project.imageUrl) setProjectImagePreview(project.imageUrl);
    setEditingProjectId(project.id);
    setProjectStatus(project.status);
    setActiveTab("create");
    window.scrollTo(0, 0);
  };

  // Delete project
  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Handle category deletion
  const handleDeleteCategories = () => {
    if (selectedCategories.length === 0) return;

    const updatedCategories = projectCategories.filter(
      category => !selectedCategories.includes(category.title)
    );

    setProjectCategories(updatedCategories);
    setSelectedCategories([]);
  };

  // Toggle category selection
  const toggleCategorySelection = (title: string) => {
    setSelectedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  // Get status color
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full text-black bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "create" ? "text-blue-600 border-b-2 border-blue-600" : "cursor-pointer text-gray-600"}`}
            onClick={() => {
              setActiveTab("create");
              resetProjectForm();
            }}
          >
            Create Project
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "manage" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 cursor-pointer"}`}
            onClick={() => setActiveTab("manage")}
          >
            Manage Projects
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "categories" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 cursor-pointer"}`}
            onClick={() => setActiveTab("categories")}
          >
            Manage Categories
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "create" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Project Form */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">
                  {editingProjectId ? "Edit Project" : "Create New Project"}
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                    <div className="mt-1 flex items-center">
                      <div className="w-full">
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              {projectImagePreview ? (
                                <img
                                  src={projectImagePreview}
                                  alt="Preview"
                                  className="h-40 object-contain"
                                />
                              ) : (
                                <>
                                  <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 5MB)</p>
                                </>
                              )}
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              className="hidden"
                              onChange={handleProjectImageUpload}
                              accept="image/*"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter project title"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                      <select
                        value={projectCategory}
                        onChange={(e) => setProjectCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a category</option>
                        {projectCategories.map((category) => (
                          <option key={category.id} value={category.title}>
                            {category.icon} {category.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                      <select
                        value={projectStatus}
                        onChange={(e) => setProjectStatus(e.target.value as Project['status'])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="completed">Completed</option>
                        <option value="in-progress">In Progress</option>
                        <option value="planned">Planned</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies</label>
                    <input
                      type="text"
                      value={technologies}
                      onChange={(e) => setTechnologies(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Comma separated list (React, Node.js, MongoDB)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://github.com/your-username/project-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Demo URL</label>
                    <input
                      type="url"
                      value={demoUrl}
                      onChange={(e) => setDemoUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://your-project-demo.example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                    <textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
                      placeholder="Describe your project, its features, and purpose..."
                    />
                  </div>

                  <div className="pt-2 flex space-x-3">
                    <button
                      onClick={handleSubmitProject}
                      disabled={isSubmitting}
                      className={`px-4 py-2 rounded-md text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                      {isSubmitting 
                        ? 'Submitting...' 
                        : editingProjectId 
                          ? 'Update Project' 
                          : 'Add Project'}
                    </button>
                    {editingProjectId && (
                      <button
                        onClick={resetProjectForm}
                        className="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Preview Section */}
              <div className="hidden lg:block">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {projectTitle ? (
                    <>
                      {projectImagePreview && (
                        <img 
                          src={projectImagePreview} 
                          alt="Project preview" 
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium">{projectTitle}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(projectStatus)}`}>
                          {projectStatus.replace('-', ' ')}
                        </span>
                      </div>
                      
                      {projectCategory && (
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-3">
                          {projectCategory}
                        </span>
                      )}
                      
                      {technologies && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {technologies.split(',').map(tech => (
                            <span key={tech} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {projectDescription && <p className="text-sm text-gray-700 mb-4">{projectDescription}</p>}
                      
                      <div className="flex space-x-2">
                        {githubUrl && (
                          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                            GitHub
                          </a>
                        )}
                        {demoUrl && (
                          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 italic">Start typing to see a preview</p>
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === "manage" ? (
            <div className="space-y-6 min-h-[70.5vh]">
              <h2 className="text-xl font-semibold">Manage Projects</h2>
              
              {projects.length === 0 ? (
                <p className="text-gray-500 italic">No projects yet. Create your first project.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      {project.imageUrl && (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{project.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(project.status)}`}>
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>
                        
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded mt-1 mb-2">
                          {project.category}
                        </span>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map(tech => (
                            <span key={tech} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                GitHub
                              </a>
                            )}
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                                Demo
                              </a>
                            )}
                          </div>
                          
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditProject(project)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6 min-h-[70.5vh]">
              <h2 className="text-xl font-semibold">Manage Categories</h2>

              {/* Add Category Form */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3">Add New Category</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category Name *</label>
                    <input
                      type="text"
                      value={newCategoryTitle}
                      onChange={(e) => setNewCategoryTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter category name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Emoji)</label>
                    <input
                      type="text"
                      value={newCategoryIcon}
                      onChange={(e) => setNewCategoryIcon(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Optional emoji icon"
                      maxLength={2}
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={handleAddCategory}
                      disabled={!newCategoryTitle.trim()}
                      className={`px-4 py-2 rounded-md text-white ${!newCategoryTitle.trim() ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories List */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Existing Categories</h3>
                  {selectedCategories.length > 0 && (
                    <button
                      onClick={handleDeleteCategories}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
                    >
                      Delete Selected
                    </button>
                  )}
                </div>

                {projectCategories.length === 0 ? (
                  <p className="text-gray-500 italic">No categories yet. Add your first category above.</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {projectCategories.map((category) => (
                      <div
                        key={category.id}
                        onClick={() => toggleCategorySelection(category.title)}
                        className={`p-3 rounded-lg border cursor-pointer flex flex-col items-center ${selectedCategories.includes(category.title) ? 'ring-2 ring-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
                      >
                        {category.icon && (
                          <span className="text-2xl mb-2">{category.icon}</span>
                        )}
                        <span className="text-sm font-medium text-center">{category.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Notification */}
      {projectSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {editingProjectId ? 'Project updated successfully!' : 'Project added successfully!'}
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniProjects;