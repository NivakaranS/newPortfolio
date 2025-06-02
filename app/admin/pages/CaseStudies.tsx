import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  industry: string;
  duration: string;
  teamSize: string;
  programmingLanguages: string[];
  testimonial?: string;
  testimonialAuthor?: string;
  imageLink: string;
  demoLink: string;
  githubLink: string;
}

interface CaseStudyCategory {
  _id: number;
  title: string;
  
}

const CaseStudies = () => {
  // Case studies states
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [title, setTitle] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [challenge, setChallenge] = useState<string>("");
  const [solution, setSolution] = useState<string>("");
  const [results, setResults] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
    const [demoLink, setDemoLink] = useState<string>("");
    const [githubLink, setGithubLink] = useState<string>("");
    const [imageLink, setImageLink] = useState<string>("");
  const [technologies, setTechnologies] = useState<string>("");
  const [testimonial, setTestimonial] = useState<string>("");
  const [testimonialAuthor, setTestimonialAuthor] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Category states
  const [categories, setCategories] = useState<CaseStudyCategory[]>([]);
  const [newCategoryTitle, setNewCategoryTitle] = useState<string>("");
  const [newCategoryImage, setNewCategoryImage] = useState<File | null>(null);
  const [categoryPreview, setCategoryPreview] = useState<string | null>(null);

  // UI states
  const [activeTab, setActiveTab] = useState<"create" | "manage" | "categories">("create");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const caseStudyFileInputRef = useRef<HTMLInputElement>(null);

  // Fetch initial data (simulated)
  useEffect(() => {
    
    const fetchData = async () => {
        try {
            const categories = await axios.get("https://new-portfolio-backend-roan.vercel.app/industry", {
                withCredentials: true,
            });

            setCategories(categories.data);
            console.log("Fetched categories:", categories.data);

            const caseStudies = await axios.get("https://new-portfolio-backend-roan.vercel.app/caseStudies", {
                withCredentials: true,
            });
            setCaseStudies(caseStudies.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    fetchData()
    
  }, []);

  

  

  // Handle category creation
  const handleAddCategory = () => {
    if (!newCategoryTitle.trim()) return;

    try {
        axios.post(`https://new-portfolio-backend-roan.vercel.app/industry`, {
                name: newCategoryTitle 
        }, {
            withCredentials: true,
        });
        const newCategory: CaseStudyCategory = {
            _id: Date.now(),
            title: newCategoryTitle,
        };
        setCategories([...categories, newCategory]);
        setNewCategoryTitle("");


    } catch (error) {
        console.error("Error adding category:", error);
    }

    

    
  };

  // Handle case study submission
  const handleSubmitCaseStudy = async () => {
  // Validate required fields
  if (!title || !client || !challenge || !solution || !results) {
    alert("Please fill all required fields");
    return;
  }

  setIsSubmitting(true);

  try {
    // Prepare the data payload
    const payload = {
      title,
      client,
      challenge,
      solution,
      results,
      industry,
      duration,
      teamSize,
      demoLink: demoLink || "undefined",
      githubLink: githubLink || "undefined",
      programmingLanguages: technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      testimonial: testimonial || 'undefined',
      testimonialAuthor: testimonialAuthor || 'undefined',
      imageLink: imageLink 
    };

    // Make the API call
    const response = await axios.post(
      "https://new-portfolio-backend-roan.vercel.app/caseStudies",
      payload,
      { withCredentials: true }
    );

    // Create the new case study object using server response
    const newCaseStudy: CaseStudy = {
      _id: editingId || response.data._id, // Use server-generated ID for new entries
      ...payload,
    };

    // Update state based on whether we're editing or creating
    setCaseStudies(prev => 
      editingId
        ? prev.map(cs => cs._id === editingId ? newCaseStudy : cs)
        : [...prev, newCaseStudy]
    );

    // Show success and reset form
    setSuccess(true);
    resetForm();

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);

  } catch (error) {
    console.error("Error submitting case study:", error);
    alert("Failed to submit case study. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  // Reset form
  const resetForm = () => {
    setTitle("");
    setClient("");
    setChallenge("");
    setSolution("");
    setResults("");
    setIndustry("");
    setDuration("");
    setTeamSize("");
    setTechnologies("");
    setTestimonial("");
    setTestimonialAuthor("");
    setImage(null);
    setImagePreview(null);
    setEditingId(null);
    
  };

  // Edit existing case study
  const handleEditCaseStudy = (caseStudy: CaseStudy) => {
    setTitle(caseStudy.title);
    setClient(caseStudy.client);
    setChallenge(caseStudy.challenge);
    setSolution(caseStudy.solution);
    setResults(caseStudy.results);
    setIndustry(caseStudy.industry);
    setDuration(caseStudy.duration);
    setTeamSize(caseStudy.teamSize);
    setDemoLink(caseStudy.demoLink) ;
    setGithubLink(caseStudy.githubLink);
    setTechnologies(caseStudy.programmingLanguages.join(', '));
    setTestimonial(caseStudy.testimonial || "");
    setTestimonialAuthor(caseStudy.testimonialAuthor || "");
    if (caseStudy.imageLink) setImagePreview(caseStudy.imageLink);
    setEditingId(caseStudy._id);
    setActiveTab("create");
    window.scrollTo(0, 0);
  };

  // Delete case study
  const handleDeleteCaseStudy = (id: string) => {
    

    try {
        axios.delete(`https://new-portfolio-backend-roan.vercel.app/caseStudies/${id}`, {
            withCredentials: true,
        });

        setCaseStudies(caseStudies.filter(cs => cs._id !== id));
    } catch(error) {
        console.log('Error in deleting case study', error)
    }
  };

  // Handle category deletion
  const handleDeleteCategories = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this category? Projects using it will need to be updated.")) {
      try {
        await axios.delete(`https://new-portfolio-backend-roan.vercel.app/projectCategory/${id}`);
        setCategories(categories.filter(cat => String(cat._id) !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  // Toggle category selection
  const toggleCategorySelection = (title: string) => {
    setSelectedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
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
              resetForm();
            }}
          >
            Create Case Study
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "manage" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 cursor-pointer"}`}
            onClick={() => setActiveTab("manage")}
          >
            Manage Case Studies
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "categories" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 cursor-pointer"}`}
            onClick={() => setActiveTab("categories")}
          >
            Manage Industries
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "create" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Case Study Form */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">
                  {editingId ? "Edit Case Study" : "Create New Case Study"}
                </h2>

                <div className="space-y-4">
                  

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Case study title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Name *</label>
                    <input
                      type="text"
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Client or company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select industry</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category.title}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Duration</label>
                      <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 6 months"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                      <input
                        type="text"
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 5 people"
                      />
                    </div>

                    

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Demo Link</label>
                      <input
                        type="text"
                        value={demoLink}
                        onChange={(e) => setDemoLink(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. www.google.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image Link</label>
                      <input
                        type="text"
                        value={imageLink}
                        onChange={(e) => setImageLink(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=" www.google.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Github Link</label>
                      <input
                        type="text"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. https:/github.com"
                      />
                    </div>

                    
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                    <input
                      type="text"
                      value={technologies}
                      onChange={(e) => setTechnologies(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Comma separated list (e.g. React, Node.js, MongoDB)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">The Challenge *</label>
                    <textarea
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                      placeholder="What problem was the client facing?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Our Solution *</label>
                    <textarea
                      value={solution}
                      onChange={(e) => setSolution(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                      placeholder="How did you solve the problem?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Results Achieved *</label>
                    <textarea
                      value={results}
                      onChange={(e) => setResults(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                      placeholder="Quantifiable outcomes and benefits"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Testimonial (Optional)</label>
                    <textarea
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                      placeholder="What did the client say about your work?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Testimonial Author (Optional)</label>
                    <input
                      type="text"
                      value={testimonialAuthor}
                      onChange={(e) => setTestimonialAuthor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Name and title of person giving testimonial"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="confirmation"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="confirmation" className="ml-2 block text-sm text-gray-700">
                      I confirm that I have permission to share this case study
                    </label>
                  </div>

                  <div className="pt-2 flex space-x-3">
                    <button
                      onClick={handleSubmitCaseStudy}
                      disabled={isSubmitting}
                      className={`px-4 py-2 rounded-md text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    >
                      {isSubmitting 
                        ? 'Submitting...' 
                        : editingId 
                          ? 'Update Case Study' 
                          : 'Publish Case Study'}
                    </button>
                    {editingId && (
                      <button
                        onClick={resetForm}
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
                  {title ? (
                    <>
                      
                      <h3 className="text-lg font-medium mb-2">{title}</h3>
                      {client && <p className="text-gray-600 mb-1"><strong>Client:</strong> {client}</p>}
                      {industry && <p className="text-gray-600 mb-3"><strong>Industry:</strong> {industry}</p>}
                      
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {duration && <p className="text-sm"><strong>Duration:</strong> {duration}</p>}
                        {teamSize && <p className="text-sm"><strong>Team:</strong> {teamSize}</p>}
                      </div>
                      
                      {technologies && (
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-1">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {technologies.split(',').map((tech, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {tech.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {challenge && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-1">The Challenge</h4>
                          <p className="text-sm">{challenge}</p>
                        </div>
                      )}
                      
                      {solution && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-1">Our Solution</h4>
                          <p className="text-sm">{solution}</p>
                        </div>
                      )}
                      
                      {results && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-1">Results Achieved</h4>
                          <p className="text-sm">{results}</p>
                        </div>
                      )}
                      
                      {testimonial && (
                        <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
                          <p className="italic mb-1">"{testimonial}"</p>
                          {testimonialAuthor && <p className="text-sm font-medium">— {testimonialAuthor}</p>}
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500 italic">Start typing to see a preview</p>
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === "manage" ? (
            <div className="space-y-6 min-h-[72vh]">
              <h2 className="text-xl font-semibold">Manage Case Studies</h2>
              
              {caseStudies.length === 0 ? (
                <p className="text-gray-500 italic">No case studies yet. Create your first case study.</p>
              ) : (
                <div className="space-y-4">
                  {caseStudies.map((caseStudy) => (
                    <div key={caseStudy._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start space-x-4">
                          {caseStudy.imageLink && (
                            <img 
                              src={caseStudy.imageLink} 
                              alt={caseStudy.title} 
                              className="w-24 h-16 object-cover rounded-md"
                            />
                          )}
                          <div>
                            <h3 className="font-medium">{caseStudy.title}</h3>
                            <p className="text-sm text-gray-600">{caseStudy.client}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                                {caseStudy.industry}
                              </span>
                              {caseStudy.programmingLanguages.slice(0, 2).map((tech, index) => (
                                <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                                  {tech}
                                </span>
                              ))}
                              {caseStudy.programmingLanguages.length > 2 && (
                                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                                  +{caseStudy.programmingLanguages.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3 md:mt-0">
                          <button
                            onClick={() => handleEditCaseStudy(caseStudy)}
                            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCaseStudy(caseStudy._id)}
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6 min-h-[72vh]">
              <h2 className="text-xl font-semibold">Manage Industries</h2>

              {/* Add Category Form */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3">Add New Industry</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry Name *</label>
                    <input
                      type="text"
                      value={newCategoryTitle}
                      onChange={(e) => setNewCategoryTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter industry name"
                    />
                  </div>

                  <div className="md:col-span-2">
                    
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleAddCategory}
                    disabled={!newCategoryTitle.trim()}
                    className={`px-4 py-2 rounded-md text-white ${!newCategoryTitle.trim() ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                  >
                    Add Industry
                  </button>
                </div>
              </div>

              {/* Categories List */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Existing Industries</h3>
                  {selectedCategories.length > 0 && (
                    <button
                      onClick={() => {
                        selectedCategories.forEach((title) => {
                          const category = categories.find(cat => cat.title === title);
                          if (category) {
                            handleDeleteCategories(String(category._id));
                          }
                        });
                      }}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
                    >
                      Delete Selected
                    </button>
                  )}
                </div>

                {categories.length === 0 ? (
                  <p className="text-gray-500 italic">No industries yet. Add your first industry above.</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        onClick={() => toggleCategorySelection(category.title)}
                        className={`p-3 rounded-lg border cursor-pointer flex flex-col items-center ${selectedCategories.includes(category.title) ? 'ring-2 ring-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
                      >
                        
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
      {success && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {editingId ? 'Case study updated successfully!' : 'Case study published successfully!'}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;