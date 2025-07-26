import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
const Form = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        branch: '',
        reg: '',
        phone: '',
        priority: '',
        reason: '',
        domain: '',
        bestProject: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.branch) newErrors.branch = 'Please select your branch'
        if (!formData.reg.trim()) {
            newErrors.reg = 'Registration number is required'
        } else if (!/^\d+$/.test(formData.reg)) {
            newErrors.reg = 'Registration number must contain only numbers'
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required'
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits'
        }
        if (!formData.priority.trim()) {
            newErrors.priority = 'Priority is required'
        } else if (!/^[1-5]$/.test(formData.priority)) {
            newErrors.priority = 'Priority must be between 1-5'
        }
        if (!formData.reason.trim()) {
            newErrors.reason = 'Please tell us why you want to join'
        } else if (formData.reason.trim().length < 20) {
            newErrors.reason = 'Please provide at least 20 characters'
        }
        if (!formData.domain.trim()) newErrors.domain = 'Domain is required'
        if (!formData.bestProject.trim()) {
            newErrors.bestProject = 'Project link is required'
        } else if (!/^https?:\/\/.+/.test(formData.bestProject)) {
            newErrors.bestProject = 'Please enter a valid URL'
        }

        return newErrors
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async () => {
        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        alert('Form submitted successfully!')
        navigate("/");

    }

    return (
        <div className='formBody min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4'>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link to={"/"} >
                        <button className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-md border border-gray-200 text-gray-700 hover:text-gray-900 hover:shadow-lg transition-all duration-200 group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span className="text-sm md:text-base font-semibold">Back</span>
                        </button>
                    </Link>

                </div>

                <div className="mb-12">
                    <h1 className="font-secondary text-[2.2rem] xs:text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7rem] text-[#4285F4] text-center mt-0 pt-8 leading-[1.05] select-none break-words font-black">
                        FILL YOUR DATA
                    </h1>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#4285F4] via-[#0F9D58] to-[#EA4335] h-2"></div>

                    <div className="p-8 md:p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">College Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your college email"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.branch ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                >
                                    <option value="">Select Your Branch</option>
                                    <option value="COMP-A">Computer Engineering - A</option>
                                    <option value="COMP-B">Computer Engineering - B</option>
                                    <option value="IT-A">Information Technology - A</option>
                                    <option value="IT-B">Information Technology - B</option>
                                    <option value="ENTC-A">Electronics & Telecom - A</option>
                                    <option value="ENTC-B">Electronics & Telecom - B</option>
                                    <option value="ARE">Automobile Engineering</option>
                                    <option value="MECH">Mechanical Engineering</option>
                                </select>
                                {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                                <input
                                    type="text"
                                    name="reg"
                                    value={formData.reg}
                                    onChange={handleInputChange}
                                    placeholder="Enter registration number"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.reg ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.reg && <p className="text-red-500 text-sm mt-1">{errors.reg}</p>}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter 10-digit phone number"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Priority (1-5)</label>
                                <input
                                    type="number"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                    placeholder="Rate GDSC priority (1-5)"
                                    min="1"
                                    max="5"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.priority ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join GDSC?</label>
                            <textarea
                                name="reason"
                                value={formData.reason}
                                onChange={handleInputChange}
                                placeholder="Tell us your motivation to join Google Developer Student Clubs..."
                                rows={4}
                                className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none ${errors.reason ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                    }`}
                            />
                            <div className="flex justify-between items-center">
                                {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                                <p className="text-gray-400 text-sm ml-auto">{formData.reason.length}/500</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Domain</label>
                                <input
                                    type="text"
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Web Development, AI/ML, Mobile Dev"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.domain ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Best Project (GitHub Link)</label>
                                <input
                                    type="url"
                                    name="bestProject"
                                    value={formData.bestProject}
                                    onChange={handleInputChange}
                                    placeholder="https://github.com/username/project"
                                    className={`w-full px-4 py-4 border-2 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.bestProject ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                                        }`}
                                />
                                {errors.bestProject && <p className="text-red-500 text-sm mt-1">{errors.bestProject}</p>}
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-[#4285F4] via-[#0F9D58] to-[#EA4335] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    'Join GDSC Community'
                                )}
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-gray-500 text-sm">
                                By submitting this form, you agree to join our amazing community of developers!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form